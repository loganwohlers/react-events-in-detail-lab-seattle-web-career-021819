// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component{

     onButtonClick=(e)=>{
          const arr=[e.clientX, e.clientY]
          this.props.onReceiveCoordinates(arr)
     }

     render(){
          return(
               <button onClick={this.onButtonClick}>
               coord
               </button>
          )
     }
}

export default CoordinatesButton;