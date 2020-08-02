import React from 'react';
import { StyledCards } from '../../styles/components';
import { Link } from 'react-router-dom';

function CardComponent(props) {
  return (
    <StyledCards>
        <Link to={`all-beers/${props.route}`}>
        <div className="img-container">
          <img src={props.image} alt={props.name} />
        </div>
        <article>
          <h2>{props.name}</h2>
            <div><p>{props.description}</p></div>
          <h3>{props.contributor}</h3>
        </article>
        </Link>
    </StyledCards>
  )
}
export default CardComponent;