"use client";


type FooterSection = {
  title: string;
  items: string[];
};

type FooterData = {
  logoUrl: string;
  description: string;
  sections: FooterSection[];
  copyright: string;
};

type Props = {
  id: string;
  lang: string;
  content: FooterData;
};
const Footer: React.FC<Props> = ({ id, lang, content }) => {
  return (
    <footer className="bg-[#f6f6f6] w-full mt-[100px] px-6 py-10 rounded-[24px]">
      <div className="flex justify-between items-start gap-y-10 max-[1024px]:flex-col max-[1024px]:justify-center max-[1024px]:items-center">
        <div className="max-w-[285px] text-center">
          <img
            src={content.logoUrl}
            alt="logo"
            className="w-[120px] h-[100px] mx-auto"
          />
          <p className="text-[#484848] text-[16px] font-normal mt-4">
            {content.description}
          </p>
        </div>

        {content.sections.map((section, idx) => (
          <ul
            key={idx}
            className={`${
              lang == "ar" ? "text-right" : "text-left"
            } max-[1024px]:text-center max-[1024px]:mt-6`}
          >
            <li className="text-[20px] font-bold mb-2">{section.title}</li>
            {section.items.map((item, i) => (
              <li key={i} className="pt-5">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>

      <hr className="border-t border-[#dcdcdc] mt-10 mb-6" />

      <div className={`text-center`}>
        <h3 className="text-[16px] font-bold sm:text-[13px]">
          {content.copyright}
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
