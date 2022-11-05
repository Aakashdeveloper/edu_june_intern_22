import React,{Component} from 'react';
import axios from 'axios';
import './details.css';

const url = "http://zomatoajulypi.herokuapp.com/details";

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        //let details = this.state.details;
        let {details} = this.state;
        return(
            <>
                <div id="mainContent">
                    <div className="imgDiv">
                        <img src={details.restaurant_thumb} alt="image"/>
                    </div>
                    <div className="contentDiv">
                        <h2>{details.restaurant_name}</h2>
                        <span>231 Customers Say {details.rating_text} </span>
                        <h3><del>Old Price: Rs.1000</del></h3>
                        <h3>New Price: Rs.{details.cost}</h3>
                        <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                        <div class="feature_container">
                            <figure>
                                <img src="https://i.ibb.co/wJvrhYg/veg.png" class="featureIcon"/>
                                <figcaption>Pure Veg</figcaption>
                            </figure>
                            <figure>
                                <img src="https://i.ibb.co/mD3jpgc/sentizied.png" class="featureIcon"/>
                                <figcaption>Fully Senatized</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    async componentDidMount(){
        let mealId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${mealId}`,{method:'GET'})
        this.setState({details:response.data[0]})
    }


}

export default Details;