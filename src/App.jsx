import { useEffect, useState } from 'react';
import { fetchGoogleCalendarEvents } from './utils/fetchGoogleEvents';
import './App.css';
import bowImage from './assets/bow.png';
import mainLogo from './assets/enchanted-journal-club-logo.png';
// import kuromiImage from './assets/kuromi.png';
import bgImage from './assets/bg-image.png';

const CALENDAR_ID = 'e504dc37effc8752a1f31f55e9fdffe95862402c3d63574b689860603f068c6e@group.calendar.google.com';
const API_KEY = 'AIzaSyAU2gf_PZw2nyE1-uy2nUxNCzIdckZ68YU';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchGoogleCalendarEvents(CALENDAR_ID, API_KEY)
      .then(setEvents)
      .catch(err => console.error('Error fetching events:', err));
  }, []);

  return (
    <div className="app">
      <div className="header">
        <div className="title-group">
          {/* <img src={bowImage} alt="Bow" className="footer-bow bow" /> */}
          <img src={mainLogo} alt="Bow" className="footer-bow logo" style={{ marginBlock: "-78px" }}/>
        </div>
        <a
          href="https://www.instagram.com/enchanted.journal.club"
          target="_blank"
          rel="noopener noreferrer"
          className="top-instagram-link"
        >
          <i className="fa-brands fa-instagram instagram-icon"></i>
        </a>
      </div>

      <div className="event-list">
      {events.map((event, index) => (
          <div key={index} className="event-box" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', margin: index % 2 === 0 ? '0 14px 0 0' : '0 0 0 14px' }}>
            <div className="event-date-badge">
              <span className="event-month">{event.start.format('MMM').toUpperCase()}</span>
              <span className="event-day">{event.start.format('D')}</span>
            </div>

            <div className="event-details">
              <h2 className="event-name">{event.start.format('dddd')}</h2>
              <p className="event-time">
                {event.start.format('h:mm A')} – {event.end.format('h:mm A')}
              </p>

              {event.location && (
                <a
                  className="location-button"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {event.location.split(',')[0]}
                </a>
              )}

              <a
                className="calendar-button"
                href={event.htmlLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Calendar
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <img src={bowImage} alt="Bow" className="footer-bow bow"  />
      </footer>
    </div>
  );
}

export default App;
