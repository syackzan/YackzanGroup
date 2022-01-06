import React from 'react';

import oesteFlyover from '../../assets/images/pictures/oesteFlyover.jpg';
import fifthG from '../../assets/images/pictures/fifthG.jpg';
import castilian4 from '../../assets/images/pictures/castilian4.jpg';
import westDavisImg from '../../assets/images/pictures/westDavisImg.jpg';

function Develop() {
    return (
        <>
            <div className="fullVP d-flex justify-content-center" id="currentDevs">
                <div className="container upperPadding">
                    <div className="row m-0 teamHeader">{`Current Developments`}</div>
                    <div className="row m-0 height80">
                        <div className="col-md-6 p-1">
                            <div className="row">
                                <div className="col-12">
                                    <div className="developImageContainer">
                                        <img src={oesteFlyover} alt="Oeste Image" className="styleCurDevImgs" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <p className="m-0 propertyName">RIVERFRONT (WEST)</p>
                                    <p className="m-0">Total SF</p>
                                    <p className="m-0"># Of Units</p>
                                    <p className="m-0">Total Cost</p>
                                    <p className="m-0">Planned Development: Mixed-Used</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-1">
                            <div className="row">
                                <div className="col-12">
                                    <div className="developImageContainer">
                                        <img src={oesteFlyover} alt="Oeste Image" className="styleCurDevImgs" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <p className="m-0 propertyName">OESTE RANCH</p>
                                    <p className="m-0"># Of Acres</p>
                                    <p className="m-0"># Of Trees</p>
                                    <p className="m-0">Total Cost</p>
                                    <p className="m-0">Planned Development: Farming and Land Conservation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fullVP d-flex justify-content-center" id="pastDevs">
                <div className="container">
                    <div className="row m-0 teamHeader">{`Past Developments`}</div>
                    <div className="row m-0 height80">
                        <div className="col-md-4 p-1">
                            <div className="row">
                                <div className="col-12">
                                    <div className="developImageContainer">
                                        <img src={castilian4} alt="Oeste Image" className="styleCurDevImgsSm" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <p className="m-0 propertyName">{`8TH & WAKE`}</p>
                                    <p className="m-0">Total SF</p>
                                    <p className="m-0"># Of Units</p>
                                    <p className="m-0">Total Cost</p>
                                    <p className="m-0">Planned Development: Mixed-Used</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-1">
                            <div className="row">
                                <div className="col-12">
                                    <div className="developImageContainer">
                                        <img src={westDavisImg} alt="Oeste Image" className="styleCurDevImgsSm" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <p className="m-0 propertyName">ASPEN NEIGHBORHOOD</p>
                                    <p className="m-0"># Of Acres</p>
                                    <p className="m-0"># Of Trees</p>
                                    <p className="m-0">Total Cost</p>
                                    <p className="m-0">Planned Development: Farming and Land Conservation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-1">
                            <div className="row">
                                <div className="col-12">
                                    <div className="developImageContainer">
                                        <img src={fifthG} alt="Oeste Image" className="styleCurDevImgsSm" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <p className="m-0 propertyName">{`5TH & G PLAZA REDEVELOPMENT`}</p>
                                    <p className="m-0"># Of Acres</p>
                                    <p className="m-0"># Of Trees</p>
                                    <p className="m-0">Total Cost</p>
                                    <p className="m-0">Planned Development: Farming and Land Conservation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Develop;