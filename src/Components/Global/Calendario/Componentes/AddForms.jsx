import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class AddForm extends Component {
  state = {
    name: "",
    description: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addEvent(this.props.activeDate, this.state);
    this.setState({
      name: "",
      description: ""
    });
  };
  handleClose = () => {
    this.props.handleClose();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="nombre">Nombre Completo</label>
        <input
          id="nombre"
          type="text"
          className="input-field"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="cedula">Cédula</label>
        <input
          id="cedula"
          type="text"
          className="input-field"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="telefono">Télefono Contacto</label>
        <input
          id="telefono"
          type="tel"
          className="input-field"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <button className="waves-effect waves-light btn-small">
          Agendar
        </button>

        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClose}
        >
          Cerrar
        </Button>
      </form>
    );
  }
}

export default AddForm;
