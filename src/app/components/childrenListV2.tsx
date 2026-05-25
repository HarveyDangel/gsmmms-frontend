'use client';

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
import { DataTable } from "@/app/components/ui/dataTable";


export default function ChildrenList() {
   const [data] = useState(() => [...children]);
   const [globalFilter, setGlobalFilter] = useState("");

   // ... columns definition stays the same ...

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
      <Card className="p-6">
         {/* Filters Area */}
         <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input 
               value={globalFilter} 
               onChange={e => setGlobalFilter(e.target.value)} 
               placeholder="Search by child name..." 
               className="p-2 border rounded-md w-64 outline-none focus:ring-2 focus:ring-green-500"
            />
            {/* You could add your Dropdown here too */}
         </div>

         {/* All Table UI + Empty State + Pagination is now inside this one line */}
         <DataTable 
            table={table} 
            columnsCount={columns.length} 
            globalFilter={globalFilter} 
         />
      </Card>
   );
}