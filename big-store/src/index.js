// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import Header from './Header.js';
import Footer from './Footer.js';
import Single from './components/Single.js';
import Product from './components/Product.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// const Store = createStore(reducer, initialState);

// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render(){
//         return (
//             <Router>
//                 <div>
//                     <Header />
//                     <Route exact path="/" component={App} />
//                     <Route path="/about" component={Header} />
//                     <Route path="/topics" component={Header} />
//                     <Footer />
//                 </div>
//             </Router>
//         );
//     }
// }

ReactDOM.render(
    // <Provider store={store}>
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={App} />
            <Route path="/single" component={Single} />
            <Route path="/product" component={Product} />
            <Footer />
        </div>
    </Router>,
    // </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
