import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TimesVisitedDropdown = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCompany = queryParams.get("company") || "";
  const selectedYear = queryParams.get("year") || "";
  const [selectedTimesVisited, setSelectedTimesVisited] = useState(
    queryParams.get("timesVisited") || ""
  );

  const handleTimesChange = (e) => {
    const timesVisited = e.target.value;
    setSelectedTimesVisited(timesVisited);
    navigate(
      `/?company=${encodeURIComponent(
        selectedCompany
      )}&year=${encodeURIComponent(
        selectedYear
      )}&timesVisited=${encodeURIComponent(timesVisited)}`
    );
  };

  const timesVisitedOptions = [
    { value: "", label: "Any" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  return (
    <div className="m-3">
      <label
        htmlFor="timesVisited"
        className="block text-sm font-medium text-gray-700"
      >
        Times Visited
      </label>
      <select
        id="timesVisited"
        name="timesVisited"
        value={selectedTimesVisited}
        onChange={handleTimesChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border mb-6"
      >
        {timesVisitedOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimesVisitedDropdown;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const TimesVisitedDropdown = () => {
//   const navigate = useNavigate();
//   const [selectedTimesVisited, setSelectedTimesVisited] = useState("");

//   const handleTimesChange = (e) => {
//     const timesVisited = e.target.value;
//     setSelectedTimesVisited(timesVisited);
//     navigate(`/?timesVisited=${encodeURIComponent(timesVisited)}`);
//   };

//   const timesVisitedOptions = [
//     { value: "", label: "Any" },
//     { value: "1", label: "1" },
//     { value: "2", label: "2" },
//     { value: "3", label: "3" },
//     { value: "4", label: "4" },
//   ];

//   return (
//     <div>
//       <label
//         htmlFor="timesVisited"
//         className="block text-sm font-medium text-gray-700"
//       >
//         Times Visited
//       </label>
//       <select
//         id="timesVisited"
//         name="timesVisited"
//         value={selectedTimesVisited}
//         onChange={handleTimesChange}
//         className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border mb-6"
//       >
//         {timesVisitedOptions.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default TimesVisitedDropdown;
