import React, { useRef } from 'react';

//Importing Photos of Team
import fakeTeam8 from '../../assets/images/fakeTeam8.png';
import gregHerrington from '../../assets/images/pictures/headshots/gregHerrington.jpg';
import lynneYackzan from '../../assets/images/pictures/headshots/lynneYackzan.jpg';

function AboutUs({ values }) {

    const yackzanFam = `Husband and Wife, Randy and Lynne Yackzan found Yackzan Group, Inc., in 1986. They have worked together for nearly 35 years in partnership
    with others to develop single and multi-family residential, commercial, and office projects in Davis, Ca. Both Randy and Lynne gave up careers in other professions Civil
    Engineering and Occupational Therap, respectively) in order to form their company. Both Randy and Lynne were key driving forces in various development projects within the
    Davis community including the Aspen Neighborhood development in West Davis and the mixed-use redevelopment project in downtown Davis known as 5th & G Plaza`;

    const aboutUs = `Yackzan Group, Inc. is a property management and land development company founded in 1986 by husband and wife Randy and Lynne Yackzan. 
    Randy and Lynne have worked together for the last 31 years in partnership with others to develop over $100 million dollars worth of single and multi-family residential, commercial, and office projects in Davis, CA. 
    Gregg Herrington is currently president of the company which employs 19 talented and wonderful people. Yackzan Group, Inc. manages over 450 multi-family units, including its newest property, 8th and Wake. 
    8th and Wake is comprised of 60 four-bedroom, two-bathroom suite style units that house 240 UC Davis Graduate Students. 
    In addition, Yackzan Group, Inc. manages nearly 200,000 sq. ft. of office and retail space in Davis and Midtown Sacramento and is currently working with the Unger Family towards 
    developing a 260 multifamily unit project  on the river in West Sacramento's Bridge District.`

    return (
        <>
            <div className="fullVP" id="values">
                <div className="container upperPadding">
                    <div className="row m-0">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-3 sideRightBorder">
                                    <div className="row">
                                        <div className="col-12 purposeText">
                                            <p className="purposeText m-0">Our Purpose:</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="purposeText m-0">To discover and deliver value better than anyone in any industry</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="row">
                                        <div>
                                            <p className="aboutUsHeader">VALUES...</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="aboutUsText">
                                                <span className="textGray">Yackzan Group, Inc.</span> is a property management and land development company founded in 1986 by husband and wife Randy and Lynne Yackzan.
                                                Randy and Lynne have worked together for the last 31 years in partnership with others to develop over $100 million dollars worth of single and multi-family residential,
                                                commercial, and office projects in Davis, CA. Gregg Herrington is currently president of the company which employs 19 talented and wonderful people.
                                            </p>
                                            <p className="aboutUsText">
                                                <span className="textGray">Yackzan Group, Inc.</span> manages over 450 multi-family units, including its newest property, 8th and Wake.
                                                8th and Wake is comprised of 60 four-bedroom, two-bathroom suite style units that house 240 UC Davis Graduate Students.
                                                In addition, Yackzan Group, Inc. manages nearly 200,000 sq. ft. of office and retail space in Davis and Midtown Sacramento and is currently working with the Unger Family towards
                                                developing a 260 multifamily unit project  on the river in West Sacramento's Bridge District.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row upperPadding">
                                <div className="col-6">Property Management Content</div>
                                <div className="col-6">Property Development Content</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fullVP" id="team">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-12">
                            <div className="row teamHeader">TEAM</div>
                            <div className="row bg-teamPhotos">
                                <div className="col-12">
                                    <div className="d-flex flex-wrap">
                                        <div className="m-4">
                                            <div>
                                                <img className="styleTeamPhotos" src={gregHerrington} alt='team8' />
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div>
                                                        <div className="nameStyle">GREGG HERRINGTON</div>
                                                    </div>
                                                    <div>
                                                        <div className="jobStyle">PRESIDENT</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 d-flex">
                                                    <div className="emotiBox">
                                                        <p className="m-0 p-1">📧</p>
                                                    </div>
                                                    <div className="emotiBox bg-blue">
                                                        <p className="m-0 p-1">in</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-4">
                                            <div>
                                                <img className="styleTeamPhotos" src={lynneYackzan} alt='team8' />
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div>
                                                        <div className="nameStyle">LYNNE YACKZAN</div>
                                                    </div>
                                                    <div>
                                                        <div className="jobStyle">OWNER/VP</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 d-flex">
                                                    <div className="emotiBox">
                                                        <p className="m-0 p-1">📧</p>
                                                    </div>
                                                    <div className="emotiBox bg-blue">
                                                        <p className="m-0 p-1">in</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-4">
                                        <div>
                                                <img className="styleTeamPhotos" src={fakeTeam8} alt='team8' />
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div>
                                                        <div className="nameStyle">SCOTTY YACKZAN</div>
                                                    </div>
                                                    <div>
                                                        <div className="jobStyle">WEB DEVELOPER</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 d-flex">
                                                    <div className="emotiBox">
                                                        <p className="m-0 p-1">📧</p>
                                                    </div>
                                                    <div className="emotiBox bg-blue">
                                                        <p className="m-0 p-1">in</p>
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
            </div>
        </>

    )
}

export default AboutUs;