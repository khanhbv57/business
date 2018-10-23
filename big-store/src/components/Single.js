import React from 'react';
import $ from "jquery";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Single extends React.Component {
    componentDidMount(){
        $('.value-plus').on('click', function(){
            var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)+1;
            divUpd.text(newVal);
        });
        $('.value-minus').on('click', function(){
            var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)-1;
            if(newVal>=1) divUpd.text(newVal);
        });
        $(function() {
            var menu_ul = $('.menu-drop > li > ul'),
                menu_a  = $('.menu-drop > li > a');
            menu_ul.hide();
            menu_a.click(function(e) {
                e.preventDefault();
                if(!$(this).hasClass('active')) {
                    menu_a.removeClass('active');
                    menu_ul.filter(':visible').slideUp('normal');
                    $(this).addClass('active').next().stop(true,true).slideDown('normal');
                } else {
                    $(this).removeClass('active');
                    $(this).next().stop(true,true).slideUp('normal');
                }
            });
        });
    }
    render() {
        return (
            <div>
                <div className="banner-top">
                    <div className="container">
                        <h1>Single</h1>
                        <em></em>
                        <h2><a href="index.html">Home</a><label>/</label>Single</h2>
                    </div>
                </div>
                <div className="single">
                    <div className="container">
                        <div className="col-md-9">
                            <div className="col-md-5 grid">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li data-thumb="images/si.jpg">
                                            <div className="thumb-image"> <img src="images/si.jpg" data-imagezoom="true" className="img-responsive"/> </div>
                                        </li>
                                        <li data-thumb="images/si1.jpg">
                                            <div className="thumb-image"> <img src="images/si1.jpg" data-imagezoom="true" className="img-responsive"/> </div>
                                        </li>
                                        <li data-thumb="images/si2.jpg">
                                            <div className="thumb-image"> <img src="images/si2.jpg" data-imagezoom="true" className="img-responsive"/> </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7 single-top-in">
                                <div className="span_2_of_a1 simpleCart_shelfItem">
                                    <h3>Nam liber tempor cum</h3>
                                    <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
                                    <div className="price_single">
                                        <span className="reducedfrom item_price">$140.00</span>
                                        <a href="#">click for offer</a>
                                        <div className="clearfix"></div>
                                    </div>
                                    <h4 className="quick">Quick Overview:</h4>
                                    <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod
                                        mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
                                    <div className="wish-list">
                                        <ul>
                                            <li className="wish"><a href="#"><span className="glyphicon glyphicon-check" aria-hidden="true"></span>Add to Wishlist</a></li>
                                            <li className="compare"><a href="#"><span className="glyphicon glyphicon-resize-horizontal" aria-hidden="true"></span>Add
                                                    to Compare</a></li>
                                        </ul>
                                    </div>
                                    <div className="quantity">
                                        <div className="quantity-select">
                                            <div className="entry value-minus">&nbsp;</div>
                                            <div className="entry value"><span>1</span></div>
                                            <div className="entry value-plus active">&nbsp;</div>
                                        </div>
                                    </div>
                                    {/* <script>
                                        $('.value-plus').on('click', function () {
                                            var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10) + 1;
                                            divUpd.text(newVal);
                                        });

                                        $('.value-minus').on('click', function () {
                                            var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10) - 1;
                                            if (newVal >= 1) divUpd.text(newVal);
                                        });
                                    </script> */}

                                    <a href="#" className="add-to item_add hvr-skew-backward">Add to cart</a>
                                    <div className="clearfix"> </div>
                                </div>

                            </div>
                            <div className="clearfix"> </div>
                            <div className="tab-head">
                                <nav className="nav-sidebar">
                                    <ul className="nav tabs">
                                        <li className="active"><a href="#tab1" data-toggle="tab">Product Description</a></li>
                                        <li className=""><a href="#tab2" data-toggle="tab">Additional Information</a></li>
                                        <li className=""><a href="#tab3" data-toggle="tab">Reviews</a></li>
                                    </ul>
                                </nav>
                                <div className="tab-content one">
                                    <div className="tab-pane active text-style" id="tab1">
                                        <div className="facts">
                                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                                in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                                                middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                                making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
                                            </p>
                                            <ul>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Research</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Design and Development</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Porting and Optimization</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>System integration</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Verification, Validation and Testing</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Maintenance and Support</li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="tab-pane text-style" id="tab2">

                                        <div className="facts">
                                            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                                                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                                                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                                                Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                                                source. Lorem Ipsum comes from sections </p>
                                            <ul>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Multimedia Systems</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Digital media adapters</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Set top boxes for HDTV and IPTV Player </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="tab-pane text-style" id="tab3">

                                        <div className="facts">
                                            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                                in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                                                middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                                making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
                                            </p>
                                            <ul>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Research</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Design and Development</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Porting and Optimization</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>System integration</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Verification, Validation and Testing</li>
                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Maintenance and Support</li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="col-md-3 product-bottom product-at">
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
                        <div className="clearfix"> </div>
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

export default Single;