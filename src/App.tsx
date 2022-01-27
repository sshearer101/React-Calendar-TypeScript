import React from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './App.css';

function App() {

  const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 20)
  const startDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  const endDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 31)
  
  return (
    <div >
      <CalendarComponent 
      value={dateValue}
      min={startDate}
      max={endDate}
      isMultiSelection={true}
      start="Decade"
      depth="Month"
      ></CalendarComponent>
    </div>
  );
}

export default App;
