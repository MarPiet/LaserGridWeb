import React from "react"

class HomeContent extends React.Component{



    render(){
        return(
            <div>
                <section id="showcase">
                    <div class="container">
                        <h1>Space Shooter Laser Grid</h1>
                    </div>
                </section>
                <div className = "videobox">
                    <iframe width="1120" height="630" src="https://www.youtube.com/embed/641QIbzW2K0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                    <p className="gametext">
                        <span style={{color: "#6600cc", fontStyle: "italic"}}>Laser Grid </span>
                        is an online free-for-all space shooter. Find powerups and emerge victorious as you decimate your opponents with lasers and rockets!
                    </p>

                </div>
            </div>
        )
    }
}


export default HomeContent