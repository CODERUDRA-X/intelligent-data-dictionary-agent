import Dashboard from "./pages/Dashboard";
import { useApp } from "./context/ThemeAppContext";

export default function App() {
  const { theme, language, toggleTheme, changeLanguage, t } = useApp();

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "blue"
          ? "bg-blue-50 text-gray-900"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* TOP RIGHT CONTROLS */}
      <div className="flex justify-between items-center px-8 py-4 shadow-md bg-white/60 backdrop-blur-md sticky top-0 z-50">

        <h1 className="text-2xl font-bold tracking-wide animate-pulse">
          {t.title}
        </h1>

        <div className="flex gap-6">

          {/* Theme Selector */}
          <select
            onChange={(e) => toggleTheme(e.target.value)}
            className="px-4 py-2 rounded-lg shadow hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="blue">Blue</option>
          </select>

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="px-4 py-2 rounded-lg shadow hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Korean</option>
            <option>Chinese</option>
            <option>Urdu</option>
            <option>Japanese</option>
          </select>
        </div>
      </div>

      <Dashboard />
    </div>
  );
}