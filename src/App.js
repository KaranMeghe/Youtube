// eslint-disable-next-line no-unused-vars
import "./App.css";
import Body from "./Component/layout/Body";
import Header from "./Component/layout/Header";
import MainContainer from "./Component/layout/MainContainer";
import WatchPage from "./Component/pages/WatchPage";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <body>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </body>
  );
}

export default App;
