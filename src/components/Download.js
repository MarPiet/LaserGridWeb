import React from "react"
import img1 from ".././img/build-ICON.png"
class Download extends React.Component{


    render(){
        return(
            <div id="downloadContainer">
                <a href="http://download2262.mediafire.com/8puconl6ecug/oqfoeeb26fe43g6/Laser+Grid.zip" download>
                    <img id="downloadimg"src={img1}/>
                </a>
                <div id="downloadTextContainer">
                         <h3>Click on the logo to download</h3>
                         <p>Note: Keep all unzipped files within the same folder</p>
                </div>
       
            </div>

        )
    }
}


export default Download