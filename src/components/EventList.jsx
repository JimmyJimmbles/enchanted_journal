/**
 * EVENT LIST COMPONENT
 * 
 * This component displays a list of all events.
 * It takes an array of events and displays each one using the EventCard component.
 * 
 * PROPS:
 * - events: An array of event objects
 *   Each event object has:
 *   - start: Start date/time (dayjs object)
 *   - end: End date/time (dayjs object)
 *   - description: Optional description
 *   - location: Optional location string
 *   - htmlLink: Link to add to calendar
 * 
 * If there are no events, it shows a helpful message.
 */

import EventCard from './EventCard';

const EventList = ({ events }) => {
  /**
   * This component displays all the events.
   * 
   * We use the .map() function to loop through the events array
   * and create an EventCard for each one.
   * 
   * The `key` prop is required by React when rendering lists.
   * It helps React keep track of which item is which when the list changes.
   */

  // If there are no events, show a message
  if (events.length === 0) {
    return (
      <div className="event-list">
        <p>No upcoming events at this time. Check back soon!</p>
      </div>
    );
  }

  // If there are events, display them
  return (
    <div className="event-list">
      {/* 
        Loop through each event and create an EventCard component.
        The .map() function creates a new array of EventCard components.
        
        We pass two props to each EventCard:
        - event: The event data
        - index: The position in the array (used for alternating layout)
        - key: A unique identifier for React (required for lists)
      */}
      {events.map((event, index) => (
        <EventCard 
          key={index} 
          event={event} 
          index={index} 
        />
      ))}
    </div>
  );
};

// Export the component so other files can import and use it
export default EventList;
