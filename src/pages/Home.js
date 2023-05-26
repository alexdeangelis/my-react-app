import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  function navigateHandler() {
    navigate('/about')
  }

  return (
    <>
      <h1>This is the home Page</h1>
      <p>
        Go to the <Link to='/about'>About page</Link> for info about me.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  )
}

export default Home
