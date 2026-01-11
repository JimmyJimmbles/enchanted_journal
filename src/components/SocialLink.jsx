/**
 * SOCIAL LINK COMPONENT
 * 
 * This is a REUSABLE component for social media icons.
 * We use it for Instagram, Meetup, and any other social links.
 * 
 * PROPS:
 * - url: The link to the social media page
 * - iconClass: The Font Awesome icon class (e.g., "fa-instagram" or "fa-meetup")
 * - label: A description for accessibility (what screen readers will say)
 */

const SocialLink = ({ url, iconClass, label }) => {
  /**
   * This component creates a clickable social media icon.
   * 
   * The `href` prop is the URL where the link goes.
   * The `target="_blank"` opens in a new tab.
   * The `rel="noopener noreferrer"` is for security.
   * The `aria-label` helps screen readers understand what the link does.
   * 
   * The icon uses Font Awesome classes. The `fa-brands` class is for brand icons.
   */
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="top-instagram-link"
      aria-label={label}
    >
      <i className={`fa-brands ${iconClass}`}></i>
    </a>
  );
};

// Export the component so other files can import and use it
export default SocialLink;
