import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const StudentsList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [students] = useState([
    { id: 1, name: 'John Doe', company: 'Company A', year: 2023 },
    { id: 2, name: 'Jane Smith', company: 'Company B', year: 2022 },
    { id: 3, name: 'Mike Johnson', company: 'Company A', year: 2023 },
    { id: 4, name: 'Emily Davis', company: 'Company A', year: 2023 },
    { id: 5, name: 'Dale Styne', company: 'Company B', year: 2023 },
    { id: 6, name: 'Danish Kumar', company: 'Company A', year: 2023 },
    { id: 7, name: 'Sardar Paji', company: 'Company A', year: 2022 },
    { id: 8, name: 'Kolam Kumar', company: 'Company A', year: 2023 },
  ]);

  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
  const [roundTwoStudentIds, setRoundTwoStudentIds] = useState([]);

  useEffect(() => {
    const storedRoundTwoStudentIds = JSON.parse(localStorage.getItem('roundTwoStudentIds')) || [];
    setRoundTwoStudentIds(storedRoundTwoStudentIds);
  }, []);

  const handleCheckboxChange = (studentId) => {
    if (selectedStudentIds.includes(studentId)) {
      setSelectedStudentIds(selectedStudentIds.filter(id => id !== studentId));
    } else {
      setSelectedStudentIds([...selectedStudentIds, studentId]);
    }
  };

  const handleAddStudents = () => {
    const newRoundTwoStudentIds = [...roundTwoStudentIds, ...selectedStudentIds];
    setRoundTwoStudentIds(newRoundTwoStudentIds);
    localStorage.setItem('roundTwoStudentIds', JSON.stringify(newRoundTwoStudentIds));
    setSelectedStudentIds([]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Registered Students</h1>
        <div>
          <Link
            to="/students-for-round-two"
            className="bg-blue-500 text-white py-2 px-4 ml-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View Round Two Students
          </Link>
          <button
            onClick={handleAddStudents}
            className="bg-blue-500 text-white py-2 px-4 ml-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Students for Round Two
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Student Name</th>
              <th className="py-3 px-6 text-left">Company</th>
              <th className="py-3 px-6 text-left">Year</th>
              <th className="py-3 px-6 text-left">Select</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.name}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.company}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{student.year}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {roundTwoStudentIds.includes(student.id) ? (
                    <span>Added to Round Two</span>
                  ) : (
                    <input
                      type="checkbox"
                      checked={selectedStudentIds.includes(student.id)}
                      onChange={() => handleCheckboxChange(student.id)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsList;
