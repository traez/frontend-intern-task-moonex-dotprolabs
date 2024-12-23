import React from 'react';

// Define the type for a single row of data
type DataRow = {
  column1: string;
  column2: string;
  column3: string;
};

// Define props interface
interface DataTableProps {
  headers: string[];
  data: DataRow[];
}

const DataTable = ({ headers, data }: DataTableProps) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow">
      <table className="w-full border-collapse bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border border-gray-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-6 py-4 text-sm text-gray-800 border border-gray-200">{row.column1}</td>
              <td className="px-6 py-4 text-sm text-gray-800 border border-gray-200">{row.column2}</td>
              <td className="px-6 py-4 text-sm text-gray-800 border border-gray-200">{row.column3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Updated Example to Comparison
export default function Comparison() {
  const headers = ["Header 1", "Header 2", "Header 3"];
  const sampleData: DataRow[] = [
    { column1: "Row 1 Data 1", column2: "Row 1 Data 2", column3: "Row 1 Data 3" },
    { column1: "Row 2 Data 1", column2: "Row 2 Data 2", column3: "Row 2 Data 3" },
    { column1: "Row 3 Data 1", column2: "Row 3 Data 2", column3: "Row 3 Data 3" },
    { column1: "Row 4 Data 1", column2: "Row 4 Data 2", column3: "Row 4 Data 3" },
    { column1: "Row 5 Data 1", column2: "Row 5 Data 2", column3: "Row 5 Data 3" },
  ];

  return <DataTable headers={headers} data={sampleData} />;
}
