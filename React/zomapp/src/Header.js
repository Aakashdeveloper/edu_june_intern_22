import React,{Component} from 'react';
import './Header.css';
import { Link,withRouter } from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"

class Header extends Component{

    constructor(props){
        super(props)

        this.state={
            userData:''
        }
    }

    handleLogOut =() => {
        sessionStorage.removeItem('ltk')
        sessionStorage.setItem('loginStatus','logout');
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data =this.state.userData;
            let outArray = [data.name,data.email,data.phone];
            sessionStorage.setItem('userInfo',outArray)
            sessionStorage.setItem('loginStatus','login');
            return(
                <>
                    <button className="btn btn-success">
                    <span className="glyphicon glyphicon-user"></span> Hi {this.state.userData.name}
                    </button> &nbsp;
                    <button className="btn btn-danger"  onClick={this.handleLogOut}>
                        <span className="glyphicon glyphicon-log-out"></span> LogOut
                    </button>
                </>
            )
        }else{
            return(
                <>
                    <Link className="btn btn-success" to="/login">
                        <span className="glyphicon glyphicon-log-in"></span> LogIn
                    </Link> &nbsp;
                    <Link className="btn btn-danger"  to="/register">
                        <span className="glyphicon glyphicon-user"></span> SignUp
                    </Link>
                </>
            )
        }
    }

    render(){
        return(
            <header>
                <div id="brand">
                    Developer Funnel 
                    &nbsp;  &nbsp; <Link className="btn btn-info" to="/">Home</Link>
                </div>
                <div id="social">
                    {this.conditionalHeader()}
                   
                    
                </div>
            </header>
        )
    }

    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })

    }
}

export default withRouter(Header)