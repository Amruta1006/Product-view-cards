import { createRoot } from "react-dom/client";
import "./index.css";
import shoes from "./ultra-comfort-shoes.jpg";
import superSpeedImage from './super-speed.jpg';

const root = createRoot(document.getElementById("root"));

function Card(props) {
    return (
        <div className="container">
            <h3 className="heading">{props.title || "UltraComfort Running Shoes"}</h3>
            <img src={props.image || shoes} alt={props.alt || "UltraComfort Running Shoes"} className="image" /> {/* Use props.image or default shoes */}
            <p className="paragraph">
                {props.description || "Step into unmatched comfort and style..."} {/* Shortened for brevity */}
            </p>
            <p className="price">{props.price || "Rs.2000"}</p>
            <button className="btn">
                {props.buttonText || "Add to Cart"}
            </button>
        </div>
    );
}

root.render(
    <>
        <Card /> {/* First card (using default image) */}
        <Card
            title="Super Speed Runners"
            alt="Super Speed Running Shoes"
            description="Experience unparalleled speed and agility with our Super Speed Runners. Designed for competitive athletes and speed enthusiasts, these shoes feature advanced cushioning for impact absorption and a responsive outsole for explosive takeoffs. The lightweight, breathable upper keeps your feet cool and comfortable, even during intense workouts." 
            price="Rs.3500"
            buttonText="Buy Now"
            image={superSpeedImage} 
        />
    </>
);