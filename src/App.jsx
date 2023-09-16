import { Route, Routes } from "react-router-dom";
import Home from "./Screen/HomeScreen/Home";
import { Layout } from "./Screen/Layout/Layout";
import Login from "./Screen/UserScreen/Login";
import Register from "./Screen/UserScreen/Register";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/user/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/user/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
