import Carousel from "../components/Carousel.jsx";
import Card from "../components/Card.jsx";
function Home(){
  return (
    <>
    <section className="w-auto h-auto flex flex-col p-[10px] my-[70px]">
       <Carousel />
       <Card />
    </section>
    </>
    );
}

export default Home;