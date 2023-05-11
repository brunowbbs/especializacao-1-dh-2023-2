import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Login from "./pages/login";
import Layout from "./layouts";
import MyProvider from "./contexts/MyContext";

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Route>
          {/* <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/product"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        /> */}
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
