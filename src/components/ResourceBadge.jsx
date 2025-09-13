export default function ResourceBadge({ text = "Missed" }) {
  return (
    <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
      {text}
    </span>
  );
}
