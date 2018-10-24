import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <section className="rw-wrapper">
                            <h1 className="rw-sentence">
                                <span>Fashion &amp; Beauty</span>
                                <div className="rw-words rw-words-1">
                                    <span>Beautiful Designs</span>
                                    <span>Sed ut perspiciatis</span>
                                    <span> Totam rem aperiam</span>
                                    <span>Nemo enim ipsam</span>
                                    <span>Temporibus autem</span>
                                    <span>intelligent systems</span>
                                </div>
                                <div className="rw-words rw-words-2">
                                    <span>We denounce with right</span>
                                    <span>But in certain circum</span>
                                    <span>Sed ut perspiciatis unde</span>
                                    <span>There are many variation</span>
                                    <span>The generated Lorem Ipsum</span>
                                    <span>Excepteur sint occaecat</span>
                                </div>
                            </h1>
                        </section>
                    </div>
                </div>
                
                <div className="content">
                    <div className="container">
                        <div className="content-top">
					        <div className="col-md-6 col-md">
						        <div className="col-1">
                                    {/* <Link to="/single" className="b-link-stroke b-animate-go  thickbox"> */}
                                    <Link to="/single" className="b-link-stroke b-animate-go  thickbox">About 
                                        <img src="images/pi.jpg" className="img-responsive" alt=""/>
                                        <div className="b-wrapper1 long-img"><p className="b-animate b-from-right b-delay03 ">Lorem ipsum</p>
                                            <label className="b-animate b-from-right    b-delay03 "></label>
                                            <h3 className="b-animate b-from-left b-delay03 ">Trendy</h3>
                                        </div>
                                    </Link>
                                    {/* </a> */}
                                    {/* <Link to="/single"><img src="images/pi.jpg" className="img-responsive" alt=""></a> */}
						        </div>
						        <div className="col-2">
							        <span>Hot Deal</span>
							        <h2>
                                        <Link to="/single">
                                            Luxurious &amp; Trendy
                                        </Link>
                                    </h2>
							        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years</p>
							        <Link to="/single" className="buy-now">Buy Now</Link>
						        </div>
					        </div>
					        <div className="col-md-6 col-md1">
						        <div className="col-3">
							        <Link to="/single">
                                        <img src="images/pi1.jpg" className="img-responsive" alt=""/>
							            <div className="col-pic">
								            <p>Lorem Ipsum</p>
								            <label></label>
								            <h5>For Men</h5>
							            </div>
                                    </Link>
						        </div>
                                <div className="col-3">
                                    <Link to="/single"><img src="images/pi2.jpg" className="img-responsive" alt=""/>
                                        <div className="col-pic">
                                            <p>Lorem Ipsum</p>
                                            <label></label>
                                            <h5>For Kids</h5>
                                        </div>
                                    </Link>
                                </div>
						        <div className="col-3">
                                    <Link to="/single"><img src="images/pi3.jpg" className="img-responsive" alt=""/>
                                        <div className="col-pic">
                                            <p>Lorem Ipsum</p>
                                            <label></label>
                                            <h5>For Women</h5>
                                        </div>
                                    </Link>
                                </div>
					        </div>
					        <div className="clearfix"></div>
				        </div>

				        {/* <!--products--> */}
			            <div className="content-mid">
				            <h3>Trending Items</h3>
				            <label className="line"></label>
                            <div className="mid-popular">
                                <div className="col-md-3 item-grid simpleCart_shelfItem">
                                    <div className="mid-pop">
                                        <div className="pro-img">
                                            <img src="images/pc.jpg" className="img-responsive" alt=""/>
                                            <div className="zoom-icon ">
                                                <a className="picture" href="images/pc.jpg" rel="title" className="b-link-stripe b-animate-go  thickbox"><i className="glyphicon glyphicon-search icon "></i></a>
                                                <Link to="/single"><i className="glyphicon glyphicon-menu-right icon"></i></Link>
                                            </div>
                                        </div>
                                        <div className="mid-1">
                                            <div className="women">
                                                <div className="women-top">
                                                    <span>Women</span>
                                                    <h6>
                                                        <Link to="/single">Sed ut perspiciati</Link>
                                                    </h6>
                                                </div>
                                                <div className="img item_add">
                                                    <a href="#"><img src="images/ca.png" alt=""/></a>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="mid-2">
                                                <p ><label>$100.00</label><em className="item_price">$70.00</em></p>
                                                <div className="block">
                                                    <div className="starbox small ghosting"> </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 item-grid simpleCart_shelfItem">
                                    <div className=" mid-pop">
                                        <div className="pro-img">
                                            <img src="images/pc1.jpg" className="img-responsive" alt=""/>
                                            <div className="zoom-icon ">
                                                <a className="picture" href="images/pc1.jpg" rel="title" className="b-link-stripe b-animate-go thickbox"><i className="glyphicon glyphicon-search icon "></i></a>
                                                <Link to="/single"><i className="glyphicon glyphicon-menu-right icon"></i></Link>
                                            </div>
                                        </div>
                                        <div className="mid-1">
                                            <div className="women">
                                                <div className="women-top">
                                                    <span>Women</span>
                                                    <h6><Link to="/single">At vero eos</Link></h6>
                                                </div>
                                                <div className="img item_add">
                                                    <a href="#"><img src="images/ca.png" alt=""/></a>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="mid-2">
                                                <p ><label>$100.00</label><em className="item_price">$70.00</em></p>
                                                <div className="block">
                                                    <div className="starbox small ghosting"></div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 item-grid simpleCart_shelfItem">
                                    <div className="mid-pop">
					                    <div className="pro-img">
						                    <img src="images/pc2.jpg" className="img-responsive" alt=""/>
                                            <div className="zoom-icon ">
                                                <a className="picture" href="images/pc2.jpg" rel="title" className="b-link-stripe b-animate-go  thickbox"><i className="glyphicon glyphicon-search icon "></i></a>
                                                <Link to="/single"><i className="glyphicon glyphicon-menu-right icon"></i></Link>
                                            </div>
						                </div>
                                        <div className="mid-1">
                                            <div className="women">
                                                <div className="women-top">
                                                    <span>Men</span>
                                                    <h6><Link to="/single">Sed ut perspiciati</Link></h6>
                                                </div>
                                                <div className="img item_add">
                                                    <a href="#"><img src="images/ca.png" alt=""/></a>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="mid-2">
                                                <p ><label>$100.00</label><em className="item_price">$70.00</em></p>
                                                <div className="block">
                                                    <div className="starbox small ghosting"> </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
					            <div className="col-md-3 item-grid simpleCart_shelfItem">
					                <div className=" mid-pop">
					                    <div className="pro-img">
						                    <img src="images/pc3.jpg" className="img-responsive" alt=""/>
						                    <div className="zoom-icon ">
						                        <a className="picture" href="images/pc3.jpg" rel="title" className="b-link-stripe b-animate-go  thickbox"><i className="glyphicon glyphicon-search icon "></i></a>
						                        <Link to="/single"><i className="glyphicon glyphicon-menu-right icon"></i></Link>
						                    </div>
						                </div>
						                <div className="mid-1">
						                    <div className="women">
						                        <div className="women-top">
                                                    <span>Women</span>
                                                    <h6><Link to="/single">On the other</Link></h6>
                                                </div>
                                                <div className="img item_add">
                                                    <a href="#"><img src="images/ca.png" alt=""/></a>
                                                </div>
							                    <div className="clearfix"></div>
							                </div>
                                            <div className="mid-2">
                                                <p ><label>$100.00</label><em className="item_price">$70.00</em></p>
                                                <div className="block">
                                                    <div className="starbox small ghosting"> </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
					                </div>
					            </div>
					            <div className="clearfix"></div>
				            </div>
                            <div className="mid-popular">
					            <div className="col-md-3 item-grid simpleCart_shelfItem">
					                <div className=" mid-pop">
					                    <div className="pro-img">
						                    <img src="images/pc4.jpg" className="img-responsive" alt=""/>
						                    <div className="zoom-icon ">
						                        <a className="picture" href="images/pc4.jpg" rel="title" className="b-link-stripe b-animate-go  thickbox"><i className="glyphicon glyphicon-search icon "></i></a>
						                        <Link to="/single"><i className="glyphicon glyphicon-menu-right icon"></i></Link>
						                    </div>
						                </div>
						                <div className="mid-1">
						                    <div className="women">
						                        <div className="women-top">
							                        <span>Men</span>
							                        <h6><Link to="/single">On the other</Link></h6>
							                    </div>
                                                <div className="img item_add">
                                                    <a href="#"><img src="images/ca.png" alt=""/></a>
                                                </div>
							                    <div className="clearfix"></div>
							                </div>
                                            <div className="mid-2">
                                                <p ><label>$100.00</label><em className="item_price">$70.00</em></p>
								                <div className="block">
                                                    <div className="starbox small ghosting"> </div>
								                </div>
								                <div className="clearfix"></div>
							                </div>
						                </div>
                                    </div>
                                </div>
					            <div className="col-md-3 item-grid simpleCart_shelfItem">
                                    <div className=" mid-pop">
					                    <div className="pro-img">
						                    <img src="images/pc5.jpg" className="img-responsive" alt=""/>
                                            <div className="zoom-icon ">
                                                <a className="picture" href="images/pc5.jpg" rel="title" className="b-link-stripe b-animate-go  thickbox"><i className="glyphicon glyphicon-search icon "></i></a>
                                                <Link to="/single"><i className="glyphicon glyphicon-menu-right icon"></i></Link>
						                    </div>
						                </div>
						                <div className="mid-1">
						                    <div className="women">
						                        <div className="women-top">
							                        <span>Men</span>
                                                    <h6><Link to="/single">Sed ut perspiciati</Link></h6>
                                                </div>
							                    <div className="img item_add">
                                                    <a href="#"><img src="images/ca.png" alt=""/></a>
                                                </div>
							                    <div className="clearfix"></div>
                                            </div>
                                            <div className="mid-2">
                                                <p ><label>$100.00</label><em className="item_price">$70.00</em></p>
                                                <div className="block">
                                                    <div className="starbox small ghosting"> </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
						                </div>
                                    </div>
					            </div>
					            <div className="col-md-3 item-grid simpleCart_shelfItem">
                                    <div className=" mid-pop">
					                    <div className="pro-img">
						                    <img src="images/pc6.jpg" className="img-responsive" alt=""/>
						                    <div className="zoom-icon ">
                                                <a className="picture" href="images/pc6.jpg" rel="title" className="b-link-stripe b-animate-go  thickbox"><i className="glyphicon glyphicon-search icon "></i></a>
                                                <Link to="/single"><i className="glyphicon glyphicon-menu-right icon"></i></Link>
                                            </div>
                                        </div>
                                        <div className="mid-1">
                                            <div className="women">
                                                <div className="women-top">
							                        <span>Women</span>
							                        <h6><Link to="/single">At vero eos</Link></h6>
							                    </div>
                                                <div className="img item_add">
                                                    <a href="#"><img src="images/ca.png" alt=""/></a>
                                                </div>
							                    <div className="clearfix"></div>
							                </div>
                                            <div className="mid-2">
                                                <p ><label>$100.00</label><em className="item_price">$70.00</em></p>
                                                <div className="block">
                                                    <div className="starbox small ghosting"> </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
					            <div className="col-md-3 item-grid simpleCart_shelfItem">
					                <div className=" mid-pop">
					                    <div className="pro-img">
						                    <img src="images/pc7.jpg" className="img-responsive" alt=""/>
						                    <div className="zoom-icon ">
                                                <a className="picture" href="images/pc7.jpg" rel="title" className="b-link-stripe b-animate-go  thickbox"><i className="glyphicon glyphicon-search icon "></i></a>
                                                <Link to="/single"><i className="glyphicon glyphicon-menu-right icon"></i></Link>
                                            </div>
                                        </div>
                                        <div className="mid-1">
                                            <div className="women">
                                                <div className="women-top">
                                                    <span>Men</span>
							                        <h6><Link to="/single">Sed ut perspiciati</Link></h6>
							                    </div>
                                                <div className="img item_add">
                                                    <a href="#"><img src="images/ca.png" alt=""/></a>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="mid-2">
                                                <p ><label>$100.00</label><em className="item_price">$70.00</em></p>
                                                <div className="block">
                                                    <div className="starbox small ghosting"> </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
					                </div>
                                </div>
					            <div className="clearfix"></div>
				            </div>
			            </div>
			{/* <!--//products--> */}
                        <div className="brand">
                            <div className="col-md-3 brand-grid">
                                <img src="images/ic.png" className="img-responsive" alt=""/>
                            </div>
                            <div className="col-md-3 brand-grid">
                                <img src="images/ic1.png" className="img-responsive" alt=""/>
                            </div>
                            <div className="col-md-3 brand-grid">
                                <img src="images/ic2.png" className="img-responsive" alt=""/>
                            </div>
                            <div className="col-md-3 brand-grid">
                                <img src="images/ic3.png" className="img-responsive" alt=""/>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
		        </div>
            </div>
        );
    }
}

export default App;
