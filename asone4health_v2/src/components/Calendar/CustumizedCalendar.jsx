import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';



function CustumizedCalendar() {
  
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value}  />
    </div>
  )
}

export default CustumizedCalendar;