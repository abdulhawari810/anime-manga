import React, {useEffect, useState} from "react";
import axios from "axios";
function Card (){
  const [anime, setAnime] = useState([]);
  const [manga, setManga] = useState([]);
  
  useEffect(()=>{
    getAnime();
    getManga();
  },[]);
  
  const getAnime = async () => {
    let response = await axios.get("http://localhost:3000/anime");
    setAnime(response.data);
  }
  const getManga = async () => {
    const response = await axios.get("http://localhost:3000/cardm");
    setManga(response.data);
  }
  return(
    <>
      <section className="w-full h-auto p-[10px] flex justify-between items-center bg-white mt-[20px] rounded-t-lg">
        <h1 className="text-[20px] font-bold text-black">Anime</h1>
        <a href="Anime" className="w-auto h-auto flex justify-center items-center text-slate-400 text-[15px]">Lainnya <i className="ri-md ri-arrow-right-s-line"></i></a>
      </section>
      <section className="w-full h-auto grid grid-cols-2 gap-[10px] p-[10px] bg-white rounded-b-lg">
      { anime.map((anime,index) => (
        <a href={"Anime/" + anime.id} className="w-full h-auto flex flex-col shadow-md rounded-lg overflow-hidden mb-[10px]" key={anime.id}>
          <img src={"/img/" + anime.gambar} alt={anime.judul} className="w-full h-auto object-contain" />
          <section className="w-full h-auto flex flex-col p-[10px] gap-[10px]">
            <h1 className="text-[16px] font-bold">{(anime.judul.length >= 20) ? anime.judul.substring(0,20) + '...' : anime.judul.substring(0,15)}</h1>
            <span className="w-full h-auto flex items-end justify-between">
            <span className="w-[70%] h-auto text-[14px]">
              <i className={"ri-md " + (anime.skor > 2 ? "ri-star-fill text-yellow-400" : "ri-star-line")}>
              </i>
              <i className={"ri-md " + (anime.skor > 4 ? "ri-star-fill text-yellow-400" : "ri-star-line")}>
              </i>
              <i className={"ri-md " + (anime.skor > 6 ? "ri-star-fill text-yellow-400" : "ri-star-line")}>
              </i>
              <i className={"ri-md " + (anime.skor > 8 ? "ri-star-fill text-yellow-400" : "ri-star-line")}>
              </i>
              <i className={"ri-md " + (anime.skor >= 9 ? "ri-star-fill text-yellow-400" : "ri-star-line text-yellow-400")}>
              </i>
              </span>
              <span>
              {anime.skor}
              </span>
            </span>
          </section>
        </a>
        ))}
      </section>
      
      <section className="w-full h-auto p-[10px] flex justify-between items-center mt-[20px] rounded-t-lg bg-white">
        <h1 className="text-[20px] font-bold text-black">Manga</h1>
        <a href="Manga" className="w-auto h-auto flex justify-center items-center text-slate-400 text-[15px]">Lainnya <i className="ri-md ri-arrow-right-s-line"></i></a>
      </section>
      <section className="w-full h-auto grid grid-cols-1 gap-[20px] bg-white rounded-lg">
      { manga.map((manga,index) => (
        <a href="#" className="w-full h-auto bg-white shadow-md grid grid-cols-2 p-[10px] gap-[10px]">
          <img src={"/img/" + manga.gambar} alt={manga.judul} className="w-full h-auto object-contain rounded-lg"/>
          <section className="w-full h-auto flex flex-col gap-[10px]">
            <h1 className="text-[16px] font-bold">{manga.judul}</h1>
            <ul className="w-full h-auto flex flex-col p-[10px]">
            {manga.chapter.map((chapter,index) =>(
              <li className="w-full h-auto flex items-center text-[14px] gap-[5px] text-slate-500"><span className="w-[5px] h-[5px] rounded-full bg-red-500"></span> Chapter {chapter.chapter}</li>
              ))}
            </ul>
            <span className="w-[100px] h-[40px] flex items-center justify-center rounded-md bg-blue-500 text-white text-[14px] gap-[10px]"><span className="w-[10px] h-[10px] rounded-full bg-yellow-500"></span>{manga.status}</span>
          </section>
        </a>
          ))}
      </section>
    </>
  );
}

export default Card;