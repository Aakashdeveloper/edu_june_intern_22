import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay'

const qurl = "https://zomatoajulypi.herokuapp.com/quicksearch"

class QuickSearch extends Component {

    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <div id="quickSearch">
                <span id="QuickHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurants By MealType
                </span>
                <QuickDisplay mealData={this.state.mealType}/>
            </div>
        )
    }

    // api calling on page load
    componentDidMount() {
        fetch(qurl,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
    
}

export default QuickSearch;