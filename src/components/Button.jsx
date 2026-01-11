/**
 * BUTTON COMPONENT
 * 
 * This is a REUSABLE component. That means we can use it multiple times
 * with different text, links, and styles.
 * 
 * PROPS (short for "properties"):
 * Props are like arguments you pass to a function, but for React components.
 * They let you customize how a component looks or behaves.
 * 
 * This Button component accepts these props:
 * - text: The text that appears on the button
 * - href: The URL the button links to (where it goes when clicked)
 * - className: CSS class name for styling (optional)
 */

const Button = ({ text, href, className = '' }) => {
  /**
   * This component returns a clickable link that looks like a button.
   * 
   * The `href` prop tells the browser where to go when clicked.
   * The `target="_blank"` opens the link in a new tab.
   * The `rel="noopener noreferrer"` is a security feature for external links.
   * The `className` prop lets us add custom CSS styling.
   */
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {text}
    </a>
  );
};

// Export the component so other files can import and use it
export default Button;
