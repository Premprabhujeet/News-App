import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./config/config";
import Search from "./components/Search/Search";

function App() {
  const [language, setLanguage] = useState("en"); // Default language is English

  return (
    <>
      <Router>
        <NavBar setLanguage={setLanguage} />
        <Routes>
          {router.map((path) => (
            <Route
              exact
              key={uuidv4()}
              path={path.path}
              element={
                <News
                  key={path.key}
                  newscategory={path.category}
                  country={path.country}
                  language={language}
                />
              }
            />
          ))}
          <Route path="/search/:query" element={<Search language={language} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
