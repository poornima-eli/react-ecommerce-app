import Header from "./Header"
import Footer from "./Footer";

import "../Styles/Home.css";
import { Carousel } from "react-bootstrap";
import data from "../Data";
import { Link } from "react-router-dom";
import { FaCircleChevronRight } from "react-icons/fa6";


export default function Home() {
    const imageLinks = [
        "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/WomensHero/PC/Fab-offers-on-kurtas-sets-more_8._CB580669580_.png",
        "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/WomensHero/PC/Classic-styles_9._CB580669580_.png",
        "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/WomensHero/PC/Jewellery_2._CB580669580_.png",
        "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/WomensHero/PC/Classic-styles_9._CB580669580_.png",
        "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/WomensHero/PC/printed-pop-coloured-trolleys_7._CB580669580_.png",
    ];
    const dataDisplay = data.slice(0, 4);
    const dataDisplayTwo = data.slice(12, 20);
    return (
        <>
            <Header />
            <Carousel indicators={false} className="carousel">
                {imageLinks.map((imageLink, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 custom-img"
                            src={imageLink}
                            alt={`Slide ${index + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>



            <h2>
                Recommended <FaCircleChevronRight className="left-arrow" />
            </h2>
            <div className="items-container">
                {dataDisplay.map((item, index) => (
                    <div key={index} id={item.id} className="items-home">
                        <img src={item.img} alt={item.title} className="products" />
                        <p className="title">{item.title}</p>
                        <Link to={`/Product-Info/${item.id}`}>
                            <button type="button" className="btn btn-dark button59">
                                Add to cart
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <h2>
                New Products <FaCircleChevronRight className="left-arrow" />
            </h2>
            <div className="items-container" style={{justifyContent:'space-evenly'}}>
                {dataDisplayTwo.map((item, index) => (
                    <div key={index} id={item.id} className="items-home" style={{margin:'5px'}}>
                        <img src={item.img} alt={item.title} className="products" />
                        <p className="title">{item.title}</p>
                        <Link to={`/Product-Info/${item.id}`}>
                            <button type="button" className="btn btn-dark button59">
                                Add to cart
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

