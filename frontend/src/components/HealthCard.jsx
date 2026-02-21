export default function HealthCard({ health }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <h2 className="text-xl font-semibold mb-4">
        Health Score
      </h2>
      <p className="text-5xl font-bold text-green-600 animate-bounce">
        {health.score}
      </p>
       <p className="text-gray-500 mt-2">
        Schema quality is good.
      </p>
    </div>
  );
}