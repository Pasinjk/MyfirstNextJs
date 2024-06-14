
/// useSearchParams to recive value form id ///

// "use client";
// import { useSearchParams } from "next/navigation";

// export default function SearchBar() {
//   const searchParams = useSearchParams();
//   const search = searchParams.get("search");

// URL -> `/dashboard?search=my-project`
// `search` -> 'my-project'
//   return <>Search: {search}</>;
// }

/// Router link to next page ///

// "use client";
// import React from "react";
// import { useParams, useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";

// const Page = () => {
//   const router = useRouter();
//   const params = useSearchParams();
//   const search = params.get('serach')
//   return (
//     <main>
//       <button type="button" onClick={() => router.replace("/")}>
//         User Login
//       </button>
//       <button type="button" onClick={() => router.replace("/detail")}>
//         Detail
//       </button>
//     </main>
//   );
// };

// export default Page;
