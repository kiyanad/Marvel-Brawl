import React from 'react'
import "../CSS/Popup.css"
import "../CSS/Card.css"
import CardBack from "../components/CardBack"
class Popup extends React.Component {
  state = {
    comic: null
  }

  componentDidMount(){
    // GETS THE IMAGE URL FOR COMIC BOOK BACKGROUND
    let url= this.props.char.comics.items[1].resourceURI + "?apikey=70c5f7383da76e0b2daaa2d2a67f7532"
    // FETCHES THE SPECIFIC CHARACTERS COMIC BOOK BACKGROUND FROM MARVEL API
    fetch(url)
    .then(res=>res.json())
    .then(comics =>
      this.setState({
        comic: comics.data.results
        })
      )
    }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          {this.state.comic !== null?
            <CardBack character={this.props.char} clickHandler={this.props.clickHandler} comic={this.state.comic} stacked={this.props.stacked} popUpHandler={this.props.popUpHandler} charHandler={this.props.charHandler}/>:
            null}
          <button onClick={this.props.closePopup} className="closeButton">
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Popup
