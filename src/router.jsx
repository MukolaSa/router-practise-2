import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <Weather />,
        path: '/Weather',
        children: [{
            element: <Chart/>,
            path: '/weather/:weatherId/hourly'
        },
        {
            element: <WeekForecastlocationAPI/>,
            path: '/weather/:weatherId/weekly'
        },
        {
            element: <MoreInfoChartComponent/>,
            path: '/weather/:weatherId/more'
        }],

      },
      {
        path: '/about-us',
        element: <AboutUs/>,
      },
    ],
  },
]);
