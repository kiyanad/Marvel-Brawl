import React, { Component } from 'react';
import '../CSS/App.css';
import '../CSS/Attribute.css';
import '../CSS/ComicBoxSmall.css';
import '../CSS/SmallCard.css'


class SmallCard extends Component {
  state = {
    clicked: false,
    showPopup: false

  }


  //FUNCTIONS FOR DRAG
  // SETS THE ID AS TEXT IN THE DATA THAT IS BEING TRANSFERED TO DROP
   drag = (ev) => {
     // debugger
    ev.dataTransfer.setData("text", ev.target.id);
  }
  //END DRAG

  // CLICKHANDLER TO FLIP CARDS
clickHandler = () => {
  // debugger
  this.setState ({
    clicked: !this.state.clicked
  })
}
// END CLICKHANDLER
    render() {
      let {character} = this.props
      let imageURL = `${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`
      return (
          <div>
            <li id={`char-${character.id}`} className={`card2 card-${this.props.increment}`} draggable="true" onDragStart={(event) => {this.drag(event)}}>
              <div className={this.state.clicked? "flip-container2 flip" : "flip-container2"} ontouchstart="this.classList.toggle('hover');" draggable="true" onDragStart={(event) => {this.drag(event)}}>
                <div className="flipper">
                  <div>
                    <div className="front2" draggable="true" onDragStart={(event) => {this.drag(event)}}>
                      <h1>
                        {character.name}
                      </h1>
                      <img alt="character" id={`char-${character.id}`} draggable="true" onDragStart={(event) => {this.drag(event)}} className="charImage2" src={imageURL} onClick={this.props.clickHandler}/>
                    </div>
                  </div>
                </div>
                <button className= {this.props.stacked && this.state.clicked? "buttonthing2": "buttonthing-hidden" } onClick={(e)=> {
                  this.clickHandler()
                  this.props.charHandler(character)
                }}> Flip Card
                </button>
              </div>
            </li>
        </div>
      );
    }
  }

export default SmallCard;
