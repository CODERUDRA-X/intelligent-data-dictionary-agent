import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TableDetails from "../components/TableDetails";
import HealthCard from "../components/HealthCard";
import ChatPanel from "../components/ChatPanel";
// Naye API functions import kiye
import { fetchTables, fetchSchema, analyzeTableWithAI } from "../services/api";

export default function Dashboard() {
  const [tables, setTables] = useState([]);
  const [activeTable, setActiveTable] = useState("");
  const [currentData, setCurrentData] = useState({ columns: [], health: null });
  const [loading, setLoading] = useState(true);

  // 1. Initial Load: Backend se tables ki list laao
  useEffect(() => {
    const loadTables = async () => {
      const fetchedTables = await fetchTables();
      setTables(fetchedTables);
      if (fetchedTables.length > 0) setActiveTable(fetchedTables[0]);
    };
    loadTables();
  }, []);

  // 2. Table Change: Jab active table badle, uska data laao
  useEffect(() => {
    if (!activeTable) return;

    const fetchDetails = async () => {
      setLoading(true);
      // Schema aur AI analysis dono ek sath fetch karo
      const [schemaRes, aiRes] = await Promise.all([
        fetchSchema(activeTable),
        analyzeTableWithAI(activeTable)
      ]);

      // AI data ko purane format ke sath map kiya
      const healthData = aiRes?.ai_analysis ? {
        score: aiRes.ai_analysis.health_score,
        status: aiRes.ai_analysis.health_score >= 80 ? "success" : "warning",
        summary: aiRes.ai_analysis.business_summary
      } : { score: 0, status: "error", summary: "Failed to load AI insights" };

      setCurrentData({
        columns: schemaRes?.columns || [],
        health: healthData
      });
      setLoading(false);
    };

    fetchDetails();
  }, [activeTable]);

  return (
    <div className="min-h-screen bg-gray-100 flex p-8 gap-6">
      {/* Sidebar wahi purana, bas tables ka array pass kiya */}
      <Sidebar
        tables={tables}
        activeTable={activeTable}
        onChange={setActiveTable}
      />

      <div className="flex-1 space-y-6">
        {loading ? (
          <div className="flex items-center justify-center h-full text-xl font-bold text-gray-500 animate-pulse">
            Fetching Live Data from DataSentinel AI...
          </div>
        ) : (
          <>
            {/* Components ko real data pass kiya */}
            <TableDetails tableName={activeTable} data={currentData} />
            <HealthCard health={currentData.health} />
            <ChatPanel tableName={activeTable} />
          </>
        )}
      </div>
    </div>
  );
}