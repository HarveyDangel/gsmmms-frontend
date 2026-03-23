"use client";
import React, { useState, useMemo } from "react";
import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	flexRender,
	createColumnHelper,
} from "@tanstack/react-table";


type User = {
	id: number;
	name: string;
	email: string;
	role: string;
};

const defaultData: User[] = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
	{ id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Editor" },
	{ id: 4, name: "Alice Johnson", email: "alice@example.com", role: "Editor" },
	{ id: 5, name: "Alice Johnson", email: "alice@example.com", role: "Editor" },
	{ id: 6, name: "Alice Johnson", email: "alice@example.com", role: "Editor" },
	{ id: 7, name: "Alice Johnson", email: "alice@example.com", role: "Editor" },
	{ id: 8, name: "Alice Johnson", email: "alice@example.com", role: "Editor" },
];

const columnHelper = createColumnHelper<User>();

export default function DataTable() {
	const [data] = useState(() => [...defaultData]);
	const [globalFilter, setGlobalFilter] = useState("");

	// 2. Define Columns
	const columns = useMemo(
		() => [
			columnHelper.accessor("id", { header: "ID" }),
			columnHelper.accessor("name", { header: "Name" }),
			columnHelper.accessor("email", { header: "Email" }),
			columnHelper.accessor("role", {
				header: "Role",
				cell: (info) => (
					<span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
						{info.getValue()}
					</span>
				),
			}),
		],
		[]
	);

	// 3. Initialize Table
	const table = useReactTable({
		data,
		columns,
		state: { globalFilter },
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: { pagination: { pageSize: 5 } },
	});

	return (
		<div>
			{/* Filters Header */}
			<div className="flex flex-col md:flex-row gap-4 mb-6">
				{/* Search Input */}
				<input
					value={globalFilter ?? ""}
					onChange={(e) => setGlobalFilter(e.target.value)}
					className="p-2 border border-gray-300 rounded-md w-full md:w-64 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
					placeholder="Search all..."
				/>

				{/* 4. Dropdown Filter for Role */}
				<select
					value={(table.getColumn("role")?.getFilterValue() as string) ?? ""}
					onChange={(e) =>
						table.getColumn("role")?.setFilterValue(e.target.value)
					}
					className="p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
				>
					<option value="">All Roles</option>
					<option value="Admin">Admin</option>
					<option value="Editor">Editor</option>
					<option value="User">User</option>
				</select>
			</div>
			<hr />
			<hr />
			{/* Table */}
			<div className="overflow-x-auto">
				<table className="w-full text-left border-collapse">
					<thead className="bg-green-200 text-gray-600 uppercase text-sm">
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th key={header.id} className="p-4 font-semibold">
										{flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								className="border-b hover:bg-gray-50 transition-colors"
							>
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id} className="p-4 text-gray-700">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination Controls */}
			<div className="flex items-center justify-between mt-4 text-sm text-gray-600">
				<div className="flex gap-2">
					<button
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
						className="px-3 py-1 border rounded disabled:opacity-30 hover:bg-gray-100"
					>
						Previous
					</button>
					<button
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
						className="px-3 py-1 border rounded disabled:opacity-30 hover:bg-gray-100"
					>
						Next
					</button>
				</div>
				<span>
					Page {table.getState().pagination.pageIndex + 1} of{" "}
					{table.getPageCount()}
				</span>
			</div>
		</div>
	);
}
