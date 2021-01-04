import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import './calendario.css';

const now = new Date();
const yesterdayBegin = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

export default function Calendario() {
  const [value, onChange] = useState([yesterdayBegin, todayEnd]);

  return (
    <div className="Sample">
      <div className ="titulo">
        <h1>Reserva </h1>
      </div>
      <div className="Sample__container">
        <div className="Sample__container__content">
          <DateRangePicker

            onChange={onChange}
            value={value}

          />
        </div>
      </div>
    </div>
  );
}