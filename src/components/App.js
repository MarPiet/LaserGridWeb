import React from "react"
import Header from "./Header.js"
import Content from "./Content"
import "./style.css"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            page: 0
        }
    }
    
    changePage(pagenum){
        if(this.state.page !== pagenum)
            this.setState({page : pagenum})
    }
    componentDidMount(){
        document.title = "Laser Grid"
    }

    render(){
        return(
            <div>
                <Header changePage = {this.changePage.bind(this)} />
                <Content changePage = {this.changePage.bind(this)} pagenum = {this.state.page}/>
            </div>
        )
    }
}


export default App