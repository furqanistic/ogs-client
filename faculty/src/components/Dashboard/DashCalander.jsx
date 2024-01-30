import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styled from 'styled-components'

const CalendarWrapper = styled.div`
  display: flex;
  max-width: 800px;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
`

const CalendarContainer = styled.div`
  flex: 1;
`

const EventDetails = styled.div`
  flex: 1;
  margin-left: 20px;
  color: #fff;
`

const EventTitle = styled.h3`
  color: #3ba933;
  font-size: 1rem;
  font-weight: 600;
`
const DetailsTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
`

function DashCalendar() {
  const [date, setDate] = useState(new Date())
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Event 1 with a very long title that cannot fit within the tile',
      date: new Date(2023, 0, 3),
    },
    { id: 2, title: 'Event 2', date: new Date(2023, 0, 10) },
    { id: 3, title: 'Event 3', date: new Date(2023, 0, 15) },
  ])

  const handleDateChange = (date) => {
    setDate(date)
  }

  const getEventsForDate = (date) => {
    return events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    )
  }

  return (
    <CalendarWrapper>
      <CalendarContainer>
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileContent={({ date }) => {
            const eventsForDate = getEventsForDate(date)
            return (
              <div>
                {eventsForDate.length > 0 && (
                  <div className='event-marker'></div>
                )}
                {eventsForDate.map((event) => (
                  <EventTitle key={event.id}>
                    {event.title.length > 15
                      ? `${event.title.substring(0, 10)}...`
                      : event.title}
                  </EventTitle>
                ))}
              </div>
            )
          }}
        />
      </CalendarContainer>
      <EventDetails>
        <DetailsTitle>Event Details</DetailsTitle>
        {getEventsForDate(date).map((event) => (
          <div key={event.id}>
            <EventTitle>{event.title}</EventTitle>
            <div>{event.date.toDateString()}</div>
          </div>
        ))}
      </EventDetails>
    </CalendarWrapper>
  )
}

export default DashCalendar
