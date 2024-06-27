import { React } from "react";
import Navbar from "./Navbar";
import "../Styles/Home.css";

export default function Header() {
    return (
        <>
            <Navbar />
            <div className="category">
                <div className="category-items">
                    <img
                        alt="Clothing"
                        src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Halo/main/V1/womens._SS300_QL85_FMpng_.png"
                    ></img>
                    <p>Clothing</p>
                </div>
                <div className="category-items">
                    <img
                        alt="Footwear"
                        src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Halo/main/V1/footwear._SS300_QL85_FMpng_.png"
                    ></img>
                    <p>Footwear</p>
                </div>
                <div className="category-items">
                    <img
                        alt="Luggages & Bags"
                        src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Halo/main/V1/luggage._SS300_QL85_FMpng_.png"
                    ></img>
                    <p>Luggages & Bags</p>
                </div>
                <div className="category-items">
                    <img
                        alt="Jewellery"
                        src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Halo/main/V1/jewellery._SS300_QL85_FMpng_.png"
                    ></img>
                    <p>Jewellery</p>
                </div>
                <div className="category-items">
                    <img
                        alt="Watches"
                        src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Halo/main/V1/watches._SS300_QL85_FMpng_.png"
                    ></img>
                    <p>Watches</p>
                </div>
                <div className="category-items">
                    <img
                        alt="Beauty"
                        src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Halo/main/V1/beauty._SS300_QL85_FMpng_.png"
                    ></img>
                    <p>Beauty</p>
                </div>
                <div className="category-items">
                    <img
                        alt="Handbags"
                        src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Halo/main/V1/handbags._SS300_QL85_FMpng_.png"
                    ></img>
                    <p>Handbags</p>
                </div>

                <div className="category-items">
                    <img
                        alt="Sunglasses"
                        src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Halo/main/V1/sunglasses._SS300_QL85_FMpng_.png"
                    ></img>
                    <p>Sunglasses</p>
                </div>
            </div>
        </>
    );
}
