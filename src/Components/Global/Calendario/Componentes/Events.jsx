import React from "react";
import AddForm from "./AddForms";

const Events = ({ activeDate, events, deleteEvent, addEvent, handleClose }) => {
  const eventsList = events.length ? (
    events.map(event => {
      return (
        <tr key={event.id}>
          <td>{event.name}</td>
          <td>{event.description}</td>
          <td>
            <button
              onClick={() => {
                deleteEvent(event.id);
              }}
              className="waves-effect waves-light btn"
            >
              Borrar
            </button>
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td>No tienes Eventos!</td>
    </tr>
  );

  return (
    <div className="card blue-white darken-1">
      <div className="card-content black-text">
        <div className="card-title">Eventos para el {activeDate}</div>
        <div className="card-content">
          <table>
            <thead>

                <div>

                </div>
                <div></div>
                <div></div>
                <div></div>
              <tr>

                <th>Nombre</th>
                <th>CodigoInmueble</th>
                <th>Direccion</th>
                <th>Teléfono</th>

              </tr>
            </thead>
            <tbody>{eventsList}</tbody>
          </table>
        </div>
        <div className="card-action">
          <AddForm
            addEvent={addEvent}
            activeDate={activeDate}
            handleClose={handleClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
