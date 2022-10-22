import React,{Component} from 'react';

class Header extends Component {

    constructor(){
        super()
    }

    render(){
        return(
            <> 
                <header>
                    <div>React App</div>
                    <input/>
                    <div>User Text Here</div>
                </header>
                <hr/>
            </>
        )
    }



}


export default Header;



// const Header = () => {
//     return(
//         <>
//             <center>
//                 <h1>React App</h1>
//             </center>
//             <hr/>
//         </>
//     )
// }
