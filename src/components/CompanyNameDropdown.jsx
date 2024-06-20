import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyNameDropdown = () => {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleCompanyChange = (e) => {
    const companyName = e.target.value;
    setSelectedCompany(companyName);
    navigate(`/?company=${encodeURIComponent(companyName)}`);
  };

  const companyOptions = [
    { value: '', label: 'Select Company' },
    { value: 'Company A', label: 'Company A' },
    { value: 'Company B', label: 'Company B' },
    // Add more companies as needed
  ];

  return (
    <div>
      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
        Company Name
      </label>
      <select
        id="companyName"
        name="companyName"
        value={selectedCompany}
        onChange={handleCompanyChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {companyOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default CompanyNameDropdown;
