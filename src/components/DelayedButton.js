// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component{

     onButtonClick=(e)=>{
          e.persist();
          setTimeout(() => {
            this.props.onDelayedClick(e);
          }, this.props.delay);
        };


     render(){
          return (
               <button onClick={this.onButtonClick}>
                    delayed
               </button>
          )
     }

}

export default DelayedButton;