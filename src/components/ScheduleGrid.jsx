export default function ScheduleGrid() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Weekly Schedule</h3>
      <div className="grid grid-cols-7 gap-2">
        <div className="p-2 bg-blue-100 text-center">Mon</div>
        <div className="p-2 bg-blue-100 text-center">Tue</div>
        <div className="p-2 bg-blue-100 text-center">Wed</div>
        <div className="p-2 bg-blue-100 text-center">Thu</div>
        <div className="p-2 bg-blue-100 text-center">Fri</div>
        <div className="p-2 bg-blue-100 text-center">Sat</div>
        <div className="p-2 bg-blue-100 text-center">Sun</div>
      </div>
    </div>
  );
}
