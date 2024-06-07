import React, {useState, useEffect} from "react"
import axios from "axios"
function Anime(){
  const [judul, setJudul] = useState("");
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    Search();
  }, [])
  const Search = async () => {
      const response = await axios.get(`http://localhost:3000/anime?judul_like=${judul}`);
      setAnime(response.data);
      console.log(response);
  }
  return (
    <>
      <form onKeyUp={Search} className="mt-[100px] w-full h-auto flec items-center justify-center p-[20px]">
       <input type="search" onChange={(e) => setJudul(e.target.value)} className="w-full h-[45px] p-[10px] text-[18px] text-black bg-white rounded-lg shadow-md" placeholder="Cari Anime, Contoh: One Piece atau one, piece enabled:hover:outline-blue-500 enabled:hover:border-blue-500 border-2 outline-2"/>
      </form>
      <section className="w-full h-auto p-[10px] flex justify-between items-center bg-white mt-[20px] rounded-t-lg">
        <h1 className="text-[20px] font-bold text-black">Anime</h1>
        <a href="Anime" className="w-auto h-auto flex justify-center items-center text-slate-400 text-[15px]">Lainnya <i className="ri-md ri-arrow-right-s-line"></i></a>
      </section>
      <section className="w-full h-auto grid grid-cols-2 gap-[10px] p-[10px] bg-white rounded-b-lg">
      {anime.map((anime,index) => (
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
    </>
    );
}

export default Anime;