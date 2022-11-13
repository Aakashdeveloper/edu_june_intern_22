import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/filter";

class CostFilter extends Component{


    filterCost = (event) => {
        let mealId = this.props.mealId;
        let cost = event.target.value.split('-');
        let hcost = cost[1]
        let lcost = cost[0]
        let costUrl;
        if(event.target.value === ''){
            costUrl =  `${url}/${mealId}`
        }else{
            costUrl =  `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})
    }

    render(){
        return(
            <>
                <center>Cost Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="100-300"/>100-300
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="301-500"/>301-500
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="501-800"/>501-800
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="801-2000"/>801-2000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilter