import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const StudentsForRoundTwo = () => {
  const location = useLocation();
  const { studentsToAdd } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Students Selected for Round Two</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Student Name</th>
              <th className="py-3 px-6 text-left">Company</th>
              <th className="py-3 px-6 text-left">Year</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {studentsToAdd && studentsToAdd.map((student) => (
              <tr key={student.id}>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.name}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.company}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/students" className="mt-4 block text-blue-500 hover:underline">
        Back to Registered Students
      </Link>
    </div>
  );
};

export default StudentsForRoundTwo;
