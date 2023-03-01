import React from 'react';

import AirDatepicker from 'air-datepicker';

import 'air-datepicker/air-datepicker.css';

const Datepicker = () => {
  // для удобства в режиме разработчика (избежания повторного выполнения useEffect)
  let dpCreated = false;

  React.useEffect(() => {

    if (!dpCreated) {

      new AirDatepicker('#date-input', {
        inline: true,
        selectedDates: [new Date()],
        startDate: new Date(),
        minDate: new Date(),
      });

      dpCreated = true;

    }
  }, []);

  return (
    <div className="date-input-wrapper">

      <h3 className="input-title">ВЫБЕРИТЕ ДАТУ</h3>

      <div id="date-input"></div>

    </div>
  );
};

export default Datepicker;
