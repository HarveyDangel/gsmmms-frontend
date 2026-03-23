"use client";
import React, { useMemo } from 'react';
import { userData } from '@/app/data/users'; // Adjust path based on your setup

export default function ReportPage() {
  // Now calculate your totals using the imported data
  const reportTotals = useMemo(() => {
    return {
      total: userData.length,
      admins: userData.filter(u => u.role === 'Admin').length,
      editors: userData.filter(u => u.role === 'Editor').length,
      users: userData.filter(u => u.role === 'User').length,
    };
  }, []); // Empty dependency array because userData is a static import

  return (
    <>
       <h1 className="text-xl font-bold">System Overview</h1>
       <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="p-4 bg-white shadow rounded-lg">
            <p className="text-gray-500">Total Admins</p>
            <p className="text-2xl font-bold">{reportTotals.admins}</p>
          </div>
          {/* Repeat for other stats... */}
       </div>
    </>
  );
}