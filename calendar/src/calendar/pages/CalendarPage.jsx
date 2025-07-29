import { Calendar} from 'react-big-calendar';
import { useState } from 'react';
import { Navbar } from "../components/Navbar"
import {addHours} from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getMessagesES, localizer } from '../../helpers';
import { CalendarEvent } from '../components/CalendarEvent';
import { CalendarModal } from '../components/CalendarModal';
import { useUiStore } from '../../hooks/useUiStore';



const events = [{
  title: 'Cumpleaños del Jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Victoria'
  }
}]

export const CalendarPage = () => {

  const {OpenDateModal} = useUiStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event, start, end, isSelected ) => {


   const style = {
    backgroundColor: '#347CF7',
    borderRadius: 'opx', 
    opacity: 0.8,
    color: 'white'

   }
    return {
        style 
   }
  }

  const onDoubleClick = (event)  => {
  //console.log({doubleClick: event});
  OpenDateModal()
  }

  const onSelect = (event)  => {
    console.log({click: event})
    }

    const onViewChanged = (event)  => {
      localStorage.setItem('lastView', event)
      setLastView(event)
      }

  return (
    <>
   <Navbar />

   <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      view={lastView}
      onView={onViewChanged}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={getMessagesES()}
      eventPropGetter={eventStyleGetter}
      components={{
          event: CalendarEvent
      }}
      onDoubleClickEvent = {onDoubleClick}
      onSelectEvent={onSelect}

    />

    <CalendarModal />

    </>
  )
}
