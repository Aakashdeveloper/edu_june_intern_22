import React,{Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User text here'
        }
    }

    handleChange=(event)=>{
        //console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userInput(event.target.value)
    }

    render(){
        //console.log("inside render")
        return(
            <> 
                <header>
                    <div className="logo">{this.state.title}</div>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                </header>
                <hr/>
            </>
        )
    }



}


export default Header;