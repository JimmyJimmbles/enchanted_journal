/**
 * EVENT CARD COMPONENT
 * 
 * This component displays a single event in a card format.
 * It combines the DateBadge and EventDetails components.
 * 
 * PROPS:
 * - event: An object containing all the event information
 * - index: The position of this event in the list (0, 1, 2, etc.)
 * 
 * This component alternates the layout direction (left/right) based on the index
 * to create a nice visual pattern.
 */

import DateBadge from './DateBadge';
import EventDetails from './EventDetails';

const EventCard = ({ event, index }) => {
  /**
   * This component creates a card for a single event.
   * 
   * We use the index to alternate the layout:
   * - Even numbers (0, 2, 4...) show the date badge on the left
   * - Odd numbers (1, 3, 5...) show the date badge on the right
   * 
   * This creates a zigzag pattern that looks nice!
   */

  // Determine if this is an even-numbered event (0, 2, 4, etc.)
  const isEven = index % 2 === 0;

  // Set the flex direction based on whether it's even or odd
  // 'row' = date badge on left, details on right
  // 'row-reverse' = date badge on right, details on left
  const flexDirection = isEven ? 'row' : 'row-reverse';

  // Add some margin to create spacing between the badge and details
  const margin = isEven ? '0 14px 0 0' : '0 0 0 14px';

  return (
    <div 
      className="event-box" 
      style={{ 
        flexDirection: flexDirection, 
        margin: margin 
      }}
    >
      {/* The date badge component - shows the month and day */}
      <DateBadge startDate={event.start} />

      {/* The event details component - shows all the event information */}
      <EventDetails event={event} />
    </div>
  );
};

// Export the component so other files can import and use it
export default EventCard;
