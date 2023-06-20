import { createBrowserRouter } from 'react-router-dom'

import { Registration } from '../pages/Registration'
import { Room } from '../pages/Room'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Registration />,
  },
  {
    path: '/room',
    element: <Room />,
  },
])

export { routes }
