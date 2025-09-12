export default function Reports() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Reports</h1>
      <table className="mt-4 w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Sample</td>
            <td className="border p-2">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
