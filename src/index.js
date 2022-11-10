import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class App extends Component {
  constructor() {
    super();
    const now = new Date();
    const events = [
      {
        id: 1,
        title: 'Rally de la mujer',
        allDay: false,
        start: new Date(2022, 11-1, 13, 9, 30, 0),
        end: new Date(2022, 11-1, 13, 18, 0, 0),
      }
    ]
    this.state = {
      name: 'React',
      events
    };
  }

  render() {
    return (
      <div>
        <p>
          A test for the React Big Calendar.
        </p>
        <div style={{ height: '500pt'}}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
