import { ReactNode } from "react";

interface Column<T> {
  key: keyof T; // Key from the data row
  label: string; // Header text for the column
}

interface TableProps<T> {
  data: T[]; // Array of data rows
  columns: Column<T>[]; // Array of column definitions
  tFooter?: ReactNode;
}

export const Table = <T extends object>({
  data,
  columns,
  tFooter,
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="border border-gray-300 px-4 py-2 text-left"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className="border border-gray-300 px-4 py-2"
                >
                  {row[column.key] as ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {tFooter && <tfoot>{tFooter}</tfoot>}
        {/* <tfoot className="bg-gray-200">
          <tr>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2 text-right">
              Sum:{" "}
            </td>
            <td className="border border-gray-300 px-4 py-2">20</td>
            <td className="border border-gray-300 px-4 py-2">150</td>
            <td className="border border-gray-300 px-4 py-2">150</td>
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
};
