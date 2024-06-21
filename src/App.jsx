import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CompanyNameDropdown from "./components/CompanyNameDropdown";
// import YearDropdown from "./components/YearDropdown";
// import TimesVisitedDropdown from "./components/TimesVisitedDropdown";
import CompanyList from "./components/CompanyList";
import StudentsList from "./pages/StudentsList";
import StudentsForRoundTwo from "./pages/StudentsForRoundTwo";
import StudentsForRoundThree from "./pages/StudentsForRoundThree";
import StudentsForRoundFour from "./pages/StudentsForRoundFour"; // Import the new component

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 ">Company Information</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* <CompanyNameDropdown />
          <YearDropdown />
          <TimesVisitedDropdown /> */}
        </div>

        <Routes>
          <Route path="/" element={<CompanyList />} />
          <Route path="/students" element={<StudentsList />} />
          <Route
            path="/students-for-round-two"
            element={<StudentsForRoundTwo />}
          />
          <Route
            path="/students-for-round-three"
            element={<StudentsForRoundThree />}
          />
          <Route
            path="/students-for-round-four"
            element={<StudentsForRoundFour />}
          />
          {/* Add new route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
