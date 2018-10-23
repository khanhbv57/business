import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
        <div className="header">
            <div className="container">
                <div className="head">
                    <div className=" logo">
                        <a href="index.html"><img src="images/logo.png" alt=""/></a>	
                    </div>
                </div>
            </div>
            <div className="header-top">
                <div className="container">
                    <div className="col-sm-5 col-md-offset-2  header-login">
                        <ul >
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-5 header-social">		
                        <ul >
                            <li><a href="#"><i></i></a></li>
                            <li><a href="#"><i className="ic1"></i></a></li>
                            <li><a href="#"><i className="ic2"></i></a></li>
                            <li><a href="#"><i className="ic3"></i></a></li>
                            <li><a href="#"><i className="ic4"></i></a></li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="container">
                <div className="head-top">
                    <div className="col-sm-8 col-md-offset-2 h_menu4">
                        <nav className="navbar nav_bottom" role="navigation">
                            <div className="navbar-header nav_2">
                                <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                                <ul className="nav navbar-nav nav_1">
                                    <li>
                                        <a className="color" href="index.html">Home</a>
                                    </li>
                                    <li className="dropdown mega-dropdown active">
                                        <a className="color1" href="#" className="dropdown-toggle" data-toggle="dropdown">Women<span className="caret"></span>
                                        </a>				
                                        <div className="dropdown-menu ">
                                            <div className="menu-top">
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Submenu1</h4>
                                                        <ul>
                                                            <li>
                                                                <Link to="/product">Accessories</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/product">Bags</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/product">Caps & Hats</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/product">Hoodies & Sweatshirts</Link>
                                                            </li>
                                                        </ul>	
                                                    </div>							
                                                </div>
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Submenu2</h4>
                                                        <ul>
                                                            <li><Link to="/product">Jackets & Coats</Link></li>
                                                            <li><Link to="/product">Jeans</Link></li>
                                                            <li><Link to="/product">Jewellery</Link></li>
                                                            <li><Link to="/product">Jumpers & Cardigans</Link></li>
                                                            <li><Link to="/product">Leather Jackets</Link></li>
                                                            <li><Link to="/product">Long Sleeve T-Shirts</Link></li>
                                                        </ul>	
                                                    </div>							
                                                </div>
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Submenu3</h4>
                                                        <ul>
                                                            <li><Link to="/product">Shirts</Link></li>
                                                            <li><Link to="/product">Shoes, Boots & Trainers</Link></li>
                                                            <li><Link to="/product">Sunglasses</Link></li>
                                                            <li><Link to="/product">Sweatpants</Link></li>
                                                            <li><Link to="/product">Swimwear</Link></li>
                                                            <li><Link to="/product">Trousers & Chinos</Link></li>
                                                        </ul>	
                                                    </div>							
                                                </div>
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Submenu4</h4>
                                                        <ul>
                                                            <li><Link to="/product">T-Shirts</Link></li>
                                                            <li><Link to="/product">Underwear & Socks</Link></li>
                                                            <li><Link to="/product">Vests</Link></li>
                                                            <li><Link to="/product">Jackets & Coats</Link></li>
                                                            <li><Link to="/product">Jeans</Link></li>
                                                            <li><Link to="/product">Jewellery</Link></li>
                                                        </ul>
                                                    </div>						
                                                </div>
                                                <div className="col1 col5">
                                                    <img src="images/me.png" className="img-responsive" alt=""/>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>                
                                        </div>				
                                    </li>
                                    <li className="dropdown mega-dropdown active">
                                        <a className="color2" href="#" className="dropdown-toggle" data-toggle="dropdown">Men<span className="caret"></span></a>				
                                        <div className="dropdown-menu mega-dropdown-menu">
                                            <div className="menu-top">
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Submenu1</h4>
                                                        <ul>
                                                            <li><Link to="/product">Accessories</Link></li>
                                                            <li><Link to="/product">Bags</Link></li>
                                                            <li><Link to="/product">Caps & Hats</Link></li>
                                                            <li><Link to="/product">Hoodies & Sweatshirts</Link></li>
                                                        </ul>
                                                    </div>							
                                                </div>
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Submenu2</h4>
                                                        <ul>
                                                            <li><Link to="/product">Jackets & Coats</Link></li>
                                                            <li><Link to="/product">Jeans</Link></li>
                                                            <li><Link to="/product">Jewellery</Link></li>
                                                            <li><Link to="/product">Jumpers & Cardigans</Link></li>
                                                            <li><Link to="/product">Leather Jackets</Link></li>
                                                            <li><Link to="/product">Long Sleeve T-Shirts</Link></li>
                                                        </ul>	
                                                    </div>							
                                                </div>
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Submenu3</h4>
                                                        <ul>
                                                            <li><Link to="/product">Shirts</Link></li>
                                                            <li><Link to="/product">Shoes, Boots & Trainers</Link></li>
                                                            <li><Link to="/product">Sunglasses</Link></li>
                                                            <li><Link to="/product">Sweatpants</Link></li>
                                                            <li><Link to="/product">Swimwear</Link></li>
                                                            <li><Link to="/product">Trousers & Chinos</Link></li>
                                                        </ul>	
                                                    </div>							
                                                </div>
                                                <div className="col1">
                                                    <div className="h_nav">
                                                        <h4>Submenu4</h4>
                                                        <ul>
                                                            <li><Link to="/product">T-Shirts</Link></li>
                                                            <li><Link to="/product">Underwear & Socks</Link></li>
                                                            <li><Link to="/product">Vests</Link></li>
                                                            <li><Link to="/product">Jackets & Coats</Link></li>
                                                            <li><Link to="/product">Jeans</Link></li>
                                                            <li><Link to="/product">Jewellery</Link></li>
                                                        </ul>	
                                                    </div>							
                                                </div>
                                                <div className="col1 col5">
                                                    <img src="images/me1.png" className="img-responsive" alt=""/>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>                  
                                        </div>				
                                    </li>
                                    <li><Link className="color3" to="/product">Sale</Link></li>
                                    <li><a className="color4" href="404.html">About</a></li>
                                    <li><a className="color5" href="typo.html">Short Codes</a></li>
                                    <li ><a className="color6" href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-sm-2 search-right">
                        <ul className="heart">
                            <li>
                                <a href="wishlist.html" >
                                    <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                                </a>
                            </li>
                            <li>
                                <a className="play-icon popup-with-zoom-anim" href="#small-dialog">
                                    <i className="glyphicon glyphicon-search"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="cart box_1">
                            <a href="checkout.html">
                                <h3> 
                                    <div className="total">
                                        <span className="simpleCart_total"></span>
                                    </div>
                                    <img src="images/cart.png" alt=""/>
                                </h3>
                            </a>
                            <p><a href="javascript:;" className="simpleCart_empty">Empty Cart</a></p>
                        </div>
                        <div className="clearfix"> </div>
                        <link href="css/popuo-box.css" rel="stylesheet" type="text/css" media="all"/>
                        <script src="js/jquery.magnific-popup.js" type="text/javascript"></script>
                        <div id="small-dialog" className="mfp-hide">
                            <div className="search-top">
                                <div className="login-search">
                                    <input type="submit" value=""/>
                                    <input type="text" value="Search.." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search..';}"/>		
                                </div>
                                <p>Shopin</p>
                            </div>				
                        </div>	
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>	
        </div>
    );
  }
}

export default Header;
