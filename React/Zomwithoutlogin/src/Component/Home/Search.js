import React,{Component} from 'react';
import './Search.css';

const lurl = "https://zomatoajulypi.herokuapp.com/location";
const rurl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component {

    constructor(){
        super()

        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity=(data)=>{
        if(data){
            return data.map((item) => {
                return (
                    <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }
    }

    renderRest=(data)=>{
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item._id}>{item.restaurant_name} | {item.address}</option>
                )
            })
        }
    }

    handleCity = (event) => {
        const stateId = event.target.value
        fetch(`${rurl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
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
                    <select onChange={this.handleCity}>
                        <option>----SELECT CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restSelect">
                        <option>----SELECT Restaurants----</option>
                        {this.renderRest(this.state.restaurants)}
                    </select>
                </div>
            </div>
        )
    }

    //api calling on page load
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({location:data})})

    }
}

export default Search;