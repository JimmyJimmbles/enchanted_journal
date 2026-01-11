/**
 * FETCH GOOGLE EVENTS UTILITY
 * 
 * This is a utility function (a helper function) that fetches events from Google Calendar.
 * 
 * Utility functions are kept separate from components because:
 * 1. They can be reused in multiple places
 * 2. They're easier to test
 * 3. They keep components clean and focused
 * 
 * This function uses the Google Calendar API to get events.
 */

// Import axios - a library for making HTTP requests (fetching data from the internet)
import axios from 'axios';

// Import dayjs - a library for working with dates and times
import dayjs from 'dayjs';

/**
 * FETCH GOOGLE CALENDAR EVENTS
 * 
 * This function fetches events from a Google Calendar and formats them nicely.
 * 
 * PARAMETERS:
 * @param {string} calendarId - The ID of the Google Calendar to fetch from
 * @param {string} apiKey - The API key needed to access Google Calendar
 * 
 * RETURNS:
 * @returns {Promise<Array>} - A promise that resolves to an array of event objects
 *   Each event object has:
 *   - summary: The event title
 *   - location: Where the event is (optional)
 *   - description: More details about the event (optional)
 *   - start: The start date/time (as a dayjs object)
 *   - end: The end date/time (as a dayjs object)
 *   - htmlLink: A link to add the event to Google Calendar
 */
export const fetchGoogleCalendarEvents = async (calendarId, apiKey) => {
  /**
   * STEP 1: Set up the time filter
   * 
   * We only want to get FUTURE events, not past events.
   * timeMin is the earliest date we want events from (right now).
   */
  const timeMin = new Date().toISOString(); // Convert current date to ISO format (Google Calendar format)

  /**
   * STEP 2: Build the API URL
   * 
   * This is the Google Calendar API endpoint.
   * We insert the calendarId into the URL.
   */
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`;

  /**
   * STEP 3: Make the API request
   * 
   * axios.get() sends a GET request to the Google Calendar API.
   * We pass parameters in the "params" object:
   * - key: Our API key (like a password)
   * - timeMin: Only get events after this time
   * - orderBy: Sort by start time
   * - singleEvents: Expand recurring events into individual events
   * - maxResults: Maximum number of events to return (50)
   * 
   * The "await" keyword waits for the request to finish before continuing.
   */
  const response = await axios.get(url, {
    params: {
      key: apiKey,
      timeMin,
      orderBy: 'startTime',
      singleEvents: true,
      maxResults: 50,
    },
  });

  /**
   * STEP 4: Transform the data
   * 
   * Google Calendar returns data in a specific format.
   * We need to transform it into a format that's easier for our app to use.
   * 
   * We use .map() to loop through each event and transform it.
   */
  return response.data.items.map(event => {
    /**
     * Google Calendar events can have dates in two formats:
     * - dateTime: For events with specific times (e.g., "6:00 PM")
     * - date: For all-day events (e.g., "all day")
     * 
     * We use the || operator to use dateTime if it exists, otherwise use date.
     */
    const start = event.start.dateTime || event.start.date;
    const end = event.end.dateTime || event.end.date;

    /**
     * Return a new object with the data formatted the way we want it.
     * 
     * We use dayjs() to convert the date strings into dayjs objects.
     * This makes it easy to format dates later (e.g., "Monday", "6:00pm", etc.)
     */
    return {
      summary: event.summary,           // Event title
      location: event.location,          // Event location (optional)
      description: event.description,    // Event description (optional)
      start: dayjs(start),              // Start time as a dayjs object
      end: dayjs(end),                  // End time as a dayjs object
      htmlLink: event.htmlLink,         // Link to add event to calendar
    };
  });
};
