import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentsForRoundFour = () => {
  const [roundFourStudents, setRoundFourStudents] = useState([]);
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
  const [placedStudentIds, setPlacedStudentIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRoundFourStudentIds =
      JSON.parse(localStorage.getItem("roundFourStudentIds")) || [];
    const storedPlacedStudentIds =
      JSON.parse(localStorage.getItem("placedStudentIds")) || [];
    const storedStudents = [
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
    ];
    const filteredStudents = storedStudents.filter((student) =>
      storedRoundFourStudentIds.includes(student.srno)
    );
    setRoundFourStudents(filteredStudents);
    setPlacedStudentIds(storedPlacedStudentIds);
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

  const handleAddStudentsToPlaced = () => {
    const newPlacedStudentIds = [
      ...placedStudentIds,
      ...selectedStudentIds,
    ];
    setPlacedStudentIds(newPlacedStudentIds);
    localStorage.setItem(
      "placedStudentIds",
      JSON.stringify(newPlacedStudentIds)
    );
    setSelectedStudentIds([]);
  };

  const handleGoToPlacedStudents = () => {
    navigate("/placed-students");
  };

  const handleDeleteStudent = (studentId) => {
    const updatedRoundFourStudents = roundFourStudents.filter(
      (student) => student.srno !== studentId
    );
    setRoundFourStudents(updatedRoundFourStudents);
    const updatedRoundFourStudentIds = updatedRoundFourStudents.map(
      (student) => student.srno
    );
    localStorage.setItem(
      "roundFourStudentIds",
      JSON.stringify(updatedRoundFourStudentIds)
    );
    const updatedPlacedStudentIds = placedStudentIds.filter(
      (id) => id !== studentId
    );
    setPlacedStudentIds(updatedPlacedStudentIds);
    localStorage.setItem(
      "placedStudentIds",
      JSON.stringify(updatedPlacedStudentIds)
    );
  };

  const isAddedToPlaced = (studentId) => placedStudentIds.includes(studentId);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4 flex flex-wrap">
        <h1 className="text-2xl font-bold">Round Four Students</h1>
        <div>
          <Link
            to="/placed-students"
            className="bg-blue-500 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500 inline-block"
          >
            Go to Placed Students
          </Link>
          <button
            onClick={handleAddStudentsToPlaced}
            className="bg-red-400 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 inline-block"
          >
            Add Students to Placed
          </button>
          <Link
            to="/students-for-round-three"
            className="bg-gray-500 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 inline-block"
          >
            View Round Three Students
          </Link>
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
              <th className="py-3 px-6 text-left">Select for Placed</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {roundFourStudents.map((student) => (
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
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {isAddedToPlaced(student.srno) ? (
                    <span>Added to Placed</span>
                  ) : (
                    <input
                      type="checkbox"
                      checked={selectedStudentIds.includes(student.srno)}
                      onChange={() => handleCheckboxChange(student.srno)}
                    />
                  )}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <button
                    onClick={() => handleDeleteStudent(student.srno)}
                    className="bg-red-400 text-white py-1 px-2 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
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

export default StudentsForRoundFour;









// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const StudentsForRoundFour = () => {
//   const [roundFourStudents, setRoundFourStudents] = useState([]);
//   const [selectedStudentIds, setSelectedStudentIds] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedRoundFourStudentIds =
//       JSON.parse(localStorage.getItem("roundFourStudentIds")) || [];
//     const storedStudents = [
//       {
//         srno: 1,
//         tpoid: "TPO123",
//         name: "John Doe",
//         collegeid: "C001",
//         branch: "CSE",
//         mobile: "1234567890",
//       },
//       {
//         srno: 2,
//         tpoid: "TPO124",
//         name: "Jane Smith",
//         collegeid: "C002",
//         branch: "ECE",
//         mobile: "0987654321",
//       },
//       {
//         srno: 3,
//         tpoid: "TPO125",
//         name: "Mike Johnson",
//         collegeid: "C001",
//         branch: "CSE",
//         mobile: "1112223334",
//       },
//       {
//         srno: 4,
//         tpoid: "TPO126",
//         name: "Emily Davis",
//         collegeid: "C001",
//         branch: "CSE",
//         mobile: "2223334445",
//       },
//       {
//         srno: 5,
//         tpoid: "TPO127",
//         name: "Dale Styne",
//         collegeid: "C002",
//         branch: "ECE",
//         mobile: "3334445556",
//       },
//       {
//         srno: 6,
//         tpoid: "TPO128",
//         name: "Danish Kumar",
//         collegeid: "C001",
//         branch: "CSE",
//         mobile: "4445556667",
//       },
//       {
//         srno: 7,
//         tpoid: "TPO129",
//         name: "Sardar Paji",
//         collegeid: "C001",
//         branch: "CSE",
//         mobile: "5556667778",
//       },
//       {
//         srno: 8,
//         tpoid: "TPO130",
//         name: "Kolam Kumar",
//         collegeid: "C001",
//         branch: "CSE",
//         mobile: "6667778889",
//       },
//     ];
//     const filteredStudents = storedStudents.filter((student) =>
//       storedRoundFourStudentIds.includes(student.srno)
//     );
//     setRoundFourStudents(filteredStudents);
//   }, []);

//   const handleCheckboxChange = (studentId) => {
//     if (selectedStudentIds.includes(studentId)) {
//       setSelectedStudentIds(
//         selectedStudentIds.filter((id) => id !== studentId)
//       );
//     } else {
//       setSelectedStudentIds([...selectedStudentIds, studentId]);
//     }
//   };

//   const handleGoBackToRoundThree = () => {
//     navigate("/students-for-round-three");
//   };

//   const handleDeleteStudent = (studentId) => {
//     const updatedRoundFourStudents = roundFourStudents.filter(
//       (student) => student.srno !== studentId
//     );
//     setRoundFourStudents(updatedRoundFourStudents);
//     const updatedRoundFourStudentIds = updatedRoundFourStudents.map(
//       (student) => student.srno
//     );
//     localStorage.setItem(
//       "roundFourStudentIds",
//       JSON.stringify(updatedRoundFourStudentIds)
//     );
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-4 flex flex-wrap">
//         <h1 className="text-2xl font-bold">Round Four Students</h1>
//         <div>
//           <button
//             onClick={handleGoBackToRoundThree}
//             className="bg-gray-500 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
//           >
//             Go Back to Round Three Students
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
//               <th className="py-3 px-6 text-left">Sr. No.</th>
//               <th className="py-3 px-6 text-left">TPO ID</th>
//               <th className="py-3 px-6 text-left">Student Name</th>
//               <th className="py-3 px-6 text-left">College ID</th>
//               <th className="py-3 px-6 text-left">Branch</th>
//               <th className="py-3 px-6 text-left">Mobile</th>
//               <th className="py-3 px-6 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-600 text-sm font-light">
//             {roundFourStudents.map((student) => (
//               <tr key={student.srno}>
//                 <td className="py-3 px-6 text-left whitespace-nowrap">
//                   {student.srno}
//                 </td>
//                 <td className="py-3 px-6 text-left whitespace-nowrap">
//                   {student.tpoid}
//                 </td>
//                 <td className="py-3 px-6 text-left whitespace-nowrap">
//                   {student.name}
//                 </td>
//                 <td className="py-3 px-6 text-left whitespace-nowrap">
//                   {student.collegeid}
//                 </td>
//                 <td className="py-3 px-6 text-left whitespace-nowrap">
//                   {student.branch}
//                 </td>
//                 <td className="py-3 px-6 text-left whitespace-nowrap">
//                   {student.mobile}
//                 </td>
//                 <td className="py-3 px-6 text-left whitespace-nowrap">
//                   <button
//                     onClick={() => handleDeleteStudent(student.srno)}
//                     className="bg-red-400 text-white py-1 px-2 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentsForRoundFour;
