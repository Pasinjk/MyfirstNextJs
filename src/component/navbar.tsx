// "use client";
// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Button } from "antd";

// const Navbar = () => {
//   const pathname = usePathname();
//   console.log(pathname);
//   const [show, setShow] = useState<boolean>(true);
//   // const show: boolean = true;
//   const showText: boolean = true;
//   if (show === true) {
//   }

//   const onButtonClick = () => {
//     if (show === true) {
//       setShow(false);
//     } else {
//       setShow(true);
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           background: "red",
//           color: "white",
//           height: "5rem",
//           width: "100%",
//           visibility: show === true ? "visible" : "hidden",
//         }}
//       >
//         {showText === true ? <p>this is text</p> : <></>}
//         Navbar
//       </div>
//       <Button onClick={onButtonClick} />
//     </div>
//   );
// };

// export default Navbar;
