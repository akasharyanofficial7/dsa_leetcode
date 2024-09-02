import React, { useState, useEffect } from "react";

const App = () => {
  const [sheetData, setSheetData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    fetch("http://localhost:3000/sheets")
      .then((response) => response.json())
      .then((data) => setSheetData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sheetData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-12">
      <h2 className="text-gray-800 text-6xl text-center mt-5 py-4">FormData</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Id
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {row["First Name"]}
                </th>
                <td className="px-6 py-4">{row["Last Name"]}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {row.Gender}
                </td>
                <td className="px-6 py-4">{row["Country"]}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {row.Age}
                </td>
                <td className="px-6 py-4">{row["Date"]}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {row["Id"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <Pagination
            rowsPerPage={rowsPerPage}
            totalRows={sheetData.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ rowsPerPage, totalRows, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex list-none space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default App;
