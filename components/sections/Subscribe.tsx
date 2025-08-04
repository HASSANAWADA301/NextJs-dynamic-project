"use client";


type SubscribeData = {
  title: string;
  subtitle: string;
  inputPlaceholder: string;
  buttonLabel: string;
  footerText: string;
  footerLink: string;
  imageUrl: string;
};

type Props = {
id:string;
lang:string;
content:SubscribeData;
};

const Subscribe: React.FC<Props> = ({id,lang,content}) => {


  return (
    <div className="w-[1295px] max-w-full h-[469px] m-auto mt-[50px] flex items-center bg-[#f6f6f6] rounded-[24px] px-6 justify-around max-[1024px]:flex-col max-[1024px]:h-auto max-[1024px]:justify-center">
      <div className="flex flex-col gap-4 pl-[100px] max-[1024px]:text-center max-[1024px]:pl-0">
        <p className="text-[#eb6f2d] text-[18px] font-normal">
          {content.subtitle}
        </p>

        <h2 className="text-[48px] font-bold text-[#171717] w-[446px] max-[1024px]:w-auto max-[1024px]:text-[40px]">
          {content.title.split(" ").map((word:any, idx:any) =>
            word.toLowerCase() === "our" ? (
              <span key={idx} className="text-[#eb6f2d] font-bold">
                {word}{" "}
              </span>
            ) : (
              word + " "
            )
          )}
        </h2>

        <div className="flex items-center max-[1024px]:w-auto max-[1024px]:justify-center">
          <input
            type="email"
            placeholder={content.inputPlaceholder}
            className="w-[393px] h-[63px] bg-white rounded-[10px] border-none px-4 placeholder:text-[16px] placeholder:font-normal max-[1024px]:w-auto"
          />
          <button
            className={`w-[136px] h-[40px] ${lang=='ar'? "mr-[-150px] max-[1024px]:mr-[-35px]  ":"ml-[-150px] max-[1024px]:ml-[-90px]"}  bg-[#eb6f2d] text-white rounded-[10px] border-none font-bold 
            max-[1024px]:w-auto `}
          >
            {content.buttonLabel}
          </button>
        </div>

        <h6 className="text-[#bdbdbd] text-[16px] font-normal mt-2 sm:text-[14px]">
          {content.footerText}{" "}
          <span className="text-[#eb6f2d] font-bold">{content.footerLink}</span>
        </h6>
      </div>

      <div className="ml-auto pr-[50px] max-[1024px]:w-auto max-[1024px]:ml-0 max-[1024px]:pr-0">
        <img
          src={content.imageUrl}
          alt="Subscription Visual"
          className="w-[363px] h-[359px] rounded-[24px] object-cover mx-auto max-[1024px]:w-auto"
        />
      </div>
    </div>
  );
};

export default Subscribe;
