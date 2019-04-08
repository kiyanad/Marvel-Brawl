import React from 'react';
import SmallCard from '../components/SmallCard';


class SmallContainer extends React.Component {
  //SETS INITIAL STATE: I = INCREMENT NUMBER FOR CARD CSS//
  state = {
    i: 1
  }

//FUNCTIONS FOR DRAG AND DROP//
  allowDrop= (allowdropevent)=> {
    allowdropevent.target.style.color = "blue";
    allowdropevent.preventDefault();
  }

 drag= (dragevent) => {
   debugger
   dragevent.dataTransfer.setData("text", dragevent.target.id);
   dragevent.target.style.color = "green";
 }

 drop = (dropevent) => {
   dropevent.preventDefault();
   var data = dropevent.dataTransfer.getData("text");
   // debugger
   dropevent.target.appendChild(document.getElementById(data));
 }
//END DRAG AND DROP//


render(){
  // CREATES AN INCREMENTING NUMBER TO PASS DOWN TO EACH CARD
  let incrementNum = [this.state.i]
  //ARRAY WITH ADDED CHARACTER INCREMENT//
  let charIncArray = this.props.characters.map(character => [character, character.inc = incrementNum++])
//CRREATE INDIVIDUAL CARDS WITH CARD OBJECT AND INCREMENT//
  let charArray = charIncArray.map(character=> <SmallCard character={character[0]} increment={character[1]} clickHandler={this.props.clickHandler} stacked={this.props.stacked} popUpHandler={this.props.popUpHandler} charHandler={this.props.charHandler}/>)
    return (
      <div className="bigDiv">
        <div id="small-div2">
          <div id="small-card">
            {charArray}
          </div>
        </div>
      </div>
    )
  }
}

export default SmallContainer
