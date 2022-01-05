import React from 'react';
import castilian4 from '../../assets/images/pictures/castilian4.jpg';
import aspenExterior from '../../assets/images/pictures/aspenExterior.jpg';
import gStreetApts from '../../assets/images/pictures/gStreetApts.jpg';
import glacierPointApts from '../../assets/images/pictures/glacierPointApts.jpg';
import fifthG from '../../assets/images/pictures/fifthG.jpg';
import westMedicalImg from '../../assets/images/pictures/westMedicalImg.jpg';
import aspenCourtImg from '../../assets/images/pictures/aspenCourtImg.jpg';
import trackSideImg from '../../assets/images/pictures/trackSideImg.jpg';

import { Link } from 'react-router-dom';

function Property() {

    const eightWake = () => {
        window.location.href = "https://www.8thandwake.com/";
    }

    const aspen = () => {
        window.location.href = "https://aspenvillage.yolopropertymanagement.com/";
    }

    const gStreet = () => {
        window.location.href = "https://gstreet.yolopropertymanagement.com/";
    }

    const glacier = () => {
        window.location.href = "https://glacierpoint.yolopropertymanagement.com/";
    }

    const fifthGStreet = () => {
        window.location.href = "";
    }

    const westDavisMedical = () => {
        window.location.href = "";
    }

    const trackSideCenter = () => {
        window.location.href = "";
    }

    const aspenCourt = () => {
        window.location.href = ""
    }

    return (
        <div className="footerPadding">
            <div className="row">
                <div className="col-12">
                    <div className="" id="residential">
                        <div className="jumbotron">
                            <div className="container-31 w-container upperPadding">
                                <div className="row teamHeader">
                                    <div className="col-12 d-flex justify-content-between">
                                        <p className="teamHeader m-0">Residential</p>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex positionRE">
                                                    <Link to="#" onClick={eightWake} className="imageLink d-flex flex-fill">
                                                        <img className="largePhoto flex-fill show" src={castilian4} alt="Photo of Casilian" />
                                                        <div className="positionAB hide">A</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="propertyName m-0">{`8TH & WAKE`}</p>
                                                <p className="m-0">{`1440 Wake Forest Drive`}</p>
                                                <p className="m-0">{`Davis,CA`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row upperPadding20">
                                    <div className="col-12">
                                        <div className="d-flex flex-wrap">
                                            <div className="spaceBetweenThumbs flex-fill">
                                                <Link to="#" onClick={aspen} className="imageLink">
                                                    <div className="center">
                                                        <div className="positionRE">
                                                            <img src={aspenExterior} alt="Aspen Exterior" className="thumbnails show" />
                                                            <div className="positionAB2 hide">A</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="propertyNameThumb center m-0">Aspen Village Apartments</div>
                                                <div className="center m-0">2323 Shasta Drive</div>
                                                <div className="center m-0">Davis, CA</div>
                                            </div>
                                            <div className="spaceBetweenThumbs flex-fill">
                                                <Link to="#" onClick={gStreet} className="imageLink">
                                                    <div className="center">
                                                        <div className="positionRE">
                                                            <img src={gStreetApts} alt="G Street Apts" className="thumbnails show" />
                                                            <div className="positionAB2 hide">A</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="propertyNameThumb center m-0">G Street Apartments</div>
                                                <div className="center m-0">2323 Shasta Drive</div>
                                                <div className="center m-0">Davis, CA</div>
                                            </div>
                                            <div className="spaceBetweenThumbs flex-fill">
                                                <Link to="#" onClick={glacier} className="imageLink">
                                                    <div className="center">
                                                        <div className="positionRE">
                                                            <img src={glacierPointApts} alt="Glacier Point Apts" className="thumbnails show" />
                                                            <div className="positionAB2 hide">A</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="propertyNameThumb center m-0">Glacier Point Apartments</div>
                                                <div className="m-0 center">2225 Glacier Drive</div>
                                                <div className="m-0 center">Davis, CA</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-end bottomBorder">
                                        <Link to="#" className="navLinkTo">{`See All ->`}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="" id="commercial">
                        <div className="jumbotron">
                            <div className="container-31 w-container upperPadding">
                                <div className="row teamHeader">
                                    <div className="col-12 d-flex justify-content-between">
                                        <p className="teamHeader m-0">Commercial</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex positionRE">
                                                    <Link to="#" onClick={fifthGStreet} className="imageLink d-flex flex-fill">
                                                        <img className="largePhoto flex-fill show" src={fifthG} alt="Photo of Casilian" />
                                                        <div className="positionAB hide">A</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="propertyName m-0">{`5TH & G PLAZA`}</p>
                                                <p className="m-0">{`400-420 G Street`}</p>
                                                <p className="m-0">{`Davis,CA`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row upperPadding20">
                                    <div className="col-12">
                                        <div className="d-flex flex-wrap">
                                            <div className="spaceBetweenThumbs flex-fill">
                                                <Link to="#" onClick={westDavisMedical} className="imageLink">
                                                    <div className="center">
                                                        <div className="positionRE">
                                                            <img src={westMedicalImg} alt="Aspen Exterior" className="thumbnails show" />
                                                            <div className="positionAB2 hide">A</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="propertyNameThumb center m-0">West Davis Medical Building</div>
                                                <div className="center m-0">2440 West Covell Blvd</div>
                                                <div className="center m-0">Davis, CA</div>
                                            </div>
                                            <div className="spaceBetweenThumbs flex-fill">
                                                <Link to="#" onClick={trackSideCenter} className="imageLink">
                                                    <div className="center">
                                                        <div className="positionRE">
                                                            <img src={trackSideImg} alt="G Street Apts" className="thumbnails show" />
                                                            <div className="positionAB2 hide">A</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="propertyNameThumb center m-0">Track Side Center</div>
                                                <div className="m-0 center">901-919 3rd Street</div>
                                                <div className="m-0 center">Davis, CA</div>
                                            </div>
                                            <div className="spaceBetweenThumbs flex-fill">
                                                <Link to="#" onClick={aspenCourt} className="imageLink">
                                                    <div className="center">
                                                        <div className="positionRE">
                                                            <img src={aspenCourtImg} alt="Glacier Point Apts" className="thumbnails show" />
                                                            <div className="positionAB2 hide">A</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="propertyNameThumb center m-0">Aspen Court</div>
                                                <div className="center m-0">2660 West Covell Blvd</div>
                                                <div className="center m-0">Davis, CA</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property;