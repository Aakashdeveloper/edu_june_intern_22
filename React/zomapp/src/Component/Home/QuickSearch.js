import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay'

const qurl = "https://zomatoajulypi.herokuapp.com/quicksearch"

class QuickSearch extends Component {

    render(){
        return(
            <div id="quickSearch">
                <span id="QuickHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurants By MealType
                </span>
                <QuickDisplay/>
            </div>
        )
    }
    
}

export default QuickSearch;