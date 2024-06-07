import React, {useEffect, useState} from "react";
import axios from "axios";
function Carousel(){
  const [anime, setAnime] = useState([]);
  useEffect(()=>{
    getAnime();
  }, []);
  
  const getAnime = async () => {
    const response = await axios.get("http://localhost:3000/carousel");
    setAnime(response.data);
  }
  
  return(
    <>
      <section className="w-full h-auto flex items-center justify-between overflow-auto bg-white snap-proximity flex-nowrap scroll-smooth p-[10px] gap-[10px]">
      { anime.map((anim,index)=> (
        <section className="w-full h-auto p-[20px] grid grid-cols-2 flex-none gap-[10px] snap-center" key={index + 1}>
            <img src={"/img/" + anim.gambar} alt={anim.judul} className="w-[100px] h-auto object-contain rounded-md"/>
            <section className="w-full h-auto flex flex-col gap-[10px]">
              <h1 className="text-[16px] text-black font-bold">{(anim.judul.length >= 20) ? anim.judul.substring(0,20) + "..." : anim.judul.substring(0,15)}</h1>
              <p className="text-[14px] text-slate-400 font-normal">{anim.deskripsi}</p>
              <a href={"Anime/" + anim.anime_id} className="w-[100px] h-[30px] text-[12px] text-white bg-blue-500 rounded-md flex items-center justify-center p-[10px]">Tonton Anime</a>
            </section>
        </section>
            ))}
      </section>
    </>
  );
}

export default Carousel;