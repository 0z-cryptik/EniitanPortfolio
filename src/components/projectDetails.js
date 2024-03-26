export const NBE_ProjectDetails = () => {
  return (
    <>
      <h2 className="text-lg font-bold border-b mb-3">About</h2>

      <p>
        This News Web App is a user-friendly web application that allows
        users to enjoy news summaries from around the world across various
        categories in their feed, users can get a general grasp of
        happenings around the world without having to read much, and should
        they come across an headline that interests them, they can click on
        the headline to read the full article.
      </p>

      <h2 className="mt-5 text-lg font-bold border-b mb-3">Features</h2>

      <ul className="list-disc ml-5">
        <li className="mb-3">
          <b>News Feed:</b> Users can stay up-to-date with news summaries
          from various sources and categories in one convenient feed.
        </li>
        <li className="mb-3">
          <b>Dark Mode and Light Mode:</b> The app offers both Dark Mode
          and Light Mode options for comfortable reading in different
          lighting conditions.
        </li>
        <li className="mb-3">
          <b>User Preference Memory:</b> The web app remembers the user's
          selected mode and automatically applies it upon their return.
        </li>
        <li>
          <b>News Search:</b> Users can search for news about topics and
          events that interests them.
        </li>
      </ul>
    </>
  );
};

export const WBE_ProjectDetails = () => {
  return (
    <>
      <h2 className="text-lg font-bold border-b mb-3">About</h2>

      <p>
        Weather By Eniitan is a simple and user-friendly web application
        that provides current weather information and weather forecasts for
        your location or any city in the world. It also allows you to
        toggle between Celsius and Fahrenheit modes, remembering your
        preference for future visits.
      </p>

      <h2 className="mt-5 text-lg font-bold border-b mb-3">Features</h2>

      <ul className="list-disc ml-5">
        <li className="mb-3">
          <b>Location-Based Weather:</b> When you grant permission to
          access your location, the app will display the current weather
          and forecasts for that location.
        </li>
        <li className="mb-3">
          <b>Default Location:</b> If you choose not to grant location
          access, or you have a setting that prevents location access, the
          app will display the current weather and forecasts for the
          default location (Accra, Ghana).
        </li>
        <li className="mb-3">
          <b>Search for Any City:</b> You can search for any city in the
          world using the search bar and you will be provided with accurate
          weather information for that city. You can also search for
          certain specific popular places.
        </li>
        <li className="mb-3">
          <b>Temperature Units Toggle:</b> The site allows you to switch
          between Celsius and Fahrenheit modes, ensuring that you see
          temperatures in your preferred unit.
        </li>
        <li>
          <b>Remembers Your Preference:</b> Your selected temperature unit
          (Celsius or Fahrenheit) will be remembered and applied every time
          you revisit the site, providing a personalized experience.
        </li>
      </ul>
    </>
  );
};
