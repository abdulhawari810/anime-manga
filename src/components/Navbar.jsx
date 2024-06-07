import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
function Navbar(){
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  },[location]);
  return (
    <>
    <section className="w-full h-auto p-[20px] flex justify-center items-center fixed top-0 left-0 z-50 bg-[rgba(255,255,255,0.5)]">
      <section className="w-full h-[50px] p-[10px] py-[20px] flex justify-between items-center bg-blue-500 rounded-full shadow-md">
      <a href="Manga" className={" h-[40px] text-center flex justify-center items-center rounded-full text-[16px] font-bold p-[10px] " + ( url === "/Manga" ? "text-blue-500 bg-white w-[75px] shadow-md" : "text-white w-auto")}>Manga</a>
      <a href="/" className={" h-[40px] text-center flex justify-center items-center rounded-full text-[16px] font-bold p-[10px] " + ( url === "/" ? "text-blue-500 bg-white w-[75px] shadow-md" : "text-white w-auto")}>Home</a>
      <a href="Anime" className={" h-[40px] text-center flex justify-center items-center rounded-full text-[16px] font-bold p-[10px] " + ( url === "/Anime" ? "text-blue-500 bg-white w-[75px] shadow-md" : "text-white w-auto")}>Anime</a>
      </section>
    </section>
    </>
    );
}

export default Navbar;