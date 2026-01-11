/**
 * CONSTANTS FILE
 * 
 * This file stores all the configuration values that don't change.
 * Keeping them in one place makes it easy to update them later.
 * 
 * In React, we use UPPERCASE names for constants to make them easy to spot.
 */

// The Google Calendar ID - this tells the API which calendar to fetch events from
export const CALENDAR_ID = 'e504dc37effc8752a1f31f55e9fdffe95862402c3d63574b689860603f068c6e@group.calendar.google.com';

// The Google Calendar API Key - this is like a password that lets us access the calendar
// NOTE: In a real production app, you'd want to hide this in an environment variable
export const API_KEY = 'AIzaSyAU2gf_PZw2nyE1-uy2nUxNCzIdckZ68YU';

// Social media links - these are used in the Header component
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/enchanted.journal.club',
  meetup: 'https://www.meetup.com/austin-enchanted-journal-club-meetup/'
};
