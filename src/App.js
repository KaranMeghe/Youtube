// eslint-disable-next-line no-unused-vars
import "./App.css";
import Body from "./Component/layout/Body";
import Header from "./Component/layout/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <body>
        <Header />
        <Body />
      </body>
    </Provider>
  );
}

export default App;
