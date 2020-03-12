import React from "react"
import img1 from ".././img/build-ICON.png"
import img2 from ".././img/logoready.png"
let buttons = document.getElementsByClassName("navelement")

class Header extends React.Component{

    handleClick(value){
        this.props.changePage(value)
        for(let i =0; i<buttons.length; ++i){
            if(i !== value)
                buttons[i].style.color = ""
            else if(i === value)
                buttons[value].style.color ="#6B5B95";
        }
        if(value === 0)
            buttons[0].style.color = "#6B5B95"
    }

    render(){
        return(
            <div>
                <header>
                <div className="container">
                    <div id="branding">
                        <img id="homelogo" src={img1} alt="Logo" width="80" height="80" onClick={() => {this.handleClick(0)}}/>
                        <img id="textlogo" src={img2} alt="Laser Grid"width ="200" height="200" onClick={() => {this.handleClick(0)}}/>
                    </div>
                    <nav>
                <ul>
                    <li ><span onClick={() =>{this.handleClick(0)}} id="home"className="navelement">Home</span></li>
                    <li ><span onClick={() =>{this.handleClick(1)}} className="navelement">Download</span></li>
                    <li ><span onClick={() =>{this.handleClick(2)}} className="navelement">Game Info</span></li>                              
                </ul>
            </nav>
                </div>
                </header>
            </div>
        )
    }

}


export default Header