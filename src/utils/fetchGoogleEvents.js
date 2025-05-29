// src/utils/fetchGoogleEvents.js
import axios from 'axios';
import dayjs from 'dayjs';

export async function fetchGoogleCalendarEvents(calendarId, apiKey) {
  const timeMin = new Date().toISOString(); // Only future events

  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`;

  const response = await axios.get(url, {
    params: {
      key: apiKey,
      timeMin,
      orderBy: 'startTime',
      singleEvents: true,
      maxResults: 50,
    },
  });

  return response.data.items.map(event => {
    const start = event.start.dateTime || event.start.date; // dateTime is optional
    const end = event.end.dateTime || event.end.date;

    return {
      summary: event.summary,
      location: event.location,
      description: event.description,
      start: dayjs(start),
      end: dayjs(end),
      htmlLink: event.htmlLink,
    };
  });
}
