import React from 'react';
import Card from '../components/Card';
// import '../CSS/App2.css';
// import jQuery from 'jquery'

class CardContainer extends React.Component {
  //SETS INITIAL STATE: I = INCREMENT NUMBER FOR CARD CSS//
  state = {
    i: 1
  }
render(){
// CREATES AN INCREMENTING NUMBER TO PASS DOWN TO EACH CARD
  let incrementNum = [this.state.i]
  //ARRAY WITH ADDED CHARACTER INCREMENT//
  let charIncArray = this.props.characters.map(character => [character, character.inc = incrementNum++])
//CRREATE INDIVIDUAL CARDS WITH CARD OBJECT AND INCREMENT//
  let charArray = charIncArray.map(character=> <Card character={character[0]} key={character[1]} increment={character[1]}  clickHandler={this.props.clickHandler} stacked={this.props.stacked} popUpHandler={this.props.popUpHandler} charHandler={this.props.charHandler}/>)
    return (
      <div className="bigDiv">
        <div id="card-div">
          {charArray}
          </div>
        </div>
    )
  }
}

export default CardContainer
