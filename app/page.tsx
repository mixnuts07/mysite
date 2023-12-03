// "use client";
// import { fetchEntries } from "@/contentful";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Entry, EntrySkeletonType } from "contentful";

// // eslint-disable-next-line @next/next/no-async-client-component
// export default async function Home() {
//   const entries = await fetchEntries(2);
//   return (
//     <main>
//       {entries?.items.map((entry) => {
//         const dateOnly = entry.sys.createdAt.split("T")[0];
//         return (
//           <div
//             key={entry.sys.id}
//             className=" border-black rounded-lg border-2 p-4 w-full h-2/5 mt-10"
//             // className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
//           >
//             <Link href={`blog/${entry.sys.id}`}>
//               <h2>{entry.fields.title?.toString()}</h2>
//               <h5>{dateOnly}</h5>
//             </Link>
//           </div>
//         );
//       })}
//     </main>
//   );
// }
