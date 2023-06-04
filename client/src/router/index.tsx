import { createBrowserRouter } from 'react-router-dom'
import { Registration } from '../pages/Registration'
import { Room } from '../pages/Room'
import App from '../App'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/room',
        element: <Room />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
    ],
  },
])

export { routes }
