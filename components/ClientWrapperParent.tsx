// // components/ParentComponentClient.tsx
// "use client";

// import dynamic from "next/dynamic";

// // Dynamic import must be inside a Client Component
// const ParentComponent = dynamic(() => import("./ParentComponent"), {
//   ssr: false,
// });

// const ParentComponentClient = ({ jsonFileName }: { jsonFileName: string }) => {
//   return <ParentComponent jsonFileName={jsonFileName} />;
// };

// export default ParentComponentClient;
