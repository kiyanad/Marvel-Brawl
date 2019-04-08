import React from 'react'
import "../CSS/Popup.css"
import "../CSS/Card.css"
import CardBack from "../components/CardBack"
class Popup extends React.Component {
  state = {
    comic: null,
    comic1: null
  }



    componentWillMount(){
      // GETS THE IMAGE URL FOR COMIC BOOK BACKGROUND
      let url= this.props.char.comics.items[1].resourceURI + "?apikey=70c5f7383da76e0b2daaa2d2a67f7532"
      var beg = url.slice(0,4)
      var end = url.slice(4)
      var newUrl = beg + "s" + end

      // FETCHES THE SPECIFIC CHARACTERS COMIC BOOK BACKGROUND FROM MARVEL API
      fetch(newUrl)
      .then(res=>res.json())
      .then(comics =>
        this.setState({
          comic: comics.data.results
          })
        )    }
  render() {
    console.log(this.state.comic1);
    return (
      <div className='popup'>
        <div className='popup_inner'>
            <CardBack character={this.props.char} clickHandler={this.props.clickHandler} comic={this.state.comic} stacked={this.props.stacked} popUpHandler={this.props.popUpHandler} charHandler={this.props.charHandler}/>:
          <button onClick={this.props.closePopup} className="closeButton">
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Popup
