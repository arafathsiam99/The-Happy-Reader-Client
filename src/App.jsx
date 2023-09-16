import { Route, Routes } from "react-router-dom";
import Home from "./Screen/HomeScreen/Home";

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
      </Routes>
    </>
  );
}

export default App;
