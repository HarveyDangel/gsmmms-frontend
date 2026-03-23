"use client";

import Card from "./ui/card";
import React, { useState, useMemo } from "react";
import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	flexRender,
	createColumnHelper,
} from "@tanstack/react-table";
import { Child, children } from "@/app/data/children";

const columnHelper = createColumnHelper<Child>();
const defaultData: Child[] = [...children];

export default function ChildrenList() {
	const [data] = useState(() => [...defaultData]);
	const [globalFilter, setGlobalFilter] = useState("");

	// 2. Define Columns
	const columns = useMemo(
		() => [
			columnHelper.accessor("id", { header: "ID", enableGlobalFilter: false }),
			columnHelper.accessor("nameOfChild", {
				header: "Name of Child",
				enableGlobalFilter: true,
			}),
			columnHelper.accessor("nameOfCaregiver", {
				header: "Name of Caregiver",
				enableGlobalFilter: false,
			}),
			columnHelper.accessor("belongToIP", {
				header: "Belong to IP",
				enableGlobalFilter: false,
			}),
			columnHelper.accessor("sex", {
				header: "Sex",
				enableGlobalFilter: false,
			}),
			columnHelper.accessor("dateOfBirth", {
				header: "Date of Birth",
				enableGlobalFilter: false,
			}),
			columnHelper.accessor("dateMeasured", {
				header: "Date Measured",
				enableGlobalFilter: false,
			}),
			columnHelper.accessor("ageInMonths", {
				header: "Age in Months",
				enableGlobalFilter: false,
			}),
			columnHelper.accessor("weight", {
				header: "Weight",
				enableGlobalFilter: false,
			}),
			columnHelper.accessor("height", {
				header: "Height",
				enableGlobalFilter: false,
			}),
			columnHelper.accessor("nutritionalStatusWFA", {
				header: "Nutritional Status WFA",
				enableGlobalFilter: false,
			}),
			columnHelper.accessor("nutritionalStatusHFA", {
				header: "Nutritional Status HFA",
				enableGlobalFilter: false,
			}),
			columnHelper.accessor("nutritionalStatusWFH", {
				header: "Nutritional Status WFH",
				enableGlobalFilter: false,
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
		<>
			<Card className="p-4">
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
						value={
							(table.getColumn("belongToIP")?.getFilterValue() as string) ?? ""
						}
						onChange={(e) =>
							table.getColumn("belongToIP")?.setFilterValue(e.target.value)
						}
						className="p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
					>
						<option value="none" disabled>
							Belong to IP
						</option>
						<option value="">All</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
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
							{table.getRowModel().rows.length > 0 ? (
								table.getRowModel().rows.map((row) => (
									<tr
										key={row.id}
										className="border-b hover:bg-gray-50 transition-colors"
									>
										{row.getVisibleCells().map((cell) => (
											<td key={cell.id} className="p-4 text-gray-700">
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</td>
										))}
									</tr>
								))
							) : (
								<tr>
									<td
										colSpan={columns.length}
										className="p-10 text-center text-gray-500 italic bg-gray-50"
									>
										No matches found for "{globalFilter}"
									</td>
								</tr>
							)}
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
			</Card>
		</>
	);
}
