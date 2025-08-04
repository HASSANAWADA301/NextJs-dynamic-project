// 'use client';

// import Link from 'next/link';
// import { useAppSelector, useAppDispatch } from '../src/store/hooks';
// import { setFileName } from '../src/store/slices/fileSlice';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';

// const files = ['file1', 'file2', 'file3']; // Add as many files as you want

// const Navbar = () => {
//   const dispatch = useAppDispatch();
//   const pathname = usePathname(); // Returns e.g. "/file1"
//   const currentFile = useAppSelector((state) => state.file.fileName);

//   return (
//     <nav className="bg-gray-800 p-4 text-white flex gap-6 items-center">
//       <span className="font-bold text-lg">File Viewer</span>

//       {files.map((file) => (
//         <Link
//           key={file}
//           href={`/${file}`}
//           className={clsx(
//             'px-3 py-1 rounded hover:bg-gray-700 transition',
//             pathname === `/${file}` && 'bg-gray-700 font-semibold'
//           )}
//           onClick={() => dispatch(setFileName(`${file}.json`))}
//         >
//           {file}
//         </Link>
//       ))}

//       <div className="ml-auto text-sm text-gray-300">
//         Loaded: <span className="font-medium">{currentFile || 'None'}</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
