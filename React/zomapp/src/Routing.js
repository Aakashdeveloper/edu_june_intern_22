import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import Listing from './Component/Listing/listingApi';
import Details from './Component/details/details';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/listing/:mealId" component={Listing}/>
                    <Route path="/details" component={Details}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;