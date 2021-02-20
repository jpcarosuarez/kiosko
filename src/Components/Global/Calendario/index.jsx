import React, { Component } from "react";
import EventsData from "./Componentes/data.json";
import { Container, Grid } from "@material-ui/core";
import EventsModal from "./Componentes/EventsModal";


class ScheduleCalendar extends Component {
    state = {
      activeDate: new Date().toLocaleDateString(),
      events: []
    };
    /**
     * Read data from file and update component state adter component is loaded
     */
    componentDidMount() {
      this.setState({
        events: EventsData
      });
    }
    changeDate = selectedDate => {
      this.setState({
        activeDate: selectedDate.toLocaleDateString()
      });
    };
    getEvents = date => {
      const eventsList = this.state.events.filter(event => {
        return event.date === date;
      });
      return eventsList;
    };
    addEvent = (date, event) => {
      event.date = date;
      event.id = this.state.events.length + 1;
      const events = [...this.state.events, event];
      this.setState({
        events: events
      });
    };
    deleteEvent = id => {
      const events = this.state.events.filter(event => {
        return event.id !== id;
      });
      this.setState({
        events: events
      });
    };
  
    render() {
      return (
        <Container>
          <Grid container direction="row" justify="center" alignItems="center">
            <EventsModal
              changeDate={this.changeDate}
              activeDate={this.state.activeDate}
              events={this.getEvents(this.state.activeDate)}
              deleteEvent={this.deleteEvent}
              addEvent={this.addEvent}
            />
          </Grid>
        </Container>
      );
    }
  }
  
  export default ScheduleCalendar;