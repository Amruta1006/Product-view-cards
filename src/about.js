import React from 'react';
import { Card } from './components/Card'; 
import shoes from "./ultra-comfort-shoes.jpg";
import superSpeedImage from "./super-speed.jpg";

function About() {
    return (
        <div>
            <Card
                title="UltraComfort Running Shoes"
                alt="UltraComfort Running Shoes"
                description="Altra running shoes are designed to let your feet move the way they were meant to. The FootShape™ toe box provides ample room for your toes to relax and spread out, while the ZeroDrop™ platform keeps your heel and forefoot at the same distance from the ground for optimal balance and a natural foot strike."
                price="Rs.2000"
                buttonText="Add to Cart"
                image={shoes}
            />
            <Card
                title="Super Speed Runners"
                alt="Super Speed Running Shoes"
                description="Push your limits with the Super Speed Runners. These high-performance running shoes are designed to help you achieve your personal best. The lightweight construction and aerodynamic profile minimize drag, while the adaptive fit system ensures a secure and comfortable feel. Experience the difference speed makes."
                price="Rs.3500"
                buttonText="Buy Now"
                image={superSpeedImage}
            />
        </div>
    );
}

export default About;