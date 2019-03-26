import React, { Component } from 'react';
import Card from './Card';
import propTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(c => <Card key = {c.headline} card = {c}/>)/* Using the cards prop, map over the list creating a new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: propTypes.arrayOf(
    propTypes.shape({
      headline: propTypes.string,
      img: propTypes.string,
      author: propTypes.string
    })
  )
}

export default Cards;