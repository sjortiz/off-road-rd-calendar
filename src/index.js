import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const lang = {
  es: {
    week: 'Semana',
    work_week: 'Semana de trabajo',
    day: 'Día',
    month: 'Mes',
    previous: 'Atrás',
    next: 'Después',
    today: 'Hoy',
    agenda: 'Agenda',

    showMore: (total) => `+${total} más`,
  }
}

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
      },
      {
        id: 2,
        title: 'Rally cacata',
        allDay: false,
        start: new Date(2022, 11-1, 19, 8, 0, 0),
        end: new Date(2022, 11-1, 20, 12, 0, 0),
      },
      {
        id: 3,
        title: 'la vega - 2do monteo invitacional',
        start: new Date(2022, 11-1, 13, 9, 0, 0),
        end: new Date(2022, 11-1, 13, 16, 0, 0),

      },
      {
        id: 4,
        title: 'Rally constitucion',
        start: new Date(2022, 11-1, 12, 9, 0, 0),
        end: new Date(2022, 11-1, 12, 16, 0, 0),

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
          Calendario de monteo. 
          <b>Para agregar eventos contactar al team bronco</b>
        </p>
        <div style={{ height: '500pt'}}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            messages={lang['es']}
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
