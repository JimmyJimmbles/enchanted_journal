/**
 * DATE BADGE COMPONENT
 * 
 * This component displays a date in a nice badge format.
 * It shows the month (like "JAN") and the day (like "15").
 * 
 * PROPS:
 * - startDate: A dayjs date object (a special date format from the dayjs library)
 * 
 * This component is REUSABLE - we can use it anywhere we need to show a date badge.
 */

const DateBadge = ({ startDate }) => {
  /**
   * This component displays:
   * - The month abbreviation in uppercase (e.g., "JAN", "FEB", "MAR")
   * - The day of the month (e.g., "1", "15", "31")
   * 
   * The `.format()` method converts the date into a readable string.
   * - 'MMM' gives us the 3-letter month (Jan, Feb, etc.)
   * - '.toUpperCase()' makes it all caps (JAN, FEB, etc.)
   * - 'D' gives us just the day number
   */
  return (
    <div className="event-date-badge">
      <span className="event-month">
        {startDate.format('MMM').toUpperCase()}
      </span>
      <span className="event-day">
        {startDate.format('D')}
      </span>
    </div>
  );
};

// Export the component so other files can import and use it
export default DateBadge;
