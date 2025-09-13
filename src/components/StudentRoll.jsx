export default function StudentRoll() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Student Roll</h3>
      <table className="table-auto border w-full">
        <thead>
          <tr>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Attendance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">Student 1</td>
            <td className="border px-2 py-1">✓</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
