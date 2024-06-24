import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';

const PlacedStudents = () => {
  const [placedStudents, setPlacedStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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
      storedPlacedStudentIds.includes(student.srno)
    );
    setPlacedStudents(filteredStudents);
  }, []);

  const handleGoBackToRoundFour = () => {
    navigate("/students-for-round-four");
  };

  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(placedStudents);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Placed Students");
    XLSX.writeFile(workbook, "PlacedStudents.xlsx");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDownload = () => {
    handleDownloadExcel();
    closeModal();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h1 className="text-2xl font-bold">Placed Students</h1>
        <div>
          <button
            onClick={handleGoBackToRoundFour}
            className="bg-gray-500 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            View Round Four Students
          </button>
          <button
            onClick={openModal}
            className="bg-green-500 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Download Excel
          </button>
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
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {placedStudents.map((student) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-6 rounded-lg z-10">
            <h2 className="text-lg font-bold mb-4">Confirm Download</h2>
            <p className="mb-4">Are you sure you want to download the Excel file?</p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white py-2 px-4 mr-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={confirmDownload}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacedStudents;







// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import * as XLSX from 'xlsx';

// const PlacedStudents = () => {
//   const [placedStudents, setPlacedStudents] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedPlacedStudentIds =
//       JSON.parse(localStorage.getItem("placedStudentIds")) || [];
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
//       storedPlacedStudentIds.includes(student.srno)
//     );
//     setPlacedStudents(filteredStudents);
//   }, []);

//   const handleGoBackToRoundFour = () => {
//     navigate("/students-for-round-four");
//   };

//   const handleDownloadExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(placedStudents);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Placed Students");
//     XLSX.writeFile(workbook, "PlacedStudents.xlsx");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-4  flex-wrap">
//         <h1 className="text-2xl font-bold">Placed Students</h1>
//         <div>
//           <button
//             onClick={handleGoBackToRoundFour}
//             className="bg-gray-500 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
//           >
//             View Round Four Students
//           </button>
//           <button
//             onClick={handleDownloadExcel}
//             className="bg-green-500 text-white py-2 px-4 ml-4 mb-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             Download Excel
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
//             </tr>
//           </thead>
//           <tbody className="text-gray-600 text-sm font-light">
//             {placedStudents.map((student) => (
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
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PlacedStudents;
