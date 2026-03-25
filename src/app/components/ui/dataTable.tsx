// components/ui/DataTable.tsx
"use client";

import { flexRender, Table as TanStackTable } from "@tanstack/react-table";
import { TableEmptyState } from "@/app/components/ui/tableEmptyState";

interface DataTableProps<T> {
  table: TanStackTable<T>;
  columnsCount: number;
  globalFilter: string;
}

export function DataTable<T>({ table, columnsCount, globalFilter }: DataTableProps<T>) {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-md border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-200 text-gray-600 uppercase text-xs sm:text-sm">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-4 font-bold">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b hover:bg-gray-50 transition-colors">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-4 text-gray-700 text-sm">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <TableEmptyState 
                colSpan={columnsCount} 
                message={globalFilter ? `No matches found for "${globalFilter}"` : "No existing data"} 
              />
            )}
          </tbody>
        </table>
      </div>

      {/* --- REUSABLE PAGINATION SECTION --- */}
      <div className="flex items-center justify-between px-2 text-sm text-gray-600">
        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 border rounded-md bg-white disabled:opacity-30 hover:bg-gray-50 transition-all font-medium"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 border rounded-md bg-white disabled:opacity-30 hover:bg-gray-50 transition-all font-medium"
          >
            Next
          </button>
        </div>
        <div className="font-medium">
          Page <span className="text-gray-900">{table.getState().pagination.pageIndex + 1}</span> of{" "}
          <span className="text-gray-900">{table.getPageCount()}</span>
        </div>
      </div>
    </div>
  );
}