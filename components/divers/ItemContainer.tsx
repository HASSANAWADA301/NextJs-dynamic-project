// //components/ItemContainer


// "use client";
// import { useParams } from "next/navigation";
// import { useAppSelector } from "@/store/hooks";
// import ItemComponent from "./ItemComponent";

// type Props = {
//   id: string;
// };

// const ItemContainer: React.FC<Props> = ({ id }) => {
//   const params = useParams();
//   const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang || "en";

//   const item = useAppSelector((state) => state.file.data[id]);
//   console.log("Item ID:",item.id);

//   if (!item) return null;

//   return (
//     <ItemComponent
//       id={item.id}
//       type={item.type}
//       translations={item.translations}
//       lang={lang}
//     />
//   );
// };

// export default ItemContainer;
