import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { IncomePage } from "pages/IncomePage";
import { GroupPage } from "pages/GroupsPage";
import ErrorPage from "pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="income/:id" element={<IncomePage />} />
        <Route path="group/*" element={<GroupPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
