import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StudentsForRoundTwo = () => {
  const [roundTwoStudents, setRoundTwoStudents] = useState([]);

  useEffect(() => {
    const storedRoundTwoStudentIds = JSON.parse(localStorage.getItem('roundTwoStudentIds')) || [];
    const storedStudents = [
      { srno: 1, tpoid: 'TPO123', name: 'John Doe', collegeid: 'C001', branch: 'CSE', mobile: '1234567890' },
      { srno: 2, tpoid: 'TPO124', name: 'Jane Smith', collegeid: 'C002', branch: 'ECE', mobile: '0987654321' },
      { srno: 3, tpoid: 'TPO125', name: 'Mike Johnson', collegeid: 'C001', branch: 'CSE', mobile: '1112223334' },
      { srno: 4, tpoid: 'TPO126', name: 'Emily Davis', collegeid: 'C001', branch: 'CSE', mobile: '2223334445' },
      { srno: 5, tpoid: 'TPO127', name: 'Dale Styne', collegeid: 'C002', branch: 'ECE', mobile: '3334445556' },
      { srno: 6, tpoid: 'TPO128', name: 'Danish Kumar', collegeid: 'C001', branch: 'CSE', mobile: '4445556667' },
      { srno: 7, tpoid: 'TPO129', name: 'Sardar Paji', collegeid: 'C001', branch: 'CSE', mobile: '5556667778' },
      { srno: 8, tpoid: 'TPO130', name: 'Kolam Kumar', collegeid: 'C001', branch: 'CSE', mobile: '6667778889' },
    ];
    const roundTwoStudentsData = storedStudents.filter(student => storedRoundTwoStudentIds.includes(student.srno));
    setRoundTwoStudents(roundTwoStudentsData);
  }, []);

  const handleRemoveStudent = (studentId) => {
    const updatedRoundTwoStudents = roundTwoStudents.filter(student => student.srno !== studentId);
    setRoundTwoStudents(updatedRoundTwoStudents);
    const updatedRoundTwoStudentIds = updatedRoundTwoStudents.map(student => student.srno);
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
          Back to Students List
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Sr. No.</th>
              <th className="py-3 px-6 text-left">TPO ID</th>
              <th className="py-3 px-6 text-left">Student Name</th>
              <th className="py-3 px-6 text-left">College ID</th>
              <th className="py-3 px-6 text-left">Branch</th>
              <th className="py-3 px-6 text-left">Mobile</th>
              <th className="py-3 px-6 text-left">Remove</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {roundTwoStudents.map(student => (
              <tr key={student.srno}>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.srno}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.tpoid}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.name}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.collegeid}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.branch}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.mobile}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <button
                    onClick={() => handleRemoveStudent(student.srno)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Remove
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
