import React from "react"
import HomeContent from "./HomeContent.js"
import GameInfoContent from "./GameInfoContent"
import Download from "./Download"

class Content extends React.Component{



    render(){
        switch(this.props.pagenum){
            case 0:
                return(
                    <HomeContent />
                )
            case 1:
                return(
                    <Download />
                )
            case 2:
                return(
                    <GameInfoContent />
                )
        }

    }
}

export default Content