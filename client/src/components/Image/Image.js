import React, { useRef } from 'react';

import castilian2 from '../../assets/images/pictures/castilian2.jpg';
import label from '../../assets/images/label.PNG';


function Image({ currentPage, executeScroll }) {




    return (
        <>
            <div className="stylingImageDiv">
                <div className="imageStyle">
                    <div className="full setPos">
                        <img className="full" src={castilian2} alt="#"></img>
                        <div className="bottomBoxOverlay d-flex justify-content-center">
                            <div className="box">
                                class
                            </div>
                        </div>
                        <div className="imageTextOverlay">
                            <p className="m-0 textOverlay">{`Developers &`}</p>
                            <p className="m-0 textOverlay">{`Property`}</p>
                            <p className="m-0 textOverlay">{'Management'}</p>
                        </div>
                    </div>
                </div>
                <div className="labelStyle">
                    <img className="half" src={label} alt="#" />
                </div>
            </div>
        </>
    )
}

export default Image;