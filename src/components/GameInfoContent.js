import React from "react"
let slideIndex = 1;

class GameInfoContent extends React.Component{
    constructor(){
        super()
        this.plusSlides = this.plusSlides.bind(this)
        this.currentSlide = this.currentSlide.bind(this)
        this.showSlides = this.showSlides.bind(this)

    }
    componentDidMount(){
        this.currentSlide(slideIndex)
    }
    plusSlides(n) {
        this.showSlides(slideIndex += n);
      }
      
    currentSlide(n) {
        this.showSlides(slideIndex = n);
      }
    showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";

        dots[slideIndex-1].className += " active";
      }


    render(){
        return(
    <div>
        <div className="container">
                <h1>Utilize various powerups</h1>
        </div>
        <div className ="slideshow-container"> 
            <div className="mySlides fade">
                <div className="numbertext"> 1 / 6</div>
                <img src={require(".././img/LG_LASER.jpg")}/>
                <div className="text">Laser Powerup</div>
            </div>
            <div className="mySlides fade">
                <div className="numbertext"> 2 / 6</div>
                <img src={require(".././img/LG_TORPEDO.jpg")}/>
                <div className="text">Torpedo Powerup</div>
            </div>
            <div className="mySlides fade">
                <div className="numbertext"> 3 / 6</div>
                <img src={require(".././img/LG_MINE.jpg")}/>
                <div className="text">Mine Powerup</div>
            </div>
            <div className="mySlides fade">
                <div className="numbertext"> 4 / 6</div>
                <img src={require(".././img/LG_FLAME.jpg")}/>
                <div className="text">Flamethrower Powerup</div>
            </div>
            <div className="mySlides fade">
                <div className="numbertext"> 5 / 6</div>
                <img src={require(".././img/LG_HP.jpg")}/>
                <div className="text">Health Powerup</div>
            </div>
            <div className="mySlides fade">
                <div className="numbertext"> 6 / 6</div>
                <img src={require(".././img/LG_SHIELD.jpg")}/>
                <div className="text">Shield Powerup</div>
            </div>
            <a className ="prev" onClick={() =>{this.plusSlides(-1)}}>&#10094;</a>
            <a className ="next" onClick={() =>{this.plusSlides(1)}}>&#10095;</a>
        </div>
        <br/>

        <div style={{textAlign: "center"}}>
            <span className="dot" onClick={() =>{this.currentSlide(1)}}></span>
            <span className="dot" onClick={() =>{this.currentSlide(2)}}></span>
            <span className="dot" onClick={() =>{this.currentSlide(3)}}></span>
            <span className="dot" onClick={() =>{this.currentSlide(4)}}></span>
            <span className="dot" onClick={() =>{this.currentSlide(5)}}></span>
            <span className="dot" onClick={() =>{this.currentSlide(6)}}></span>
        </div>

        <div className="mapContainer" >
            <div className="container">
                <h1>Choose your map</h1>
            </div>
            <img src={require(".././img/LG_MAP1.jpg")}/>
            <img src={require(".././img/LG_MAP2.jpg")}/>
        </div>

    </div>
  
        )
        


    }
}

export default GameInfoContent