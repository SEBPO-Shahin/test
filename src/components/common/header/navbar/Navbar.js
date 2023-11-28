import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/ajker-arban-1.png';
import { FaTimes } from "react-icons/fa";


class Navbar extends Component{

    state = {
        showNavigation : false,
    }

    render(){
        // const { items } = this.state;
        // Media breakpoints
        // const breakPoints = [
        //     {width: 1, itemsToShow : 1},
        //     {width: 768, itemsToShow : 2},
        //     {width: 1024, itemsToShow : 3},
        //     {width: 1440, itemsToShow : 4},
        //     {width: 1920, itemsToShow : 20}
        // ];



        return(
            <section className="page-section">
                <header className="header-section">
                    <nav className="header-content flex-container">
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="Ajker Arban Logo" /></Link>
                        </div>
                        <div className="menu-bar mobile-hide">
                            {/* <ul className="flex-container" breakPoints = {breakPoints}>
                                {items.map(item => <li key={item.id}><a href="">{item.menu}</a></li>)}
                            </ul> */}
                            <ul className="flex-container">
                                {/* <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/details">Page Details Demo</NavLink></li> */}
                                <li><NavLink to="/bangladesh">বাংলাদেশ</NavLink></li>
                                <li><NavLink to="/politics">রাজনীতি</NavLink></li>
                                <li><NavLink to="/economics">অর্থনীতি</NavLink></li>
                                <li><NavLink to="/international">আন্তর্জাতিক</NavLink></li>
                                <li><NavLink to="/sports">খেলা</NavLink></li>
                                <li><NavLink to="/entertainment">বিনোদন</NavLink></li>
                                <li><NavLink to="/health">স্বাস্থ্য</NavLink></li>
                                <li><NavLink to="/list">সম্পাদকীয়</NavLink></li>
                                <li><Link to="/entertainments">বিনোদন</Link></li>
                                <li><Link to="/health">স্বাস্থ্য</Link></li>
                                <li><Link to="/todayEvents">আজকের এই দিনে</Link></li>
                                <li><Link to="/law-huminity">আইন ও মানবাধিকার</Link></li>
                                <li><Link to="/educations">শিক্ষাঙ্গন</Link></li>
                                <li><Link to="/weather">আবহাওয়া</Link></li>
                                <li><Link to="/lifestyle">জীবনযাপন</Link></li>
                            </ul>
                        </div>
                        <div className="menu-bar desktop-hide">
                            <div className="hamburger" onClick={()=>{this.setState({showNavigation:!this.state.showNavigation})}}>
                                <span></span>
                                <span></span>
                                <span></span>
                                {
                                    this.state.showNavigation ?
                                    <ul className="flex-container">
                                        {/* <button onClick={()=>{this.setState({showNavigation:!this.state.showNavigation})}}>Close</button> */}
                                        <FaTimes onClick={()=>{this.setState({showNavigation:!this.state.showNavigation})}} />
                                        <li><Link to="/">প্রচ্ছদ</Link></li>
                                        <li><Link to="/bangladesh">বাংলাদেশ</Link></li>
                                        <li><Link to="/politics">রাজনীতি</Link></li>
                                        <li><Link to="/economics">অর্থনীতি</Link></li>
                                        <li><Link to="/international">আন্তর্জাতিক</Link></li>
                                        <li><Link to="/sports">খেলা</Link></li>
                                        <li><Link to="/writers">সম্পাদকীয়</Link></li>
                                        <li><Link to="/entertainments">বিনোদন</Link></li>
                                        <li><Link to="/health">স্বাস্থ্য</Link></li>
                                        <li><Link to="/todayEvents">আজকের এই দিনে</Link></li>
                                        <li><Link to="/law-huminity">আইন ও মানবাধিকার</Link></li>
                                        <li><Link to="/educations">শিক্ষাঙ্গন</Link></li>
                                        <li><Link to="/weather">আবহাওয়া</Link></li>
                                        <li><Link to="/lifestyle">জীবনযাপন</Link></li>
                
                                    </ul>
                                    :null
                                }
                            </div>
                            {/* {
                                this.state.showNavigation ?
                                <ul className="flex-container">
                                    <div className="hamburger showBurger" onClick={()=>{this.setState({showNavigation:!this.state.showNavigation})}}>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    {items.map(item => <li key={item.id}><a href="">{item.menu}</a></li>)}
                                </ul>
                                :null
                            } */}
                            
                        </div>
                    </nav>
                </header>
            </section>
        );
    }
}

export default Navbar;