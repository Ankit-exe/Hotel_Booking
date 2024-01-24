import { BrowserRouter, Route,Routes } from "react-router-dom";
import Layout from "./layouts/Layout";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>
          <p>Home</p>
        </Layout>} />
        <Route path="/search" element={<Layout>
          <p>Search</p>
        </Layout>} />
      </Routes>
    </BrowserRouter>
  );
}