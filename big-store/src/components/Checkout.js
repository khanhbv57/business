import React from 'react';

class Checkout extends React.Component {
    componentDidMount(){
        $(document).ready(function (c) {
            $('.close1').on('click', function (c) {
                $('.cart-header').fadeOut('slow', function (c) {
                    $('.cart-header').remove();
                });
            });
        });
        $(document).ready(function (c) {
            $('.close2').on('click', function (c) {
                $('.cart-header1').fadeOut('slow', function (c) {
                    $('.cart-header1').remove();
                });
            });
        });
        $(document).ready(function (c) {
            $('.close3').on('click', function (c) {
                $('.cart-header2').fadeOut('slow', function (c) {
                    $('.cart-header2').remove();
                });
            });
        });
    }
    render() {
        return (
            <div>
                <div className="banner-top">
                    <div className="container">
                        <h1>Checkout</h1>
                        <em></em>
                        <h2><a href="index.html">Home</a><label>/</label>Checkout</h2>
                    </div>
                </div>
                {/* <script>
                    $(document).ready(function (c) {
                        $('.close1').on('click', function (c) {
                            $('.cart-header').fadeOut('slow', function (c) {
                                $('.cart-header').remove();
                            });
                        });
                    });
                </script> */}
                {/* <script>
                    $(document).ready(function (c) {
                        $('.close2').on('click', function (c) {
                            $('.cart-header1').fadeOut('slow', function (c) {
                                $('.cart-header1').remove();
                            });
                        });
                    });
                </script> */}
                {/* <script>
                    $(document).ready(function (c) {
                        $('.close3').on('click', function (c) {
                            $('.cart-header2').fadeOut('slow', function (c) {
                                $('.cart-header2').remove();
                            });
                        });
                    });
                </script> */}
                <div className="check-out">
                    <div className="container">
                        <div className="bs-example4" data-example-id="simple-responsive-table">
                            <div className="table-responsive">
                                <table className="table-heading simpleCart_shelfItem">
                                    <tr>
                                        <th className="table-grid">Item</th>
                                        <th>Prices</th>
                                        <th>Delivery </th>
                                        <th>Subtotal</th>
                                    </tr>
                                    <tr className="cart-header">
                                        <td className="ring-in"><a href="single.html" className="at-in"><img src="images/ch.jpg" className="img-responsive" alt=""/></a>
                                            <div className="sed">
                                                <h5><a href="single.html">Sed ut perspiciatis unde</a></h5>
                                                <p>(At vero eos et accusamus et iusto odio dignissimos ducimus ) </p>
                                            </div>
                                            <div className="clearfix"> </div>
                                            <div className="close1"> </div>
                                        </td>
                                        <td>$100.00</td>
                                        <td>FREE SHIPPING</td>
                                        <td className="item_price">$100.00</td>
                                        <td className="add-check"><a className="item_add hvr-skew-backward" href="#">Add To Cart</a></td>
                                    </tr>
                                    <tr className="cart-header1">
                                        <td className="ring-in"><a href="single.html" className="at-in"><img src="images/ch2.jpg" className="img-responsive" alt=""/></a>
                                            <div className="sed">
                                                <h5><a href="single.html">Sed ut perspiciatis unde</a></h5>
                                                <p>(At vero eos et accusamus et iusto odio dignissimos ducimus ) </p>
                                            </div>
                                            <div className="clearfix"> </div>
                                            <div className="close2"> </div>
                                        </td>
                                        <td>$100.00</td>
                                        <td>FREE SHIPPING</td>
                                        <td className="item_price">$100.00</td>
                                        <td className="add-check"><a className="item_add hvr-skew-backward" href="#">Add To Cart</a></td>
                                    </tr>
                                    <tr className="cart-header2">
                                        <td className="ring-in"><a href="single.html" className="at-in"><img src="images/ch1.jpg" className="img-responsive" alt=""/></a>
                                            <div className="sed">
                                                <h5><a href="single.html">Sed ut perspiciatis unde</a></h5>
                                                <p>(At vero eos et accusamus et iusto odio dignissimos ducimus ) </p>
                                            </div>
                                            <div className="clearfix"> </div>
                                            <div className="close3"> </div>
                                        </td>
                                        <td>$100.00</td>
                                        <td>FREE SHIPPING</td>
                                        <td className="item_price">$100.00</td>
                                        <td className="add-check"><a className="item_add hvr-skew-backward" href="#">Add To Cart</a></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="produced">
                            <a href="single.html" className="hvr-skew-backward">Produced To Buy</a>
                        </div>
                    </div>
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
        );
    }
}

export default Checkout;