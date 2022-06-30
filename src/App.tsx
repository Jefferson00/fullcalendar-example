import React from "react";
import FullCalendar, { EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./App.css";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export function createEventId() {
  return String(eventGuid++);
}

const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
    end: todayStr + "T16:00:00",
  },
];

function App() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "today,add,print,search",
        center: "prev,title,next",
        right: "timeGridWeek,timeGridFiveDay,timeGridThreeDay,timeGridDay",
      }}
      buttonText={{
        today: "Hoje",
      }}
      customButtons={{
        add: {
          text: "",
          icon: "plus-circle",
        },
        print: {
          text: "",
          icon: "print",
        },
        search: {
          text: "",
          icon: "search",
        },
      }}
      initialView="timeGridFiveDay"
      views={{
        timeGridWeek: {
          buttonText: "Semana",
        },
        timeGridFiveDay: {
          type: "timeGrid",
          duration: { days: 5 },
          buttonText: "5 dias",
        },
        timeGridThreeDay: {
          type: "timeGrid",
          duration: { days: 3 },
          buttonText: "3 dias",
        },
        timeGridDay: {
          buttonText: "Dia",
        },
        today: {
          buttonText: "Hoje",
        },
      }}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      allDaySlot={false}
      slotDuration={{
        minutes: 10,
      }}
      locale={{
        code: "pt-BR",
      }}
      initialEvents={INITIAL_EVENTS}
      nowIndicator
      select={(e) => console.log("select", e)}
      eventClick={(e) => console.log("event click", e)}
    />
  );
}

export default App;
