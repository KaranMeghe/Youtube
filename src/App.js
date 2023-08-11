// eslint-disable-next-line no-unused-vars
import "./App.css";
import Body from "./Component/layout/Body";
import Header from "./Component/layout/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <body>
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </body>
  );
}

export default App;
