import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppContent from "./AppContent";

function App() {
  return (
    <Router basename="/my-portfolio">
      <Routes>
        <Route path="/" element={<Navigate to="/fr" replace />} />
        <Route path="/fr" element={<AppContent lang="fr" />} />
        <Route path="/en" element={<AppContent lang="en" />} />
      </Routes>
    </Router>
  );
}

export default App;
