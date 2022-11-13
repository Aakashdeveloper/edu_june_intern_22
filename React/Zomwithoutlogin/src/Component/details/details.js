import React,{Component} from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css';
import MenuList from './menuList.js'
import { Link } from 'react-router-dom'

const url = "http://zomatoajulypi.herokuapp.com";


class Details extends Component{
    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            mealId:sessionStorage.getItem('mealId'),
            userItem:''
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
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
                        <Tabs>
                            <TabList>
                                <Tab>About Us</Tab>
                                <Tab>Contact Us</Tab>
                            </TabList>

                            <TabPanel>
                                <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h3>{details.address}</h3>
                                <p>Contact No: {details.contact_number}</p>
                            </TabPanel>
                        </Tabs>
                        <div>
                            <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</Link> &nbsp;
                            <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <MenuList menudata={this.state.menuList}
                    finalOrder={(data) => {this.addToCart(data)}}/>
                </div>
            </>
        )
    }

    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/details/${restId}`,{method:'GET'})
        let menuData = await axios.get(`${url}/menu/${restId}`,{method:'GET'})
        this.setState({details:response.data[0],menuList:menuData.data})
    }


}

export default Details;