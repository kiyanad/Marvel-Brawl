import React, { Component } from 'react';
import strength from '../images/strength.png'
import speed from '../images/speed.png'
import agility from '../images/agility.png'
import stamina from '../images/stamina.png'
import durability from '../images/durability.png'
import intelligence from '../images/intelligence.png'
import '../CSS/Card.css';
import '../CSS/Attribute.css';
import '../CSS/ComicBox.css'
import jQuery from 'jquery'






class Card extends Component {
  state = {
    clicked: false,
    showPopup: false,
    char: false,
  }

  componentDidMount(){
    //IF CHARACTER NAME IS TOO LONG THIS WILL SHORTEN IT //
    if(this.props.character.name.length > 15){
      const split = this.props.character.name.split(" ")
      const newName= split[0] + " " +split[1]
        this.setState({
          char: newName
        })
    }
    // USED JQUERY TO FIND THE FRONT OF THE cards
    // ONCLICK TO TRANSITION CARDS BY TOGGLING THE CLASS.
    jQuery(document).ready(function($){
      $('div.front ').on('click', function(){
        $(this).toggleClass('front transition');
      });
    })

  }
//FUNCTIONS FOR DRAG //
// SETS THE ID AS TEXT IN THE DATA THAT IS BEING TRANSFERED TO DROP
   drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  //END DRAG //

// CLICK HANDLER FOR REVERSE FLIP CARD BUTTON TO TOGGLE VISIBILITY AFTER CLICKED
clickHandler = (event) => {
  /// IF IT HAS BEEN FLIPED TOGGLE CLASS TO HIDE
  if(event.target.classList.contains("buttonthing2") === false){
  event.target.classList.toggle("hide")
}
/// IF IT HAS NOT BEEN FLIPPED TOGGLE CLASS TO SHOW

  if(event.target.classList.contains("buttonthing2")){
    event.target.previousElementSibling.firstElementChild.firstElementChild.nextElementSibling.classList.toggle("hide")
  }
// UPDATE SET STATE AFTER TOGGLE
  this.setState ({
    clicked: !this.state.clicked
  })
}
    render() {
        let {character} = this.props
        let imageURL = `${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`
      return (
        <div>
                <li id={`char-${character.id}`} className={`card card-${this.props.increment}`} >
                  <div className={this.state.clicked? "flip-container flip" : "flip-container"}>
                    <div className="flipper">
                      <div>
                        <div className="front" onClick={this.props.clickHandler}>
                          <h1>
                            {this.state.char ? this.state.char : character.name}
                          </h1>
                          <img id={`char-${character.id}`} draggable="true" onDragStart={(event) => {this.drag(event)}} className="charImage" src={imageURL} onClick={this.props.clickHandler} alt="charImage"/>
                          <img alt="marvel-logo" className="marvelLogo" src="https://i.pinimg.com/originals/b6/38/10/b63810667a19130d9fae50bddb1c1fbe.jpg" />
                        </div>
                        <button className= {this.props.stacked? "buttonthing": "buttonthing-hidden" } onClick={(e)=> {
                          this.clickHandler(e);
                          this.props.popUpHandler()
                          this.props.charHandler(character)}}>
                            Flip Card
                        </button>
                        <span id={`char-${character.id}`} draggable="true" onDragStart={(event) => {this.drag(event)}} className="hop">
                           <div className="back">
                           <span id={`char-${character.id}`} draggable="true" onDragStart={(event) => {this.drag(event)}} className="hop">
                            <img alt="back-im" id={`char-${character.id}`} className="charImageBack" src={imageURL}/>
                              </span>
                            <section className="comic panel grey">
                              <div className="inner single">
                       		     <div className="comic-pane">
                                <div onScroll={this.doIt} className="text">
                                  <h2 className="yellow">
                                    {character.name}
                                  </h2>
                                  <div className="holder">
                                    <p className="desc">
                                      {character.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                            <div className="stats">
                              <img className="stat-pic" src={strength} alt="strength"/>
                              <p className="stat-name">
                                Strength:
                              </p>
                              <img className="stat-pic2" src={speed} alt="speed" />
                              <p className="stat-name2">
                                Speed:
                              </p>
                            <img className="stat-pic3" src={agility} alt="agility" />
                              <p className="stat-name3">
                                Agility:
                              </p>
                            <img className="stat-pic4" src={stamina} alt="stamina" />
                              <p className="stat-name4">
                                Stamina:
                              </p>
                            <img className="stat-pic5" src={durability} alt="durability" />
                              <p className="stat-name5">
                                Durability:
                              </p>
                            <img className="stat-pic6" src={intelligence} alt="intelligence" />
                              <p className="stat-name6">
                                Intelligence:
                              </p>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                      <button className= {this.props.stacked && this.state.clicked? "buttonthing2": "buttonthing-hidden" } onClick={(e)=> {
                        this.clickHandler(e)
                        this.props.charHandler(character)
                      }}> Flip Card
                      </button>
                    </div>
                  </li>
              </div>
      );
    }
  }

export default Card;
