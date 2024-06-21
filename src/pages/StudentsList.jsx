import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const StudentsList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [students] = useState([
    {
      srno: 1,
      tpoid: "TPO123",
      name: "John Doe",
      collegeid: "C001",
      branch: "CSE",
      mobile: "1234567890",
    },
    {
      srno: 2,
      tpoid: "TPO124",
      name: "Jane Smith",
      collegeid: "C002",
      branch: "ECE",
      mobile: "0987654321",
    },
    {
      srno: 3,
      tpoid: "TPO125",
      name: "Mike Johnson",
      collegeid: "C001",
      branch: "CSE",
      mobile: "1112223334",
    },
    {
      srno: 4,
      tpoid: "TPO126",
      name: "Emily Davis",
      collegeid: "C001",
      branch: "CSE",
      mobile: "2223334445",
    },
    {
      srno: 5,
      tpoid: "TPO127",
      name: "Dale Styne",
      collegeid: "C002",
      branch: "ECE",
      mobile: "3334445556",
    },
    {
      srno: 6,
      tpoid: "TPO128",
      name: "Danish Kumar",
      collegeid: "C001",
      branch: "CSE",
      mobile: "4445556667",
    },
    {
      srno: 7,
      tpoid: "TPO129",
      name: "Sardar Paji",
      collegeid: "C001",
      branch: "CSE",
      mobile: "5556667778",
    },
    {
      srno: 8,
      tpoid: "TPO130",
      name: "Kolam Kumar",
      collegeid: "C001",
      branch: "CSE",
      mobile: "6667778889",
    },
  ]);

  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
  const [roundTwoStudentIds, setRoundTwoStudentIds] = useState([]);
  const [showCheckboxColumn, setShowCheckboxColumn] = useState(false);

  useEffect(() => {
    const storedRoundTwoStudentIds =
      JSON.parse(localStorage.getItem("roundTwoStudentIds")) || [];
    setRoundTwoStudentIds(storedRoundTwoStudentIds);
  }, []);

  const handleCheckboxChange = (studentId) => {
    if (selectedStudentIds.includes(studentId)) {
      setSelectedStudentIds(
        selectedStudentIds.filter((id) => id !== studentId)
      );
    } else {
      setSelectedStudentIds([...selectedStudentIds, studentId]);
    }
  };

  const handleAddStudentsToRoundTwo = () => {
    const newRoundTwoStudentIds = [
      ...roundTwoStudentIds,
      ...selectedStudentIds,
    ];
    setRoundTwoStudentIds(newRoundTwoStudentIds);
    localStorage.setItem(
      "roundTwoStudentIds",
      JSON.stringify(newRoundTwoStudentIds)
    );
    setSelectedStudentIds([]);
    setShowCheckboxColumn(false);
  };

  const isCheckedForRoundTwo = (studentId) => {
    return roundTwoStudentIds.includes(studentId);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4 flex flex-wrap">
        <h1 className="text-2xl font-bold mb-4">Registered Students</h1>
        <div className="">
          <Link
            to="/students-for-round-two"
            className="bg-blue-500 text-white py-2 px-4 ml-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          >
            View Round Two Students
          </Link>
          {!showCheckboxColumn && (
            <button
              onClick={() => setShowCheckboxColumn(true)}
              className="bg-red-400 text-white py-2 px-4 ml-4 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
            >
              Add Students for Round Two
            </button>
          )}
          {showCheckboxColumn && (
            <button
              onClick={handleAddStudentsToRoundTwo}
              className="bg-green-600 text-white py-2 px-4 ml-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 mb-4"
            >
              Confirm Add to Round Two
            </button>
          )}
        </div>
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
              {showCheckboxColumn && (
                <th className="py-3 px-6 text-left">Select</th>
              )}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {students.map((student) => (
              <tr key={student.srno}>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {student.srno}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {student.tpoid}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {student.name}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {student.collegeid}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {student.branch}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {student.mobile}
                </td>
                {showCheckboxColumn && (
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {isCheckedForRoundTwo(student.srno) ? (
                      "Added to Round Two"
                    ) : (
                      <input
                        type="checkbox"
                        checked={selectedStudentIds.includes(student.srno)}
                        onChange={() => handleCheckboxChange(student.srno)}
                      />
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsList;
