import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Tables } from '../components/tables/Tables';
import { ChoosenTable } from '../components/choosenTable/ChoosenTable';
import { GuestData } from '../components/guestData/Guestdata';
import { Complete } from '../components/complete/Complete';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'tables',
        element: <Tables />,
      },
      {
        path: 'seats',
        element: <ChoosenTable />,
      },
      {
        path: 'data',
        element: <GuestData />,
      },
      {
        path: 'complete',
        element: <Complete />,
      },
    ],
  },
]);
