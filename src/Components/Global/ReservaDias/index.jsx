import {useState} from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import './reserva.css';

const now = new Date();
const yesterdayBegin = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

export default function Reservation() {
  const [value, onChange] = useState([yesterdayBegin, todayEnd]);

  return (
    <div className="Sample">
      <header>
        <h1>Ingreso / Salida</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <DateRangePicker
            calendarAriaLabel="Toggle calendar"
            clearAriaLabel="Clear value"
            dayAriaLabel="Dia"
            monthAriaLabel="Mes"
            nativeInputAriaLabel="Fecha"
            onChange={onChange}
            value={value}
            yearAriaLabel="Año"
          />
        </main>
      </div>
    </div>
  );
}