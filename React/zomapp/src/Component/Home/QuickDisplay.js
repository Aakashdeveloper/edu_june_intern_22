import React from 'react';
import './QuickSearch.css';
import { Link } from 'react-router-dom'


const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link key={item._id} to={`/listing/${item.mealtype_id}`}>
                         <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src={item.meal_image} alt="breakfast"/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div class="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
            <div class="mainTileContainer">
                {listMeal(props)}
            </div>
    )
}

export default QuickDisplay;