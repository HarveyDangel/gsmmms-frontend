export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-white rounded-lg shadow">Card Count</div>
        <div className="p-4 bg-white rounded-lg shadow">Graph</div>
      </div>
    </div>
  );
}
