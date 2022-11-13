import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';

const Home = (props) => {
    return(
        <React.Fragment>
            <Search/>
            <QuickSearch/>
        </React.Fragment>
    )
}

export default Home;