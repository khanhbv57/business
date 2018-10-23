import React from 'react';

class Error404 extends React.Component {
  render() {
    return (
        <div>
            <div className="banner-top">
                <div className="container">
                    <h1>404</h1>
                    <em></em>
                    <h2><a href="index.html">Home</a><label>/</label>404</h2>
                </div>
            </div>
            <div className="container">
                <div className="four">
                    <h3>404</h3>
                    <p>Sorry! Evidently the document you were looking for has either been moved or no longer exist.</p>
                    <a href="index.html" className="hvr-skew-backward">Back To Home</a>
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

export default Error404;