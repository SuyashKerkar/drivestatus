import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StudentsForRoundTwo = () => {
  const [roundTwoStudents, setRoundTwoStudents] = useState([]);

  useEffect(() => {
    const storedRoundTwoStudentIds = JSON.parse(localStorage.getItem('roundTwoStudentIds')) || [];
    const storedStudents = [
      { id: 1, name: 'John Doe', company: 'Company A', year: 2023 },
      { id: 2, name: 'Jane Smith', company: 'Company B', year: 2022 },
      { id: 3, name: 'Mike Johnson', company: 'Company A', year: 2023 },
      { id: 4, name: 'Emily Davis', company: 'Company A', year: 2023 },
      { id: 5, name: 'Dale Styne', company: 'Company B', year: 2023 },
      { id: 6, name: 'Danish Kumar', company: 'Company A', year: 2023 },
      { id: 7, name: 'Sardar Paji', company: 'Company A', year: 2022 },
      { id: 8, name: 'Kolam Kumar', company: 'Company A', year: 2023 },
    ];
    const roundTwoStudentsData = storedStudents.filter(student => storedRoundTwoStudentIds.includes(student.id));
    setRoundTwoStudents(roundTwoStudentsData);
  }, []);

  const handleRemoveStudent = (studentId) => {
    const updatedRoundTwoStudents = roundTwoStudents.filter(student => student.id !== studentId);
    setRoundTwoStudents(updatedRoundTwoStudents);
    const updatedRoundTwoStudentIds = updatedRoundTwoStudents.map(student => student.id);
    localStorage.setItem('roundTwoStudentIds', JSON.stringify(updatedRoundTwoStudentIds));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Students Selected for Round Two</h1>
        <Link
          to="/students"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back to Registered Students
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Student Name</th>
              <th className="py-3 px-6 text-left">Company</th>
              <th className="py-3 px-6 text-left">Year</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {roundTwoStudents.map((student) => (
              <tr key={student.id}>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.name}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.company}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.year}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <button
                    onClick={() => handleRemoveStudent(student.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsForRoundTwo;
