import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <>
      <Link to="/room">
        <h1>room</h1>
      </Link>
      <Link to="/">
        <h1>Início</h1>
      </Link>
    </>
  )
}

export { Registration }
