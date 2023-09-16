import { Route, Routes } from "react-router-dom";
import Home from "./Screen/HomeScreen/Home";
import { Layout } from "./Screen/Layout/Layout";
import Login from "./Screen/UserScreen/Login";
import Register from "./Screen/UserScreen/Register";
import { PrivateRouter } from "./Route/PrivateRouter";
import Manage from "./Screen/Manage/Manage";
import WishList from "./Screen/WishList/WishList";

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
        <Route
          path="/user/manage"
          element={
            <Layout>
              <PrivateRouter>
                <Manage />
              </PrivateRouter>
            </Layout>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Layout>
              <PrivateRouter>
                <WishList />
              </PrivateRouter>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
