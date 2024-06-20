import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const YearDropdown = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    navigate(`/?year=${encodeURIComponent(year)}`);
  };

  const yearOptions = [
    { value: '', label: 'Any' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    // Add more years as needed
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
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {yearOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default YearDropdown;
