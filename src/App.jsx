import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./layout";
import { Home, Portfolio, About } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
