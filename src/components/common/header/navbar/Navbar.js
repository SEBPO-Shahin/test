import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/ajker-arban-1.png';


class Navbar extends Component{

    state = {
        showNavigation : false,
    }

    render(){
        const { items } = this.state;
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
                            <Link to="/"><img src={logo} /></Link>
                        </div>
                        <div className="menu-bar mobile-hide">
                            {/* <ul className="flex-container" breakPoints = {breakPoints}>
                                {items.map(item => <li key={item.id}><a href="">{item.menu}</a></li>)}
                            </ul> */}
                            <ul className="flex-container">
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/details">Page Details Demo</NavLink></li>
                                <li><NavLink to="/bangladesh">বাংলাদেশ</NavLink></li>
                                <li><NavLink to="/politics">রাজনীতি</NavLink></li>
                                <li><NavLink to="/economics">অর্থনীতি</NavLink></li>
                                <li><NavLink to="/internation">আন্তর্জাতিক</NavLink></li>
                                <li><NavLink to="/sports">খেলা</NavLink></li>
                                <li><NavLink to="/entertainment">বিনোদন</NavLink></li>
                                <li><NavLink to="/health">স্বাস্থ্য</NavLink></li>
                                <li><NavLink to="/list">সম্পাদকীয়</NavLink></li>
                            </ul>
                        </div>
                        <div className="menu-bar desktop-hide">
                            <div className="hamburger" onClick={()=>{this.setState({showNavigation:!this.state.showNavigation})}}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {
                                this.state.showNavigation ?
                                <ul className="flex-container">
                                    <div className="hamburger showBurger" onClick={()=>{this.setState({showNavigation:!this.state.showNavigation})}}>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    {items.map(item => <li key={item.id}><a href="">{item.menu}</a></li>)}
                                </ul>
                                :null
                            }
                            <ul className="flex-container mobile-hide">
                                <li><NavLink to="/bangladesh">বাংলাদেশ</NavLink></li>
                                <li><a href="#">রাজনীতি</a></li>
                                <li><a href="">অর্থনীতি</a></li>
                                <li><a href="#">আন্তর্জাতিক</a></li>
                                <li><a href="#">খেলা</a></li>
                                <li><a href="#">বিনোদন</a></li>
                                <li><a href="#">স্বাস্থ্য</a></li>
                                <li><a href="#">সম্পাদকীয়</a></li>
                                <li><a href="">আজকের এই দিনে</a></li>
                                <li><a href="">আইন ও মানবাধিকার</a></li>
                                <li><a href="">শিক্ষাঙ্গন</a></li>
                                <li><a href="">আবহাওয়া</a></li>
                                <li><a href="">জীবনযাপন</a></li>
                                <li><a href="">অর্থনীতি</a></li>
                                <li><a href="">অর্থনীতি</a></li>
                                <li><a href="">অর্থনীতি</a></li>
                                <li><a href="">অর্থনীতি</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </section>
        );
    }
}

export default Navbar;