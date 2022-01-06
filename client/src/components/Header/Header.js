import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import ygLogo from '../../assets/images/ygLogo.PNG';

import { Link } from 'react-router-dom';

function Header({ currentPage, handlePageChange }) {

    const [sidenavDisplay, setSideNavDisplay] = useState('');

    const showSideNav = () => setSideNavDisplay('t');
    const closeSideNav = () => setSideNavDisplay('');

    function changeNav(page) {

        setSideNavDisplay('')
        handlePageChange(page);

    }

    const renderLilNav = () => {

        if (currentPage === 'aboutus') {
            return (
                <div className="overImage">
                    <a href="#values" className="noStyle lilNavText">VALUES</a>
                    <a href="#team" className="noStyle lilNavText">TEAM</a>
                </div>
            )
        } else if (currentPage === 'developments') {
            return (
                <div className="overImage">
                    <a href="#currentDevs" className="noStyle lilNavText">CURRENT</a>
                    <a href="#pastDevs" className="noStyle lilNavText">PAST</a>
                </div>
            )
        } else if (currentPage === 'property') {
            return (
                <div className="overImage">
                    <a href="#residential" className="noStyle lilNavText">RESIDENTIAL</a>
                    <a href="#commercial" className="noStyle lilNavText">COMMERCIAL</a>
                </div>
            )
        } else if (currentPage === 'contact') {
            return (
                <div className="overImage">
                    <a href="#contact" className="noStyle lilNavText">CONTACT</a>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    return (
        <>
            <header className="header container-fluid sticky">
                <div className="row bg-white m-0">
                    <div className="col-2">
                        <div onClick={() => handlePageChange('')}>
                            <Link to='/'><img src={ygLogo} alt="YG Logo" /></Link>
                        </div>
                    </div>
                    <div className="col-8 d-flex justify-content-center">
                        <div className="navlinks webDisplay">
                            <div className={currentPage === 'aboutus' ? ("active") : ("flexIt")}>
                                <Link className={currentPage === 'aboutus' ? ("noStyle activeText") : ("navText noStyle")} to="/aboutus" onClick={() => handlePageChange('aboutus')}>About Us</Link>
                            </div>
                            <div className={currentPage === 'developments' ? ("active") : ("flexIt")}>
                                <Link className={currentPage === 'developments' ? ("noStyle activeText") : ("navText noStyle")} to="/developments" onClick={() => handlePageChange('developments')}>Developments</Link>
                            </div>
                            <div className={currentPage === 'property' ? ("active") : ("flexIt")}>
                                <Link className={currentPage === 'property' ? ("noStyle activeText") : ("navText noStyle")} to="/properties" onClick={() => handlePageChange('property')}>Properties</Link>
                            </div>
                            <div className={currentPage === 'contact' ? ("active") : ("flexIt")}>
                                <Link className={currentPage === 'contact' ? ("noStyle activeText") : ("navText noStyle")} to="/contact" onClick={() => handlePageChange('contact')}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <div className="phoneDisplay">
                            <Link to="#" onClick={showSideNav} className="navBtnStyle">☰</Link>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    {renderLilNav()}
                </div>
                <div className={sidenavDisplay ? ("sidenav displayYes") : ("displayNo")}>
                    <div className="d-flex justify-content-end m-1">
                        <Link to="#" className="closeNavBtn" onClick={closeSideNav}>x</Link>
                    </div>
                    <ul className="nav nav-tabs display-flex flex-column align-items-center">
                        <li className="sidenav-item">
                            <Link className="sidenavStyle" to="#/aboutus" onClick={() => changeNav('aboutus')}>About Us</Link>
                        </li>
                        <li className="sidenav-item">
                            <Link className="sidenavStyle" to="/developments" onClick={() => changeNav('developments')}>Developments</Link>
                        </li>
                        <li className="sidenav-item">
                            <Link className="sidenavStyle" to="/properties" onClick={() => changeNav('property')}>Property Management</Link>
                        </li>
                        <li className="sidenav-item">
                            <Link className="sidenavStyle" to="/contact" onClick={() => changeNav('contact')}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;