import React from 'react';
import $ from "jquery";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Product extends React.Component {
    componentDidMount(){
        $(function () {
            var menu_ul = $('.menu-drop > li > ul'),
                menu_a = $('.menu-drop > li > a');
            menu_ul.hide();
            menu_a.click(function (e) {
                e.preventDefault();
                if (!$(this).hasClass('active')) {
                    menu_a.removeClass('active');
                    menu_ul.filter(':visible').slideUp('normal');
                    $(this).addClass('active').next().stop(true, true).slideDown('normal');
                } else {
                    $(this).removeClass('active');
                    $(this).next().stop(true, true).slideUp('normal');
                }
            });

        });
    }
  render() {
    return (
        <div>
            <div className="banner-top">
                <div className="container">
                    <h1>Products</h1>
                    <em></em>
                    <h2><a href="index.html">Home</a><label>/</label>Products</h2>
                </div>
            </div>
            <div className="product">
                <div className="container">
                    <div className="col-md-9">
                        <div className="mid-popular">
                            <div className="col-md-4 item-grid1 simpleCart_shelfItem">
                                <div className=" mid-pop">
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
                                                <h6><Link to="/single">Sed ut perspiciati</Link></h6>
                                            </div>
                                            <div className="img item_add">
                                                <a href="#"><img src="images/ca.png" alt=""/></a>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$100.00</label><em className="item_price">$70.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>

                                            <div className="clearfix"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item-grid1 simpleCart_shelfItem">
                                <div className=" mid-pop">
                                    <div className="pro-img">
                                        <img src="images/pc1.jpg" className="img-responsive" alt=""/>
                                        <div className="zoom-icon ">
                                            <a className="picture" href="images/pc1.jpg" rel="title" className="b-link-stripe b-animate-go  thickbox"><i className="glyphicon glyphicon-search icon "></i></a>
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
                                            <p><label>$100.00</label><em className="item_price">$70.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>

                                            <div className="clearfix"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item-grid1 simpleCart_shelfItem">
                                <div className=" mid-pop">
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
                                            <p><label>$100.00</label><em className="item_price">$70.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>

                                            <div className="clearfix"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item-grid1 simpleCart_shelfItem">
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
                                            <p><label>$100.00</label><em className="item_price">$70.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>

                                            <div className="clearfix"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item-grid1 simpleCart_shelfItem">
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
                                            <p><label>$100.00</label><em className="item_price">$70.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item-grid1 simpleCart_shelfItem">
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
                                            <p><label>$100.00</label><em className="item_price">$70.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 item-grid1 simpleCart_shelfItem">
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
                                            <p><label>$100.00</label><em className="item_price">$70.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>

                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item-grid1 simpleCart_shelfItem">
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
                                            <p><label>$100.00</label><em className="item_price">$70.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>

                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 item-grid1 simpleCart_shelfItem">
                                <div className=" mid-pop">
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
                                                <h6><Link to="/single">At vero eos</Link></h6>
                                            </div>
                                            <div className="img item_add">
                                                <a href="#"><img src="images/ca.png" alt=""/></a>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$100.00</label><em className="item_price">$70.00</em></p>
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
                    <div className="col-md-3 product-bottom">
                        <div className=" rsidebar span_1_of_left">
                            <h4 className="cate">Categories</h4>
                            <ul className="menu-drop">
                                <li className="item1"><a href="#">Men </a>
                                    <ul className="cute">
                                        <li className="subitem1"><Link to="/product">Cute Kittens </Link></li>
                                        <li className="subitem2"><Link to="/product">Strange Stuff </Link></li>
                                        <li className="subitem3"><Link to="/product">Automatic Fails </Link></li>
                                    </ul>
                                </li>
                                <li className="item2"><a href="#">Women </a>
                                    <ul className="cute">
                                        <li className="subitem1"><Link to="/product">Cute Kittens </Link></li>
                                        <li className="subitem2"><Link to="/product">Strange Stuff </Link></li>
                                        <li className="subitem3"><Link to="/product">Automatic Fails </Link></li>
                                    </ul>
                                </li>
                                <li className="item3"><a href="#">Kids</a>
                                    <ul className="cute">
                                        <li className="subitem1"><Link to="/product">Cute Kittens </Link></li>
                                        <li className="subitem2"><Link to="/product">Strange Stuff </Link></li>
                                        <li className="subitem3"><Link to="/product">Automatic Fails</Link></li>
                                    </ul>
                                </li>
                                <li className="item4"><a href="#">Accessories</a>
                                    <ul className="cute">
                                        <li className="subitem1"><Link to="/product">Cute Kittens </Link></li>
                                        <li className="subitem2"><Link to="/product">Strange Stuff </Link></li>
                                        <li className="subitem3"><Link to="/product">Automatic Fails</Link></li>
                                    </ul>
                                </li>

                                <li className="item4"><a href="#">Shoes</a>
                                    <ul className="cute">
                                        <li className="subitem1"><Link to="/product">Cute Kittens </Link></li>
                                        <li className="subitem2"><Link to="/product">Strange Stuff </Link></li>
                                        <li className="subitem3"><Link to="/product">Automatic Fails </Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* <script type="text/javascript">
                            $(function () {
                                var menu_ul = $('.menu-drop > li > ul'),
                                    menu_a = $('.menu-drop > li > a');
                                menu_ul.hide();
                                menu_a.click(function (e) {
                                    e.preventDefault();
                                    if (!$(this).hasClass('active')) {
                                        menu_a.removeClass('active');
                                        menu_ul.filter(':visible').slideUp('normal');
                                        $(this).addClass('active').next().stop(true, true).slideDown('normal');
                                    } else {
                                        $(this).removeClass('active');
                                        $(this).next().stop(true, true).slideUp('normal');
                                    }
                                });

                            });
                        </script> */}
                        <section className="sky-form">
                            <h4 className="cate">Discounts</h4>
                            <div className="row row1 scroll-pane">
                                <div className="col col-4">
                                    <label className="checkbox"><input type="checkbox" name="checkbox" checked=""/><i></i>Upto - 10% (20)</label>
                                </div>
                                <div className="col col-4">
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>40% - 50% (5)</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>30% - 20% (7)</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>10% - 5% (2)</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Other(50)</label>
                                </div>
                            </div>
                        </section>
                        <section className="sky-form">
                            <h4 className="cate">Type</h4>
                            <div className="row row1 scroll-pane">
                                <div className="col col-4">
                                    <label className="checkbox"><input type="checkbox" name="checkbox" checked=""/><i></i>Sofa Cum Beds (30)</label>
                                </div>
                                <div className="col col-4">
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Bags (30)</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Caps & Hats (30)</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Jackets & Coats (30)</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Jeans (30)</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Shirts (30)</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Sunglasses (30)</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Swimwear (30)</label>
                                </div>
                            </div>
                        </section>
                        <section className="sky-form">
                            <h4 className="cate">Brand</h4>
                            <div className="row row1 scroll-pane">
                                <div className="col col-4">
                                    <label className="checkbox"><input type="checkbox" name="checkbox" checked=""/><i></i>Roadstar</label>
                                </div>
                                <div className="col col-4">
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Levis</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Persol</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Nike</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Edwin</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>New Balance</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Paul Smith</label>
                                    <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Ray-Ban</label>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="container">
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

export default Product;