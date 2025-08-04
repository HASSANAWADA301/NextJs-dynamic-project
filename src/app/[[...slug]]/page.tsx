//app/[[...slug]]/page.tsx


"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ParentComponent from "../../../components/ParentComponent";

const availablePages = ["", "about", "services", "portfolio", "contactUs", "review", "contactUs/b"]; 

export default function DynamicPage() {
  const params = useParams();
  const [jsonName, setJsonName] = useState<string | null>(null);

  useEffect(() => {
    const slugParam = params?.slug;

    let slugPath = "";
    if (Array.isArray(slugParam)) {
      slugPath = slugParam.join("/");
    }
    console.log('------',slugPath)

    if (slugPath === "") {
      setJsonName("content"); 
    } else if (availablePages.includes(slugPath)) {
      setJsonName(slugPath);
    } else {
      setJsonName(null);
    }
  }, [params?.slug]);

  if (!jsonName) return <div className="m-0 flex justify-center items-center text-center">Loading...</div>;

  return <ParentComponent jsonFileName={jsonName} />;
}
