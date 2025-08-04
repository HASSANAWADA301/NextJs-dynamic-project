// // components/ClientWrapper.tsx
// 'use client';

// import dynamic from 'next/dynamic';

// // Dynamically import the ParentComponent
// const ParentComponent = dynamic(() => import('./ParentComponent'), {
//   ssr: false,
// });

// export default function ClientWrapper({ jsonFileName }: { jsonFileName: string }) {
//   return <ParentComponent jsonFileName={jsonFileName} />;
// }
