import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentsForRoundThree = () => {
  const [roundThreeStudents, setRoundThreeStudents] = useState([]);
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
  const [roundFourStudentIds, setRoundFourStudentIds] = useState([]);
  const [placedStudentIds, setPlacedStudentIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRoundThreeStudentIds =
      JSON.parse(localStorage.getItem("roundThreeStudentIds")) || [];
    const storedRoundFourStudentIds =
      JSON.parse(localStorage.getItem("roundFourStudentIds")) || [];
    const storedPlacedStudentIds =
      JSON.parse(localStorage.getItem("placedStudentIds")) || [];
    const storedStudents = [
      // Same student data as used in StudentsForRoundTwo
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
      // ... add all other students here
    ];

    const filteredStudents = storedStudents.filter((student) =>
      storedRoundThreeStudentIds.includes(student.srno)
    );
    setRoundThreeStudents(filteredStudents);
    setRoundFourStudentIds(storedRoundFourStudentIds);
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

  const handleAddStudentsToRoundFour = () => {
    const newRoundFourStudentIds = [
      ...roundFourStudentIds,
      ...selectedStudentIds,
    ];
    setRoundFourStudentIds(newRoundFourStudentIds);
    localStorage.setItem(
      "roundFourStudentIds",
      JSON.stringify(newRoundFourStudentIds)
    );
    setSelectedStudentIds([]);
  };

  const handleAddToPlaced = (studentId) => {
    const newPlacedStudentIds = [...placedStudentIds, studentId];
    setPlacedStudentIds(newPlacedStudentIds);
    localStorage.setItem(
      "placedStudentIds",
      JSON.stringify(newPlacedStudentIds)
    );
    alert("Added to placed students");
  };

  const handleDeleteFromPlaced = (studentId) => {
    const updatedPlacedStudentIds = placedStudentIds.filter(
      (id) => id !== studentId
    );
    setPlacedStudentIds(updatedPlacedStudentIds);
    localStorage.setItem(
      "placedStudentIds",
      JSON.stringify(updatedPlacedStudentIds)
    );
  };

  const handleGoBack = () => {
    navigate("/students-for-round-two");
  };

  const handleDeleteStudent = (studentId) => {
    const updatedRoundThreeStudents = roundThreeStudents.filter(
      (student) => student.srno !== studentId
    );
    setRoundThreeStudents(updatedRoundThreeStudents);
    const updatedRoundThreeStudentIds = updatedRoundThreeStudents.map(
      (student) => student.srno
    );
    localStorage.setItem(
      "roundThreeStudentIds",
      JSON.stringify(updatedRoundThreeStudentIds)
    );
    const updatedRoundFourStudentIds = roundFourStudentIds.filter(
      (id) => id !== studentId
    );
    setRoundFourStudentIds(updatedRoundFourStudentIds);
    localStorage.setItem(
      "roundFourStudentIds",
      JSON.stringify(updatedRoundFourStudentIds)
    );
    // Do not remove from placedStudentIds here
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h1 className="text-2xl font-bold">Round Three Students</h1>
        <div className="flex flex-wrap space-y-2 md:space-y-0 space-x-0 md:space-x-4">
          <Link
            to="/students-for-round-four"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto text-center"
          >
            View Round Four Students
          </Link>
          <button
            onClick={handleAddStudentsToRoundFour}
            className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 w-full md:w-auto"
          >
            Add Students for Round Four
          </button>
          <button
            onClick={handleGoBack}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full md:w-auto"
          >
            Go Back to Round Two
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-2 md:px-6 text-left">Sr. No.</th>
              <th className="py-3 px-2 md:px-6 text-left">TPO ID</th>
              <th className="py-3 px-2 md:px-6 text-left">Student Name</th>
              <th className="py-3 px-2 md:px-6 text-left">College ID</th>
              <th className="py-3 px-2 md:px-6 text-left">Branch</th>
              <th className="py-3 px-2 md:px-6 text-left">Mobile</th>
              <th className="py-3 px-2 md:px-6 text-left">Select</th>
              <th className="py-3 px-2 md:px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {roundThreeStudents.map((student) => (
              <tr key={student.srno}>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">
                  {student.srno}
                </td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">
                  {student.tpoid}
                </td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">
                  {student.name}
                </td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">
                  {student.collegeid}
                </td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">
                  {student.branch}
                </td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">
                  {student.mobile}
                </td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">
                  {roundFourStudentIds.includes(student.srno) ? (
                    <span className="text-green-600 font-semibold">
                      Added to Round Four
                    </span>
                  ) : placedStudentIds.includes(student.srno) ? (
                    <span className="text-blue-600 font-semibold">
                      Added to Placed
                    </span>
                  ) : (
                    <input
                      type="checkbox"
                      checked={selectedStudentIds.includes(student.srno)}
                      onChange={() => handleCheckboxChange(student.srno)}
                    />
                  )}
                </td>
                <td className="py-3 px-2 md:px-6 text-left whitespace-nowrap">
                  {roundFourStudentIds.includes(student.srno) ? (
                    <button
                      onClick={() => handleDeleteStudent(student.srno)}
                      className="bg-red-400 text-white py-1 px-2 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Delete
                    </button>
                  ) : placedStudentIds.includes(student.srno) ? (
                    <button
                      onClick={() => handleDeleteFromPlaced(student.srno)}
                      className="bg-red-400 text-white py-1 px-2 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Remove from Placed
                    </button>
                  ) : (
                    <React.Fragment>
                      <button
                        onClick={() => handleAddToPlaced(student.srno)}
                        className="bg-green-400 text-white py-1 px-2 rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                      >
                        Add to Placed
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.srno)}
                        className="bg-red-400 text-white py-1 px-2 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 ml-2"
                      >
                        Delete
                      </button>
                    </React.Fragment>
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

export default StudentsForRoundThree;









// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const StudentsForRoundThree = () => {
//   const [roundThreeStudents, setRoundThreeStudents] = useState([]);
//   const [selectedStudentIds, setSelectedStudentIds] = useState([]);
//   const [roundFourStudentIds, setRoundFourStudentIds] = useState([]);
//   const [placedStudentIds, setPlacedStudentIds] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedRoundThreeStudentIds =
//       JSON.parse(localStorage.getItem("roundThreeStudentIds")) || [];
//     const storedRoundFourStudentIds =
//       JSON.parse(localStorage.getItem("roundFourStudentIds")) || [];
//     const storedPlacedStudentIds =
//       JSON.parse(localStorage.getItem("placedStudentIds")) || [];
//     const storedStudents = [
//       // Same student data as used in StudentsForRoundTwo
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
//       // ... add all other students here
//     ];

//     const filteredStudents = storedStudents.filter((student) =>
//       storedRoundThreeStudentIds.includes(student.srno)
//     );
//     setRoundThreeStudents(filteredStudents);
//     setRoundFourStudentIds(storedRoundFourStudentIds);
//     setPlacedStudentIds(storedPlacedStudentIds);
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

//   const handleAddStudentsToRoundFour = () => {
//     const newRoundFourStudentIds = [
//       ...roundFourStudentIds,
//       ...selectedStudentIds,
//     ];
//     setRoundFourStudentIds(newRoundFourStudentIds);
//     localStorage.setItem(
//       "roundFourStudentIds",
//       JSON.stringify(newRoundFourStudentIds)
//     );
//     setSelectedStudentIds([]);
//   };

//   const handleAddToPlaced = (studentId) => {
//     const newPlacedStudentIds = [...placedStudentIds, studentId];
//     setPlacedStudentIds(newPlacedStudentIds);
//     localStorage.setItem(
//       "placedStudentIds",
//       JSON.stringify(newPlacedStudentIds)
//     );
//     alert("Added to placed students");
//   };

//   const handleDeleteFromPlaced = (studentId) => {
//     const updatedPlacedStudentIds = placedStudentIds.filter(
//       (id) => id !== studentId
//     );
//     setPlacedStudentIds(updatedPlacedStudentIds);
//     localStorage.setItem(
//       "placedStudentIds",
//       JSON.stringify(updatedPlacedStudentIds)
//     );
//   };

//   const handleGoBack = () => {
//     navigate("/students-for-round-two");
//   };

//   const handleDeleteStudent = (studentId) => {
//     const updatedRoundThreeStudents = roundThreeStudents.filter(
//       (student) => student.srno !== studentId
//     );
//     setRoundThreeStudents(updatedRoundThreeStudents);
//     const updatedRoundThreeStudentIds = updatedRoundThreeStudents.map(
//       (student) => student.srno
//     );
//     localStorage.setItem(
//       "roundThreeStudentIds",
//       JSON.stringify(updatedRoundThreeStudentIds)
//     );
//     const updatedRoundFourStudentIds = roundFourStudentIds.filter(
//       (id) => id !== studentId
//     );
//     setRoundFourStudentIds(updatedRoundFourStudentIds);
//     localStorage.setItem(
//       "roundFourStudentIds",
//       JSON.stringify(updatedRoundFourStudentIds)
//     );
//     // Do not remove from placedStudentIds here
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-4 flex flex-wrap">
//         <h1 className="text-2xl font-bold">Round Three Students</h1>
//         <div>
//           <Link
//             to="/students-for-round-four"
//             className="bg-blue-500 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             View Round Four Students
//           </Link>
//           <button
//             onClick={handleAddStudentsToRoundFour}
//             className="bg-red-400 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
//           >
//             Add Students for Round Four
//           </button>
//           <button
//             onClick={handleGoBack}
//             className="bg-gray-500 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
//           >
//             Go Back to Round Two
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
//               <th className="py-3 px-6 text-left">Select</th>
//               <th className="py-3 px-6 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-600 text-sm font-light">
//             {roundThreeStudents.map((student) => (
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
//                   {roundFourStudentIds.includes(student.srno) ? (
//                     <span className="text-green-600 font-semibold">
//                       Added to Round Four
//                     </span>
//                   ) : placedStudentIds.includes(student.srno) ? (
//                     <span className="text-blue-600 font-semibold">
//                       Added to Placed
//                     </span>
//                   ) : (
//                     <input
//                       type="checkbox"
//                       checked={selectedStudentIds.includes(student.srno)}
//                       onChange={() => handleCheckboxChange(student.srno)}
//                     />
//                   )}
//                 </td>
//                 <td className="py-3 px-6 text-left whitespace-nowrap">
//                   {roundFourStudentIds.includes(student.srno) ? (
//                     <button
//                       onClick={() => handleDeleteStudent(student.srno)}
//                       className="bg-red-400 text-white py-1 px-2 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
//                     >
//                       Delete
//                     </button>
//                   ) : placedStudentIds.includes(student.srno) ? (
//                     <button
//                       onClick={() => handleDeleteFromPlaced(student.srno)}
//                       className="bg-red-400 text-white py-1 px-2 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
//                     >
//                       Remove from Placed
//                     </button>
//                   ) : (
//                     <React.Fragment>
//                       <button
//                         onClick={() => handleAddToPlaced(student.srno)}
//                         className="bg-green-400 text-white py-1 px-2 rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
//                       >
//                         Add to Placed
//                       </button>
//                       <button
//                         onClick={() => handleDeleteStudent(student.srno)}
//                         className="bg-red-400 text-white py-1 px-2 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 ml-2"
//                       >
//                         Delete
//                       </button>
//                     </React.Fragment>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentsForRoundThree;














