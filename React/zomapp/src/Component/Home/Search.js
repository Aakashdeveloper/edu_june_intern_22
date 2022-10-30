import React,{Component} from 'react';
import './Search.css';

const lurl = "https://zomatoajulypi.herokuapp.com/location"

class Search extends Component {

    constructor(){
        super()

        this.state={
            location:''
        }
    }

    render(){
        return(
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div id="dropdown">
                    <select>
                        <option>----SELECT CITY----</option>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                    </select>
                    <select id="restSelect">
                        <option>----SELECT Restaurants----</option>
                        <option>Wow Moms</option>
                        <option>ChopStick</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Search;