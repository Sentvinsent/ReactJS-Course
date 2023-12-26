import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import EventsPage from './pages/Events';
import NewEvent from './pages/NewEvent';
import EventDetail from './pages/EventDetail';
import EditEvent from './pages/EditEvent';
import RootElement from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootElement />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'events', element: <EventsRootLayout />, children: [
            {
              path: '', element: <EventsPage />, loader: async () => {
                const response = await fetch('http://localhost:8080/events');
                if (!response.ok) {
                  //...
                } else {
                  const resData = await response.json();
                  return resData.events
                }
              }
            },
            { path: ':eventId', element: <EventDetail /> },
            { path: 'new', element: <NewEvent /> },
            { path: ':eventId/edit', element: <EditEvent /> }
          ]
        }
      ]
    }
  ]
)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
