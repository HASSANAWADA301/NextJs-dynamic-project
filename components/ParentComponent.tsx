"use client";

import { useAppSelector,useAppDispatch } from "@/store/hooks";
import i18n from "../src/app/utils/i18n"; // import the real instance

import DynamicRenderer from "./DynamicRenderer";
import { useEffect, useState } from "react";
import { setAllSections, setSectionContent } from "@/store/slices/contentSlice";


type Props = {
  jsonFileName: string;
};

const ParentComponent = ({ jsonFileName }: Props) => {
  const dispatch = useAppDispatch();
  const sectionRecord = useAppSelector((state) => state.content.data || {});
  const sections = Object.values(sectionRecord);

  const [lang, setLang] = useState(i18n.language || "en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const fetchData = async () => {
      const path = `/data/${jsonFileName}.json`
      console.log('---path---',path)
      try {
        const res = await fetch(path);
        console.log("JsonFile Name:",jsonFileName);
        if (!res.ok) throw new Error(`Could not load ${jsonFileName}.json`);
        const data = await res.json();

        const formatted = data.reduce((acc: any, item: any) => {
          acc[item.id] = item;
          return acc;
        }, {});

        dispatch(setAllSections(formatted));
      } catch (err) {
        console.error("Error fetching JSON:", err);
      }
    };

    fetchData();
  }, [jsonFileName, dispatch]);

  useEffect(() => {
    const handleLangChange = (lng: string) => setLang(lng);
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <div dir={dir} className="px-4">
      <div className="flex justify-center gap-2 mb-4">
        {["en", "fr", "ar"].map((lng) => (
          <button
            key={lng}
            onClick={() => changeLanguage(lng)}
            className={`px-3 py-1 rounded text-sm border ${
              lang === lng ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>

      {sections.map((section: any) => {
        const { id, type, translations, ...rest } = section;
        const content = translations?.[lang] ?? translations?.["en"] ?? {};
        return (
          <DynamicRenderer
            key={id}
            id={id}
            type={type}
            lang={lang}
            content={content}
            {...rest}
          />
        );
      })}
    </div>
  );
};

export default ParentComponent;
