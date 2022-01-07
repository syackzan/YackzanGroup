import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Importing Images for Aspen Development
import castiliantest from '../../assets/images/pictures/castilian4.jpg';
import westDavisImg from '../../assets/images/pictures/westDavisImg.jpg';
import westDavisImg2 from '../../assets/images/pictures/westDavisImg2.jpg';

//Importing Images Castilian (8th & Wake Photos)
import castilian1 from '../../assets/images/pictures/castilian/castilian1.jpg';
import castilian2 from '../../assets/images/pictures/castilian/castilian2.jpg';
import castilian3 from '../../assets/images/pictures/castilian/castilian3.jpg';
import castilian4 from '../../assets/images/pictures/castilian/castilian4.jpg';
import castilian5 from '../../assets/images/pictures/castilian/castilian5.jpg';

//Importing Images for 5th & G Development
import fifthG1 from '../../assets/images/pictures/fifthG/fifthG1.jpg';
import fifthG2 from '../../assets/images/pictures/fifthG/fifthG2.jpg';

//Importing Images for Riverfront Development

//Importing Images for Oeste Development


function Develop() {

    const [castilianCount, setCastilianCount] = useState(0);
    const [oesteCount, setOesteCount] = useState(0);
    const [aspenCount, setAspenCount] = useState(0);
    const [fifthGCount, setFifthGCount] = useState(0);
    const [riverfrontCount, setRiverfrontCount] = useState(0)



    let aspenArray = [westDavisImg, westDavisImg2, castiliantest];
    let counter1;

    let castilianArray = [castilian1, castilian2, castilian3, castilian4, castilian5]
    let counter2;

    let fifthGArray =[fifthG1, fifthG2];
    let counter3;

    let oesteArray = [];
    let counter4;

    let roverfrontArray = [];
    let counter5;

    // Aspen Photos Navigation Function For Left & Right Arrows
    const aspenClick = (direction) => {

        counter1 = aspenCount;

        if (direction === -1) {

            counter1--

            if (counter1 === -1) {
                counter1 = aspenArray.length - 1;
            }

        }

        if (direction === 1) {

            counter1++

            if (counter1 === aspenArray.length) {
                counter1 = 0;
            }

        }

        setAspenCount(counter1)

    }

    //Aspen Photo Dot onClick function
    const aspenDots = (index) => {
        setAspenCount(index)
    }

    //Castilian Photos Navigation Function For Left & Right Arrows
    const castilianClick = (direction) => {

        counter2 = castilianCount;

        if (direction === -1) {

            counter2--

            if (counter2 === -1) {
                counter2 = castilianArray.length - 1;
            }

        }

        if (direction === 1) {

            counter2++

            if (counter2 === castilianArray.length) {
                counter2 = 0;
            }

        }

        setCastilianCount(counter2)

    }

    //Castilian Photo Dot onClick function
    const castilianDots = (index) => {
        setCastilianCount(index)
    }

    //Castilian Photos Navigation Function For Left & Right Arrows
    const fifthGClick = (direction) => {

        counter3 = fifthGCount;

        if (direction === -1) {

            counter3--

            if (counter3 === -1) {
                counter3 = fifthGArray.length - 1;
            }

        }

        if (direction === 1) {

            counter3++

            if (counter3 === fifthGArray.length) {
                counter3 = 0;
            }

        }

        setFifthGCount(counter3)

    }

    //Castilian Photo Dot onClick function
    const fifthGDots = (index) => {
        setFifthGCount(index)
    }

    return (
        <div className="footerPadding">
            <div className="d-flex justify-content-center upperPadding" id="currentDevs">
                <p className="titleDevs">Current Developments</p>
            </div>
            <div className="d-flex justify-content-center flex-column">
                {/* RIVERFRONT CONTENT */}
                <div className="container upperPadding">
                    <div className="row m-0 height80">
                        <div className="col-md-3 sideRightBorder p-1">
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-end">
                                    <p className="m-0 teamHeader">{`RIVERFRONT`}</p>
                                    <p className="m-0 propertyName">Developed in 1992</p>
                                    <p className="m-0 textAlignment">Information Relating to the extent of the project</p>
                                    <p className="m-0">????????</p>
                                    <p className="m-0">???????</p>
                                    <p className="m-0">???????</p>
                                    <p>{`${aspenCount}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 p-2">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="developImageContainer d-flex align-items-center">
                                                {castilianArray.map((pic, index) => (
                                                    <div key={index}>
                                                        {index == castilianCount ? (<>
                                                            <img src={pic} className="styleCurDevImgs fade" />
                                                        </>) : (<></>)}
                                                    </div>
                                                ))}
                                                <Link to="#" className="noStyle next" onClick={() => castilianClick(1)}>{`>`}</Link>
                                                <Link to="#" className="noStyle prev" onClick={() => castilianClick(-1)}>{`<`}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="dotDiv">
                                                {castilianArray.map((dot, index) => (
                                                    <div className={index === castilianCount ? ("dot activeDot") : ("dot")} key={index} onClick={() => castilianDots(index)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* OESTE CONTENT */}
                 <div className="container upperPadding">
                    <div className="row m-0 height80">
                        <div className="col-md-3 sideRightBorder p-1">
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-end">
                                    <p className="m-0 teamHeader">{`OESTE RANCH`}</p>
                                    <p className="m-0 propertyName">Developed in 1992</p>
                                    <p className="m-0 textAlignment">Information Relating to the extent of the project</p>
                                    <p className="m-0">????????</p>
                                    <p className="m-0">???????</p>
                                    <p className="m-0">???????</p>
                                    <p>{`${aspenCount}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 p-2">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="developImageContainer d-flex align-items-center">
                                                {castilianArray.map((pic, index) => (
                                                    <div key={index}>
                                                        {index == castilianCount ? (<>
                                                            <img src={pic} className="styleCurDevImgs fade" />
                                                        </>) : (<></>)}
                                                    </div>
                                                ))}
                                                <Link to="#" className="noStyle next" onClick={() => castilianClick(1)}>{`>`}</Link>
                                                <Link to="#" className="noStyle prev" onClick={() => castilianClick(-1)}>{`<`}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="dotDiv">
                                                {castilianArray.map((dot, index) => (
                                                    <div className={index === castilianCount ? ("dot activeDot") : ("dot")} key={index} onClick={() => castilianDots(index)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center upperPadding" id="pastDevs">
                <p className="titleDevs">Past Developments</p>
            </div>
            <div className="d-flex justify-content-center flex-column">
                {/* Aspen Development Content */}
                <div className="container">
                    <div className="row m-0 height80">
                        <div className="col-md-3 sideRightBorder p-1">
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <p className="m-0 teamHeader">{`Aspen Neighborhood`}</p>
                                    <p className="m-0 propertyName">Developed in 1992</p>
                                    <p className="m-0">Information Relating to the extend of the project</p>
                                    <p className="m-0">????????</p>
                                    <p className="m-0">???????</p>
                                    <p className="m-0">???????</p>
                                    <p>{`${aspenCount}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 p-2">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="developImageContainer d-flex align-items-center">
                                                {aspenArray.map((pic, index) => (
                                                    <div key={index}>
                                                        {index == aspenCount ? (<>
                                                            <img src={pic} className="styleCurDevImgs fade" />
                                                        </>) : (<></>)}
                                                    </div>
                                                ))}
                                                <Link to="#" className="noStyle next" onClick={() => aspenClick(1)}>{`>`}</Link>
                                                <Link to="#" className="noStyle prev" onClick={() => aspenClick(-1)}>{`<`}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="dotDiv">
                                                {aspenArray.map((dot, index) => (
                                                    <div className={index === aspenCount ? ("dot activeDot") : ("dot")} key={index} onClick={() => aspenDots(index)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 8TH & WAKE Development Content */}
                <div className="container upperPadding">
                    <div className="row m-0 height80">
                        <div className="col-md-3 sideRightBorder p-1">
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <p className="m-0 teamHeader">{`8TH & WAKE`}</p>
                                    <p className="m-0 propertyName">Developed in 1992</p>
                                    <p className="m-0">Information Relating to the extend of the project</p>
                                    <p className="m-0">????????</p>
                                    <p className="m-0">???????</p>
                                    <p className="m-0">???????</p>
                                    <p>{`${aspenCount}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 p-2">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="developImageContainer d-flex align-items-center">
                                                {castilianArray.map((pic, index) => (
                                                    <div key={index}>
                                                        {index == castilianCount ? (<>
                                                            <img src={pic} className="styleCurDevImgs fade" />
                                                        </>) : (<></>)}
                                                    </div>
                                                ))}
                                                <Link to="#" className="noStyle next" onClick={() => castilianClick(1)}>{`>`}</Link>
                                                <Link to="#" className="noStyle prev" onClick={() => castilianClick(-1)}>{`<`}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="dotDiv">
                                                {castilianArray.map((dot, index) => (
                                                    <div className={index === castilianCount ? ("dot activeDot") : ("dot")} key={index} onClick={() => castilianDots(index)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 5th & G Development Content */}
                <div className="container upperPadding">
                    <div className="row m-0 height80">
                        <div className="col-md-3 sideRightBorder p-1">
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <p className="m-0 teamHeader">{`5TH & G PLAZA REDEVELOPMENT`}</p>
                                    <p className="m-0 propertyName">Developed in 1992</p>
                                    <p className="m-0">Information Relating to the extend of the project</p>
                                    <p className="m-0">????????</p>
                                    <p className="m-0">???????</p>
                                    <p className="m-0">???????</p>
                                    <p>{`${aspenCount}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 p-2">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="developImageContainer d-flex align-items-center">
                                                {fifthGArray.map((pic, index) => (
                                                    <div key={index}>
                                                        {index == fifthGCount ? (<>
                                                            <img src={pic} className="styleCurDevImgs fade" />
                                                        </>) : (<></>)}
                                                    </div>
                                                ))}
                                                <Link to="#" className="noStyle next" onClick={() => fifthGClick(1)}>{`>`}</Link>
                                                <Link to="#" className="noStyle prev" onClick={() => fifthGClick(-1)}>{`<`}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="dotDiv">
                                                {fifthGArray.map((dot, index) => (
                                                    <div className={index === fifthGCount ? ("dot activeDot") : ("dot")} key={index} onClick={() => fifthGDots(index)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Smaller Boxes Commented Out incase Client wants to Switch Back */}
            {/* <div className="fullVP d-flex justify-content-center" id="currentDevs">
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
            <div className="d-flex justify-content-center" id="currentDevs">
                <div className="container upperPadding">
                    <div className="row m-0 teamHeader">{`Aspen Neighborhood`}</div>
                    <div className="row m-0 height80">
                        <div className="col-md-3 sideRightBorder p-1">
                            <div className="row">
                                <div className="col-12 d-flex flex-column align-items-center">
                                    <p className="m-0 propertyName">Developed in 1992</p>
                                    <p className="m-0">Information Relating to the extend of the project</p>
                                    <p className="m-0">????????</p>
                                    <p className="m-0">???????</p>
                                    <p className="m-0">???????</p>
                                    <p>{`${aspenCount}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 p-2">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="developImageContainer d-flex align-items-center">
                                                {aspenArray.map((pic, index) => (
                                                    <div key={index}>
                                                        {index == aspenCount ? (<>
                                                            <img src={pic} className="styleCurDevImgs fade" />
                                                        </>) : (<></>)}
                                                    </div>
                                                ))}
                                                <Link to="#" className="noStyle next" onClick={() => aspenClick(1)}>{`>`}</Link>
                                                <Link to="#" className="noStyle prev" onClick={() => aspenClick(-1)}>{`<`}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="dotDiv">
                                                {aspenArray.map((dot, index) => (
                                                    <div className={index === aspenCount ? ("dot activeDot") : ("dot")} key={index} onClick={() => aspenDots(index)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="fullVP d-flex justify-content-center" id="pastDevs">
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
            </div> */}
        </div>
    )
}

export default Develop;