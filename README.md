## Usage

- `git clone` the repo
- `cd` into folder
- Run `npm init -y` && `npm install`
- Run `npm run dev`

OR

- Access via [Deployed Link](https://the-awesome-nevashka-site.netlify.app/)

## Challenges and Wins

## Exercises

- Music App: Create a React Website that showcases your favourite artists songs/albums.
  - Setup your first React App using npm and Webpack.
  - Install the required libraries
  - Using JSX make your website a portfolio of their work. The site should be broken down into components that are rendered on the same page. It should contain at the very minimum two components. An example would be:
    - Their name, music type and an introduction paragraph.
    - A list of their songs/albums including name,release date and cover art.

- Add a 'Like' feature to your music page
  - Add an element eg. a button, or an icon next to each song
  - When a user clicks the element, change something about it to indicate the user has 'liked' the song
  - When a user clicks again, the element should revert back to the 'unliked' view
  - Use state to track if a track has been liked or not
  - You may create additional components to acheive this as you see fit

- Add a controlled form
  - Create a controlled form into which users can provide data
  - On submission, do something with this data

- Refactor your file structure if appropriate

- Implement props
  - pass data from a parent component to a child component
  - pass a callback function from a parent component to a child component and invoke it on an event in the child component

- Implement useEffect
  - fetch some data from an API of your choice ([lyrics.ovh](https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search) or [Bandsintown](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0#/) are two options with no required authentication or key but feel free to use any!)
  - set an interval for something to happen (it doesn't have to involve an API call - how about a background colour that changes every 30 seconds?) and make sure to clear it in a timely manner!

- Implement navigation
    - use `react-router-dom`'s `Routes`, `Route` and `NavLink` &/or `Link` components to give it at least 3 routes (one of them can be "/")
    - use `react-router-dom`'s `useNavigate` hook to one of your components and implement a 'Back' button
    - add nested routes
