import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/Main";
import SearchPage from "./pages/Search";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <Router>
      <Header>
        <SearchForm />
      </Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
