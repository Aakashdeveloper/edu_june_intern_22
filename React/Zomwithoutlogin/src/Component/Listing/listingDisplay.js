import React from 'react';
import { Link } from 'react-router-dom';

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <div className="item" key={item._id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={item.restaurant_thumb} class="Image" alt={item.restaurant_name}/>
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details?restid=${item.restaurant_id}`}>
                                            {item.restaurant_name}
                                        </Link>
                                        <div className="city_name">{item.address}</div>
                                        <div className="city_name">{item.rating_text}</div>
                                        <div className="city_name">Rs. {item.cost}</div>
                                        <div className="labelDiv">
                                            <span className="label label-primary">
                                                {item.mealTypes[0].mealtype_name}
                                            </span> &nbsp;
                                            <span className="label label-info">
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <div className="labelDiv">
                                            <span className="label label-danger">
                                                {item.cuisines[0].cuisine_name}
                                            </span> &nbsp;
                                            <span className="label label-warning">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }else{
                return(
                    <div>
                        <h2> No Data As per Filter</h2>
                    </div>
                )
            }

        }else{
            return(
                <div>
                    <img src="/images/loader.gif" alt="loader"/>
                    <h2>Loading.....</h2>
                </div>
            )
        }
    }

    return(
        <div id="content">
            {renderData(props)}
        </div>
    )

}

export default ListingDisplay;