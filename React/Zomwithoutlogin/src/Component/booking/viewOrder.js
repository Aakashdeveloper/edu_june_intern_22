import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';

const url = "http://localhost:2500"

class ViewOrder extends Component{

    constructor(){
        super()

        this.state = {
            orders:''
        }
    }

    render(){
        return(
            <>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    componentDidMount(){
        if(this.props.location){
            let query = this.props.location.search.split('&');
            if(query){
                let data = {
                    "status":query[0].split('=')[1],
                    "date":query[2].split('=')[1],
                    "bank_name":query[3].split('=')[1]
                }
                let id = query[1].split('=')[1].split('_')[1];
                fetch(`${url}/updateOrder/${id}`,
                {
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        axios.get(`${url}/orders`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;