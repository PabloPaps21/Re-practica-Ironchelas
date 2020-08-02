import React from 'react';
import { StyledCards } from '../../styles/components';

function DetailComponent(props) {

  return (
    <StyledCards>
      <div>
        <img src={props.image} alt={props.name}/>
      </div>
      <article>
        <h2>{props.name}</h2>
        <p>{props.tagline}</p>
        <p>{props.brewed}</p>
        <p>{props.level}</p>
        <p>{props.description}</p>
        <p>{props.contributor}</p>
      </article>
    </StyledCards>
  )
}

export default DetailComponent;