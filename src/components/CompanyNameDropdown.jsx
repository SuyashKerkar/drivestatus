import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CompanyNameDropdown = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedYear = queryParams.get("year") || "";
  const selectedTimesVisited = queryParams.get("timesVisited") || "";
  const [selectedCompany, setSelectedCompany] = useState(
    queryParams.get("company") || ""
  );

  const handleCompanyChange = (e) => {
    const companyName = e.target.value;
    setSelectedCompany(companyName);
    navigate(
      `/?company=${encodeURIComponent(companyName)}&year=${encodeURIComponent(
        selectedYear
      )}&timesVisited=${encodeURIComponent(selectedTimesVisited)}`
    );
  };

  const companyOptions = [
    { value: "", label: "Select Company" },
    { value: "Company A", label: "Company A" },
    { value: "Company B", label: "Company B" },
    { value: "Company C", label: "Company C" },
    { value: "Company D", label: "Company D" },
  ];

  return (
    <div className="m-3">
      <label
        htmlFor="companyName"
        className="block text-sm font-medium text-gray-700"
      >
        Company Name
      </label>
      <select
        id="companyName"
        name="companyName"
        value={selectedCompany}
        onChange={handleCompanyChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border mb-6"
      >
        {companyOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanyNameDropdown;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CompanyNameDropdown = () => {
//   const navigate = useNavigate();
//   const [selectedCompany, setSelectedCompany] = useState("");

//   const handleCompanyChange = (e) => {
//     const companyName = e.target.value;
//     setSelectedCompany(companyName);
//     navigate(`/?company=${encodeURIComponent(companyName)}`);
//   };

//   const companyOptions = [
//     { value: "", label: "Select Company" },
//     { value: "Company A", label: "Company A" },
//     { value: "Company B", label: "Company B" },
//     { value: "Company C", label: "Company C" },
//     { value: "Company D", label: "Company D" },
//   ];

//   return (
//     <div>
//       <label
//         htmlFor="companyName"
//         className="block text-sm font-medium text-gray-700"
//       >
//         Company Name
//       </label>
//       <select
//         id="companyName"
//         name="companyName"
//         value={selectedCompany}
//         onChange={handleCompanyChange}
//         className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border mb-6"
//       >
//         {companyOptions.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default CompanyNameDropdown;
