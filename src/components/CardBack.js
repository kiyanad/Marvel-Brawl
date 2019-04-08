import React from 'react'
import '../CSS/CardBack.css';
import '../CSS/AttributeBack.css';
import '../CSS/ComicBox.css'


class CardBack extends React.Component{

  render(){
    let character = this.props.character
    let comicURL = `${this.props.comic[0].thumbnail.path}/portrait_uncanny.${this.props.comic[0].thumbnail.extension}`
    let imageURL = `${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`
    var divStyle = {
      backgroundImage: 'url(' + comicURL + ')'


    };

    var picStyle = {
      backgroundImage: 'url(' + imageURL + ')'

    }
    // console.log(divStyle);
  // if(this.props.comic !== null){
  //   debugger
  //
  // }
    // debugger
    // debugger`
    return(
      <div >
      <ul className="cardsBack">
      <div className="cover" style={divStyle}>
      <div className="photo" style={picStyle}> </div>
      <div className="descrip"> <h2 className="cardName">{character.name}</h2><h1 className="backDesc">{character.description}</h1> </div>
      <div className="ikons" id="bigIcon">
      <li className="ikon" id="bigIcon"/>
      <li className="ikon2" id="bigIcon"/>
      <div className="ikon3" id="bigIcon" />
    <li className="ikon4" id="bigIcon" />
      <li className="ikon5" id="bigIcon"/>
      <li className="ikon6" id="bigIcon" />
      <div className="little-ikon" />
      <div className="little-ikon2" />
      <div className="little-ikon3" />
    <div className="little-ikon4" />
      <div className="little-ikon5" />
      <div className="little-ikon6" />
      </div>


      </div>
</ul>
      </div>
    )
  }
}

export default CardBack



























// <li id={`char-${character.id}`} className={`card card-${this.props.increment}`}>
// <div className="flip-container flip" id="bigCard" ontouchstart="this.classList.toggle('hover');">
// <div className="flipper">
// <div>
// <div className="front">
// <h1>{character.name}</h1>
// <img id={`char-${character.id}`} className="charImage" src={imageURL} onClick={this.props.clickHandler}/>
// <img className="marvelLogo" src="https://i.pinimg.com/originals/b6/38/10/b63810667a19130d9fae50bddb1c1fbe.jpg" />
// </div>
// <span id={`char-${character.id}`} draggable="true" onDragStart={(event) => {this.drag(event)}} className="hop">
// <div className="back">
// <section className="comic panels grey">
// <div className="inner single">
// <div className="comic-panels">
// <div onScroll={this.doIt} className="text">
// <h2 className="yellow">{character.name}</h2>
// <span id={`char-${character.id}`}className="hop"><img id={`char-${character.id}`} className="charImageBack" src={imageURL}/></span>
// <div className="holder">
// <p className="desc">{character.description}</p>
// </div>
// </div>
// </div>
// </div>
// </section>
// <div className="stats2">
// <img className="stat2-pic" src={strength} />
// <p className="stat2-name"> Strength: </p>
// <img className="stat2-pic2" src={speed} />
// <p className="stat2-name2"> Speed: </p>
// <img className="stat2-pic3" src={agility} />
// <p className="stat2-name3"> Agility: </p>
// <img className="stat2-pic4" src={stamina} />
// <p className="stat2-name4"> Stamina: </p>
// <img className="stat2-pic5" src={durability} />
// <p className="stat2-name5"> Durability: </p>
// <img className="stat2-pic6" src={intelligence} />
// <p className="stat2-name6"> Intelligence: </p>
// </div>
// </div>
// </span>
// </div>
// </div>
// </div>
// </li>
