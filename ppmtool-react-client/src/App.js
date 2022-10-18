import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/UpdateProject";
import { createBrowserHistory } from "history";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/addProject" element={<AddProject />} />
            <Route
              exact
              path="/updateProject/:id"
              element={<UpdateProject />}
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
