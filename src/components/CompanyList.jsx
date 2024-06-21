import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CompanyList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const companies = [
    { id: 1, name: "Company A", year: 2023, timesVisited: 2 },
    { id: 2, name: "Company B", year: 2022, timesVisited: 3 },
    { id: 3, name: "Company C", year: 2021, timesVisited: 1 },
    { id: 4, name: "Company A", year: 2024, timesVisited: 1 },
    { id: 5, name: "Company B", year: 2018, timesVisited: 2 },
    { id: 6, name: "Company D", year: 2020, timesVisited: 1 },
  ];

  const queryParams = new URLSearchParams(location.search);
  const selectedCompany = queryParams.get("company");
  const selectedYear = queryParams.get("year");
  const selectedTimesVisited = queryParams.get("timesVisited");

  const filteredCompanies = companies.filter((company) => {
    return (
      (!selectedCompany || company.name === selectedCompany) &&
      (!selectedYear || company.year === parseInt(selectedYear)) &&
      (!selectedTimesVisited ||
        company.timesVisited === parseInt(selectedTimesVisited))
    );
  });

  const handleShowStudents = (company) => {
    navigate(
      `/students?company=${encodeURIComponent(company.name)}&year=${
        company.year
      }&timesVisited=${company.timesVisited}`
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Company Name</th>
            <th className="py-3 px-6 text-left">Year</th>
            <th className="py-3 px-6 text-left">Times Visited</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {filteredCompanies.map((company) => (
            <tr key={company.id}>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {company.name}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {company.year}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {company.timesVisited}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleShowStudents(company)}
                >
                  Show Registered Students
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
