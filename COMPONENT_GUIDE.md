# Component Guide for Beginners

This guide explains how the components in this project work together. Read this if you're new to React!

## What is a Component?

A **component** is like a LEGO block. You can build big things by combining small pieces.

- Each component is a reusable piece of code
- Components can be combined to build complex UIs
- Components can accept **props** (data) to customize how they work

## Component Structure

Here's how our components are organized, from smallest to largest:

```
App.jsx (Main Component)
├── Header.jsx
│   └── SocialLink.jsx (used 2 times)
├── EventList.jsx
│   └── EventCard.jsx (used multiple times)
│       ├── DateBadge.jsx
│       └── EventDetails.jsx
│           └── Button.jsx (used 2 times)
└── Footer.jsx
```

## Component Breakdown

### 1. Button.jsx (Smallest - Most Reusable)
**What it does:** Creates a clickable button/link

**Props it accepts:**
- `text` - The text on the button
- `href` - Where the button links to
- `className` - CSS styling (optional)

**Example usage:**
```jsx
<Button 
  text="Click Me" 
  href="https://example.com" 
  className="my-button" 
/>
```

**Why it's reusable:** We use this for both "Location" buttons and "Add to Calendar" buttons!

---

### 2. SocialLink.jsx (Reusable)
**What it does:** Creates a social media icon link (Instagram, Meetup, etc.)

**Props it accepts:**
- `url` - The link to the social media page
- `iconClass` - Which icon to show (e.g., "fa-instagram")
- `label` - Description for screen readers

**Example usage:**
```jsx
<SocialLink
  url="https://instagram.com/example"
  iconClass="fa-instagram instagram-icon"
  label="Visit our Instagram"
/>
```

**Why it's reusable:** We use this for both Instagram and Meetup links!

---

### 3. DateBadge.jsx
**What it does:** Displays a date in a badge format (month and day)

**Props it accepts:**
- `startDate` - A dayjs date object

**Example usage:**
```jsx
<DateBadge startDate={event.start} />
```

---

### 4. EventDetails.jsx
**What it does:** Shows all the information about an event (time, description, location, etc.)

**Props it accepts:**
- `event` - An object with all event information

**What it uses:** Button component (reusable!)

**Example usage:**
```jsx
<EventDetails event={myEvent} />
```

---

### 5. EventCard.jsx
**What it does:** Combines DateBadge and EventDetails into one card

**Props it accepts:**
- `event` - Event data
- `index` - Position in the list (used for alternating layout)

**What it uses:** DateBadge and EventDetails components

**Example usage:**
```jsx
<EventCard event={myEvent} index={0} />
```

---

### 6. EventList.jsx
**What it does:** Displays a list of all events

**Props it accepts:**
- `events` - An array of event objects

**What it uses:** EventCard component (multiple times!)

**Example usage:**
```jsx
<EventList events={[event1, event2, event3]} />
```

---

### 7. Header.jsx
**What it does:** Shows the logo and social media links at the top

**Props:** None needed (uses constants file)

**What it uses:** SocialLink component (twice - for Instagram and Meetup)

---

### 8. Footer.jsx
**What it does:** Shows a decorative image at the bottom

**Props:** None needed

---

### 9. App.jsx (Main Component)
**What it does:** The "brain" of the application
- Fetches events from Google Calendar
- Stores events in state
- Combines all other components

**What it uses:** Header, EventList, and Footer components

---

## Understanding Props

**Props** are like arguments you pass to a function, but for React components.

```jsx
// Component definition
function Button({ text, href }) {
  return <a href={href}>{text}</a>;
}

// Using the component with props
<Button text="Click Me" href="https://example.com" />
```

Think of props as:
- **Inputs** to a component
- **Customization options**
- **Data** the component needs to work

## How Data Flows

1. **App.jsx** fetches events from Google Calendar
2. **App.jsx** passes events to **EventList** via props
3. **EventList** loops through events and creates an **EventCard** for each one
4. **EventCard** passes event data to **DateBadge** and **EventDetails**
5. **EventDetails** uses **Button** components for actions

```
App (has events)
  ↓ passes events
EventList (receives events)
  ↓ loops and passes each event
EventCard (receives one event)
  ↓ passes date
DateBadge (receives date)
  ↓ passes event
EventDetails (receives event)
  ↓ passes button info
Button (receives text, href)
```

## Key React Concepts

### 1. State (`useState`)
State is React's way of storing data that can change.

```jsx
const [events, setEvents] = useState([]);
// events = current value (starts as empty array)
// setEvents = function to update events
```

### 2. Effects (`useEffect`)
Effects let you do things when the component loads.

```jsx
useEffect(() => {
  // This code runs when the component first loads
  fetchEvents();
}, []); // Empty array = only run once
```

### 3. JSX
JSX looks like HTML but it's actually JavaScript.

```jsx
// This is JSX
<div className="my-class">
  <h1>Hello</h1>
</div>
```

### 4. Conditional Rendering
Show things only if a condition is true.

```jsx
{event.description && <p>{event.description}</p>}
// Only shows the paragraph if event.description exists
```

## Tips for Learning

1. **Start small** - Understand Button.jsx first, then work your way up
2. **Read the comments** - Every file has extensive comments explaining what it does
3. **Experiment** - Try changing props and see what happens
4. **Follow the data** - Start at App.jsx and follow how data flows through components
5. **One file at a time** - Don't try to understand everything at once

## Common Patterns

### Reusable Components
```jsx
// Use the same component multiple times with different props
<Button text="Location" href={locationUrl} />
<Button text="Calendar" href={calendarUrl} />
```

### Looping Through Data
```jsx
{events.map((event, index) => (
  <EventCard key={index} event={event} index={index} />
))}
```

### Conditional Rendering
```jsx
{event.location && <Button text={event.location} />}
```

## Next Steps

1. Read through each component file, starting with Button.jsx
2. Try modifying props to see what changes
3. Add a new button or link somewhere
4. Experiment with the styling
5. Try adding a new component!

Remember: Every expert was once a beginner. Take your time and don't be afraid to experiment!
