export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>please add to list</em>
      </footer>
    );
  const numLength = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numLength) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything, ready to go ✈️</em>
      ) : (
        <em>
          `💼 You have {numLength} items on your list, add you already packed
          {numPacked} (${percentage}%)`
        </em>
      )}
    </footer>
  );
}
