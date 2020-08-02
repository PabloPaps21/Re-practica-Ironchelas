import React from 'react';
import { StyledMenuCard } from '../../styles/components';
import { Link } from 'react-router-dom';

function MenuCard (props) {
  return(
    <StyledMenuCard>
      <Link to={props.route}>
        <img src={props.img} alt="beer" />
        <artcle>
            <h2>{props.name}</h2>
        </artcle>
      </Link>
    </StyledMenuCard>
  )
}
export default MenuCard;
