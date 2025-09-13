export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Students</li>
        <li>Schedule</li>
        <li>Admin</li>
      </ul>
    </aside>
  );
}
