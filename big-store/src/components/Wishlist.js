import React from 'react';

class Wishlist extends React.Component {
    render() {
        return (
            <div>
                <div className="banner-top">
                    <div className="container">
                        <h1>Wishlist</h1>
                        <em></em>
                        <h2><a href="index.html">Home</a><label>/</label>Wishlist</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="wishlist">
                        <h6><a href="#">Product Name</a> <a href="#">Unit Price</a> <a href="#">Stock Status</a></h6>
                        <p>No products were added to the wishlist</p>
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

export default Wishlist;