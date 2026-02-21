export default function TableDetails({ tableName, data }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">
        Table: {tableName}
      </h3>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Column</th>
            <th className="p-3 border">Type</th>
          </tr>
        </thead>
        <tbody>
          {data.columns.map((col, index) => (
            <tr key={index}>
              <td className="p-3 border">{col.name}</td>
              <td className="p-3 border">{col.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}