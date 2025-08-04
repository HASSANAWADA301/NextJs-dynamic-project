type props = {
  text: string;
  highlight?: string;
};
const SectionTitle: React.FC<props> = ({ text, highlight }) => (
  <h1 className="text-[#353232] w-[384px] h-[192px] text-[64px] font-bold
  max-[1335px]:text-[48px] max-[1335px]:w-[100%] max-[1335px]:h-auto max-[1335px]:text-center
  max-[1024px]:text-[36px] max-[1024px]:w-[100%] max-[1024px]:h-auto 
  max-[480px]:text-[24px] max-[320px]:text-[20px]">
    {text}
    {highlight && <span style={{ color: "#eb6f2d" }}> {highlight}</span>}
  </h1>
);
export default SectionTitle;
