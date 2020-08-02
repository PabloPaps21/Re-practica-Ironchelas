import React, { Component } from 'react';
import axios from 'axios';
import  CardComponent  from './CardComponent';

//consumir endPoint API 
const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers';


export default class AllBeers extends Component {
  state = {
    beers: []
    
  }

  async componentDidMount() {
    const { data } = await axios.get (ENDPOINT);
    this.setState( { beers: [...data] })
  }

  handleSearch = ({target}) => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${target.value}`)
    .then(({data: beersFiltered}) => {
        this.setState(state => ({
            ...state,
            query: target.value,
            beers: beersFiltered
        }))            
    })
    .catch( error => console.log(error) )
  }

  render(){
    const { beers } = this.state 
    return(
      <>
        <h1 style={{
          marginTop: "90px",
          textAlign: "center"
        }}>
          Listado de todas las cervezas
        </h1>
        <input className="form-control m-4" name='search' value={this.state.search} onChange={this.handleSearch} placeholder='Search...' />
                {this.getAllBeersCards()}
        {beers.map((beer,i) => (
          <CardComponent
          key={i}
          route={beer._id}
          image={beer.image_url}
          name={beer.name}
          contributor={beer.contributed_by} 
          />
        ))}
      </>
    )
  }
}//finclass