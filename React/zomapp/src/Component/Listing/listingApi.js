import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

class ListingApi extends Component {
    constructor(){
        super()

        this.state={
            restaurantList:''
        }
    }

    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
                        </div>
                        <ListingDisplay listData={this.state.restaurantList}/>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId);
        axios.get(`${url}${mealId}`,{method:'GET'})
        .then((res) => {this.setState({restaurantList:res.data})})
    }
}

export default ListingApi;