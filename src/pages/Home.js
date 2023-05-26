import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>This is the home Page</h1>
      <p>Go to the <Link to="/about">About page</Link> for info about me.</p>
    </>
  )
}

export default Home
