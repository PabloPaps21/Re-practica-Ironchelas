import React, { Component } from 'react';
import axios from 'axios';
import { FormAdd} from '../../styles/components';
import './newbeer.css';


class AddBeer extends Component {
  state = {
    form : {
      name: "",
      tagline: "",
      first_brewed:"",
      attenuation_level: 0,
      description:"",
      contributed_by:""
    }
  }

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]:value
      }
    });
  };

  addBeer = async e => {
    e.preventDefault();
    const { form } = this.state;
    const { data } = await axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new", form
    );
    alert("La cerveza se agregó correctamente =)");
    this.setState({
      form: {
        name: "",
        tagline:"",
        first_brewed:"",
        attenuation_level: 0,
        description:"",
        contributed_by:""
      }
    })
  }
  
  render(){
    return (
      <div className="contenedor">
        <FormAdd onSubmit={this.addBeer}>
        <h1>Lista de Cervezas</h1>
        <label for = "name">Beer name</label>
        <input 
          name = "name"
          type = "text"
          value = { this.state.form.name }
          onChange = { this.inputChange }
          placeholder = "Beer name"
        />
        <label for = "tagline"> Tagline </label>
        <input 
          name = "tagline"
          type = "text"
          value = { this.state.form.tagline }
          onChange = { this.inputChange }
          placeholder = "Tagline"
        />
        <label for="description"> Description </label>
        <input 
          name = "description"
          type = "text"
          value = { this.state.form.description }
          onChange = { this.inputChange }
          placeholder = "Description"
        />
        <label for = "first_brewed">First Brewed</label>
        <input 
          name = "first_brewed"
          type = "text"
          value = { this.state.form.first_brewed }
          onChange = { this.inputChange }
          placeholder = "First brewed"
        />
        <label for= "attenuation_level">Attenuation Level</label>
        <input 
          name = "attenuation_level"
          type = "number"
          min= "0"
          value = { this.state.form.attenuation_level }
          onChange = { this.inputChange }
        />
        <label for="contributed_by">Contributed by:</label>
        <input 
          name = "contributed_by"
          type = "text"
          value = { this.state.form.contributed_by }
          onChange = {this.inputChange }
          placeholder = "Contributed by: "
        />
        <button> Submit </button>
      </FormAdd>
      </div>
    )
  }

};//class

export default AddBeer