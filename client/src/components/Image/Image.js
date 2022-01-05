import React, { useRef } from 'react';

import castilian2 from '../../assets/images/pictures/castilian2.jpg';
import label from '../../assets/images/label.PNG';


function Image({ currentPage, executeScroll }) {


    const renderLilNav = () => {

        if (currentPage === 'aboutus'){
            return (
                <div className="utop fixed">
                    <a href="#values" className="noStyle lilNavText">VALUES</a>
                    <a href="#team" className="noStyle lilNavText">TEAM</a>
                </div>
            )
        } else if (currentPage === 'developments'){
            return (
                <div className="utop">
                    <p className="lilNavText">DEVELOPMENTS</p>
                </div>
            )
        } else if (currentPage === 'property'){
            return (
                <div className="utop">
                    <a href="#residential" className=" noStyle lilNavText">RESIDENTIAL</a>
                    <a href="#commercial" className="noStyle lilNavText">COMMERCIAL</a>
                </div>
            )
        } else if (currentPage === 'contact'){
            return (
                <div className="utop">
                    <a href="#contact" className="noStyle lilNavText">CONTACT</a>
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }

    return (
        <div className="stylingImageDiv">
            <div className="imageStyle">
                <div className="full setPos">
                    {renderLilNav()}
                    <img className="full" src={castilian2} alt="#"></img>
                    <div className="utop2 d-flex justify-content-center">
                        <div className="box">
                           class
                        </div>
                    </div>
                </div>
            </div>
            <div className="labelStyle">
                <img className="half" src={label} alt="#" />
            </div>
        </div>
    )
}

export default Image;