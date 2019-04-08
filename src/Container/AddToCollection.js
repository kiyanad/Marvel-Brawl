import React, { Component } from 'react';
// import '../CSS/Card.css';
// import '../CSS/Attribute.css';
import '../CSS/Header.css';
import '../CSS/SlideOut.css';
import pow from '../images/pow.png'
// import Slideout from 'slideout'
import CardContainer from "../Container/CardContainer"
import SmallContainer from "../Container/SmallContainer"



class AddToCollection extends Component {
//FUNCTIONS FOR DRAG AND DROP//
state = {
  clicked: false,
  view: false
}

//////////////////////////////////////////// BEGIN DRAG AND DROP //////////////////////////////////////////////
//////////////////////////////////////// ALLOWS DROP EVENT TO OCCUR /////////////////////////////////////////////

  allowDrop= (allowdropevent)=> {
    allowdropevent.target.style.color = "blue";
    allowdropevent.preventDefault();
  }
  //////////////////////////////////////// ALLOWS DRAG EVENT TO OCCUR /////////////////////////////////////////////
  /////////////////////////////////// ONCLICK OF SMALL CARDS CANT DRAG INTO SIDE NAV /////////////////////////////////////////////

  drag= (dragevent) => {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
    dragevent.target.style.color = "green";
  }
  //////////// FINDS THE CORRECT CARD FOR DROP EVENT
  //////////// CHECKS IF CARD HAS ALREADY BEEN CHOOSEN
  //////////// CHECKS IF CARD IS ALREADY IN CONTAINER
  //////////// ADDS CARD TO COLLECTION
  drop = (dropevent) => {
    //PREVENTS RELOAD
    dropevent.preventDefault();
    // GET CARD ID
    var data = dropevent.dataTransfer.getData("text");
    // ADD # TO USE querySelectorAll
    const id = "#" + data
    // SAVE NODELIST TO VARIABLE
    const selected = document.querySelectorAll(id)
    // CREATE AN ARRAY FROM NODELIST
    const selectArr = Array.from(selected)
    // SAVE FOUND CHOOSEN CARD TO VARIABLE
    const found = selectArr.find(card => card.classList.contains("choosen"))
      //IF A CARD HAS NOT BEEN FOUND (HAS NOT BEEN SELECTED)
      if (found === undefined){
        //CHECKS TO SEE IF DIV ALREADY HAS A CARD IN IT
        if(dropevent.target.childElementCount === 1){
          // GETS THE ORIGINAL CARD FROM SMALL CONTAINER
          var org = document.getElementById(data)
          // CLONE ORIGINAL CARD
          var cln = org.cloneNode(true);
          // TOGGLE ORIGINAL CARD TO CHOOSEN SO IT BECOMES GRAY
          org.classList.toggle("choosen")
          // APPEND THE CLONE TO THE DIV
          dropevent.target.appendChild(cln);
            // ADDS THE REMOVE BUTTON FOR THE ADDED CARD
            if(dropevent.target.firstElementChild.classList.contains("showButton") === false){
              dropevent.target.firstElementChild.classList.toggle("showButton")
            }
            //TOGGLES DIV CLASS TO MAKE BOX DISSAPEAR
            dropevent.target.classList.toggle("noBox")
        }
    // IF DIV NOT EMPTY AND CARD ALREADY PLACED THERE RENDERS ERROR
    else{
      alert("Sorry you've already placed a card here. If you no longer want that card please press remove.");
    }
  }
  // IF FOUND IS NOT UNDEFINED AND CARD ALREADY BEEN SELECTED RENDER ERROR
  else{
    alert("Sorry you've already choosen this card. Please select another.");
  }
}
//////////////////////////////////END DRAG AND DROP////////////////////////////////////////////////////


// CLICKHANDLER FOR STACKED CARDS IN CARD.JS TO EXPAND //
// SETS STATE CLICKED TO EITHER TRUE OR FALSE
// IF TRUE CARDS UNSTACK
// IF FALSE CARDS STACK
clickHandler = () => {
  this.setState ({
    clicked: !this.state.clicked
  })
}
// END CLICKHANDLER //

// CLICKHANDLER TO CHANGE THE COMPONENT RENDERING THE CARDS
// IF TRUE RENDERS SMALL CONTAINER
// IF FALSE RENDERS CARD CONTAINER
changeView = () => {
  this.setState ({
    view: !this.state.view
  })
}
// END CLICKHANDLER

// CLICKHANDLER FOR THE REMOVE BUTTON IN SIDE NAV
remove = (event) => {
  // GETS THE ID OF THE CARD YOU WANT TO REMOVE
  var bigCardId = event.target.nextElementSibling.getAttribute('id')
  // REMOVES THE CARD FROM SIDE NAV
  event.target.nextElementSibling.remove()
  // FINDS THE CARD IN THE CONTAINER
  var bigCard = document.getElementById(bigCardId)
  // TOGGLES CLASS BACK SO IT IS NO LONGER GRAY
  bigCard.classList.toggle("choosen")
  // SAVES REMOVE BUTTON TO VARIABLE
  var button = event.target
  // TOGGLE BUTTON CLASS BACK SO IT NO LONGER SHOWS
  button.classList.toggle("showButton")
  // TOGGLE BOX BACK SO IT APPEARS AGAIN
  event.target.parentElement.classList.toggle("noBox")
}
// END CLICKHANDLER

  render(){

    return(
      <div>
       <div id="divFirst" >
       <input type="checkbox" id="slide" name="" value="" />
        <div className="container2">
          <label  htmlFor="slide" className="toggle" onClick={() => {this.changeView()}}>
            ☰
          </label>
      		<nav className="sidebar">
            <div className="box" id="dropper-div" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}>
              <button onClick={this.remove} className="removeButton">
                Remove
              </button>
            </div>
            <div className="box" id="dropper-div2" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}>
              <button onClick={this.remove} className="removeButton2">
                Remove
              </button>
            </div>
            <div className="box" id="dropper-div3" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}>
              <button onClick={this.remove} className="removeButton3">
                Remove
              </button>
            </div>
      		</nav>
      	 </div>
        </div>
          <main id="panel">
            <header>
              <header className="hero">
                <img className="pow" src={pow} alt="logo" />
                <div className="title-1">
                  <h1 className="title-Marvel">
                    MARVEL
                  </h1>
                  <h2>
                    Brawl
                  </h2>
                </div>
              </header>
              {this.state.view?
                <ul className={this.state.clicked ? "cards2 transition" : "cards2" }>
                  <SmallContainer characters={this.props.characters} clickHandler={this.clickHandler} popUpHandler={this.props.popUpHandler} stacked={this.state.clicked} charHandler={this.props.charHandler}/>
                </ul>:
                <ul className={this.state.clicked ? "cards transition" : "cards" }>
                  <CardContainer characters={this.props.characters} clickHandler={this.clickHandler} popUpHandler={this.props.popUpHandler} stacked={this.state.clicked} charHandler={this.props.charHandler}/>
                </ul>
              }
            </header>
          </main>
      </div>
    )
  }
}

export default AddToCollection










// <nav id="menu">
// <h2>Add to Collection</h2>
// <div id="divFirst" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}>
// <img id="plus" src="https://www.pngarts.com/files/3/Plus-Symbol-Download-PNG-Image.png" />
// Drag cards here to add to your collection!
// </div>
// </nav>






// <div id="div2" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}></div>
