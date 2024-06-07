import React,{useState,useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import axios from "axios"
function animeDetail(){
  const {animeid} = useParams();
  const [judul, setJudul] = useState("");
  const [gambar, setGambar] = useState("");
  const [ringkasan, setRingkasan] = useState("");
  const [status, setStatus] = useState("");
  const [studio, setStudio] = useState("");
  const [episode, setEpisode] = useState(0);
  const [tipe, setTipe] = useState("");
  const [score, setScore] = useState(0);
  const [rilis, setRilis] = useState("");
  const [durasi, setDurasi] = useState("");
  const [produser, setProduser] = useState("");
  const [posted, setPosted] = useState("");
  const [genre, setGenre] = useState([]);
  const [eps, setEps] = useState([]);
  const history = useNavigate();
  
  function handleBack(e){
    e.preventDefault();
    history(-1);
  }
  
  useEffect( () => {
    getAnimeById();
  },[]);
  const getAnimeById = async () => {
    const response = await axios.get(`http://localhost:3000/anime/${animeid}`);
    const respon = await axios.get(`http://localhost:3000/movie?id=${animeid}`);
    setEps(respon.data);
    console.log(respon.data)
    setJudul(response.data.judul);
    setStudio(response.data.studio);
    setStatus(response.data.status);
    setProduser(response.data.produser);
    setRingkasan(response.data.ringkasan);
    setEpisode(response.data.total_eps);
    setDurasi(response.data.durasi);
    setGambar(response.data.gambar);
    setTipe(response.data.tipe);
    setGenre(response.data.genre);
    setPosted(response.data.posted_by);
    setRilis(response.data.tgl_rilis);
    setScore(response.data.skor);
  }
  return(
    <>
     <section className="w-full h-[70px] flex justify-between items-center bg-blue-500 p-[10px] fixed top-0 left-0 z-50">
        <a className="w-auto h-auto flex items-center gap-[10px] text-white" onClick={handleBack}>
         <i className="ri-lg ri-arrow-left-line"></i>
         <h1 className="text-[18px] font-bold">{(judul.length >= 20) ? judul.substring(0,20) + "..." : judul}</h1>
        </a>
     </section>
     <section className="w-auto h-auto flex flex-col p-[10px] my-[150px]">
      <section className="w-full h-auto flex flex-col relative justify-center items-center pt-[130px] bg-white pb-[30px] shadow-md rounded-lg">
        <img src={"/img/" + gambar} alt={judul} className="w-[150px] h-auto object-contain rounded-lg border-8 border-white absolute -top-[80px]"/>
        <h1 className="w-[80%] h-auto font-bold text-[20px] text-black text-center">{judul}</h1>
      </section>
      <section className="w-full h-[50px] p-[10px] flex justify-between items-center shadow-md rounded-lg my-[20px] bg-white">
        <span className="w-[70%] h-auto text-[16px]" >
              <i className={"ri-md " + (score > 2 ? "ri-star-fill text-yellow-400" : "ri-star-line")}>
              </i>
              <i className={"ri-md " + (score > 4 ? "ri-star-fill text-yellow-400" : "ri-star-line")}>
              </i>
              <i className={"ri-md " + (score > 6 ? "ri-star-fill text-yellow-400" : "ri-star-line")}>
              </i>
              <i className={"ri-md " + (score > 8 ? "ri-star-fill text-yellow-400" : "ri-star-line")}>
              </i>
              <i className={"ri-md " + (score >= 9 ? "ri-star-fill text-yellow-400" : "ri-star-line text-yellow-400")}>
              </i>
              </span>
              <span className="text-[16px] font-black">
              {score}
              </span>
      </section>
      <section className="w-full h-auto p-[10px] flex flex-col bg-white rounded-lg gap-[15px] shadow-md mb-[20px]">
        <section className="w-full h-[40px] flex flex-col">
          <span className="text-[16px] font-bold">
           Status
          </span>
          <span className="text-[16px] font-medium text-slate-500">
           {status}
          </span>
        </section>
        <section className="w-full h-auto flex flex-col">
          <span className="text-[16px] font-bold">
           Produser
          </span>
          <span className="text-[16px] font-medium text-slate-500">
           {produser}
          </span>
        </section>
        <section className="w-full h-[40px] flex flex-col">
          <span className="text-[16px] font-bold">
           Durasi
          </span>
          <span className="text-[16px] font-medium text-slate-500">
           {durasi}
          </span>
        </section>
        <section className="w-full h-[40px] flex flex-col">
          <span className="text-[16px] font-bold">
           Total Episode
          </span>
          <span className="text-[16px] font-medium text-slate-500">
           {(episode == 0) ? "???" : episode}
          </span>
        </section>
        <section className="w-full h-[40px] flex flex-col">
          <span className="text-[16px] font-bold">
           Tanggal Rilis
          </span>
          <span className="text-[16px] font-medium text-slate-500">
           {rilis}
          </span>
        </section>
        <section className="w-full h-[40px] flex flex-col">
          <span className="text-[16px] font-bold">
           Posted By
          </span>
          <span className="text-[16px] font-medium text-slate-500">
           {posted}
          </span>
        </section>
        <section className="w-full h-[40px] flex flex-col">
          <span className="text-[16px] font-bold">
           Studio
          </span>
          <span className="text-[16px] font-medium text-slate-500">
           {studio}
          </span>
        </section>
        <section className="w-full h-[40px] flex flex-col">
          <span className="text-[16px] font-bold">
           Tipe
          </span>
          <span className="text-[16px] font-medium text-slate-500">
           {tipe}
          </span>
        </section>
      </section>
      <section className="w-full h-auto flex flex-col bg-white rounded-lg shadow-md p-[10px]">
        <section className="w-full h-auto flex-wrap flex justify-center items-center gap-[10px]">
        { genre.map((genre,index) => (
          <section className="w-auto h-auto p-[10px] text-[14px] text-white bg-blue-500 text-center flex items-center justify-center rounded-md shadow-sm" key={genre.id}>{genre.genre}</section>
          ))}
        </section>
        <section className="w-full h-auto flex flex-col gap-[10px] mt-[10px]">
          <h1 className="text-[18px] font-bold">Sinopsis</h1>
          <section className="text-[14px] font-normal text-slate-500 flex flex-col relative gap-[10px] whitespace-pre">
           <p style={{whiteSpace: "pre-line"}}>{ringkasan}</p>
          </section>
        </section>
        <section className="w-full h-auto flex flex-col p-[20px] shadow-md rounded-lg my-[20px] bg-blue-50">
          <section className="w-full h-auto">
            <h1 className="text-[16px] text-slate-950 font-bold">Episode</h1>
          </section>
          <section className="w-full h-[250px] flex flex-col overflow-auto mt-[20px]">
            { eps.map((episode,index) => (
            <a href="#" className="w-full h-[40px] flex items-center text-[14px  ] text-slate-700 bg-blue-200 p-[10px]">Episode {episode.episode}</a>
              ))}
          </section>
        </section>
      </section>
    </section>
    </>
  );
};
export default animeDetail;