import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const YearDropdown = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCompany = queryParams.get("company") || "";
  const selectedTimesVisited = queryParams.get("timesVisited") || "";
  const [selectedYear, setSelectedYear] = useState(
    queryParams.get("year") || ""
  );

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    navigate(
      `/?company=${encodeURIComponent(
        selectedCompany
      )}&year=${encodeURIComponent(year)}&timesVisited=${encodeURIComponent(
        selectedTimesVisited
      )}`
    );
  };

  const yearOptions = [
    { value: "", label: "Any" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  return (
    <div>
      <label htmlFor="year" className="block text-sm font-medium text-gray-700">
        Year
      </label>
      <select
        id="year"
        name="year"
        value={selectedYear}
        onChange={handleYearChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border mb-6"
      >
        {yearOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearDropdown;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const YearDropdown = () => {
//   const navigate = useNavigate();
//   const [selectedYear, setSelectedYear] = useState("");

//   const handleYearChange = (e) => {
//     const year = e.target.value;
//     setSelectedYear(year);
//     navigate(`/?year=${encodeURIComponent(year)}`);
//   };

//   const yearOptions = [
//     { value: "", label: "Any" },
//     { value: "2018", label: "2018" },
//     { value: "2019", label: "2019" },
//     { value: "2020", label: "2020" },
//     { value: "2021", label: "2021" },
//     { value: "2022", label: "2022" },
//     { value: "2023", label: "2023" },
//   ];

//   return (
//     <div>
//       <label htmlFor="year" className="block text-sm font-medium text-gray-700">
//         Year
//       </label>
//       <select
//         id="year"
//         name="year"
//         value={selectedYear}
//         onChange={handleYearChange}
//         className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border mb-6"
//       >
//         {yearOptions.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default YearDropdown;
