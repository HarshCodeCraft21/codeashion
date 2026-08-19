import { Routes, Route } from "react-router-dom";
import IndexPage from "./routes/index";
import AboutPage from "./routes/about";
import PortfolioPage from "./routes/portfolio";
import ProcessPage from "./routes/process";
import TechnologiesPage from "./routes/technologies";
import ContactPage from "./routes/contact";
import VerifyPage from "./routes/verify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/technologies" element={<TechnologiesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/verify" element={<VerifyPage />} />
    </Routes>
  );
}

export default App;
