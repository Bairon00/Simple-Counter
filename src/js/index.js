//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SimpleCounter(prop){
    return( <div className="contenedor">
        <div className="clock"><i class="fas fa-clock"></i></div>
        <div className="five">{prop.digitFive%10}</div>
        <div className="four">{prop.digitFour%10}</div>
        <div className="three">{prop.digitThree%10}</div>
        <div className="two">{prop.digitTwo%10}</div>
        <div className="one">{prop.digitOne%10}</div>
    </div>)
}

SimpleCounter.propTypes={
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,

};


let counter=0;
setInterval(function(){
    const five=Math.floor(counter/10000)
    const four=Math.floor(counter/1000)
    const three=Math.floor(counter/100)
    const two=Math.floor(counter/10)
    const one=Math.floor(counter/1)
    counter++;
console.log(one,two,three,four,five)
    ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five}  />,
     document.querySelector("#app")
     );
},1000);
//render your react application

