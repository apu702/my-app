import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../../src/images/img2.png";
import Common from './Common';


const Home= () => {
    return (
       <>
         <Common
            name=' Grow Your Business with ' 
            imgsrc={web}
            visit="/service"
            btnname="Get Started">
          </Common>
       </>
    );
};

export default Home;