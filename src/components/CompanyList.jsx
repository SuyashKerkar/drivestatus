import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const CompanyList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Example companies data (replace with actual data fetching)
  const companies = [
    { id: 1, name: 'Company A', year: 2023, timesVisited: 2 },
    { id: 2, name: 'Company B', year: 2022, timesVisited: 3 },
    // Add more companies as needed
  ];

  const queryParams = new URLSearchParams(location.search);
  const selectedCompany = queryParams.get('company');
  const selectedYear = queryParams.get('year');

  const handleShowStudents = (company) => {
    navigate(`/students?company=${encodeURIComponent(company.name)}&year=${company.year}`);
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
          {companies.map((company) => (
            <tr key={company.id}>
              <td className="py-3 px-6 text-left whitespace-nowrap">{company.name}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{company.year}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{company.timesVisited}</td>
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
