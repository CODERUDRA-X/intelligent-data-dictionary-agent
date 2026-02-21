// Tera backend FastAPI yahan chal raha hai
const BASE_URL = 'http://127.0.0.1:8000';

// 1. Backend se saari Asli Tables mangwane ke liye
export const fetchTables = async () => {
    try {
        const response = await fetch(`${BASE_URL}/tables`);
        return await response.json(); // Ye ['customers', 'orders', ...] dega
    } catch (error) {
        console.error("Tables fetch error:", error);
        return [];
    }
};

// 2. Kisi table ke columns (Schema) mangwane ke liye
export const fetchSchema = async (tableName) => {
    try {
        const response = await fetch(`${BASE_URL}/schema/${tableName}`);
        return await response.json(); 
    } catch (error) {
        console.error("Schema fetch error:", error);
        return null;
    }
};

// 3. The MVP: AI Analysis mangwane ke liye (Tera working endpoint)
export const analyzeTableWithAI = async (tableName) => {
    try {
        const response = await fetch(`${BASE_URL}/analyze-ai/${tableName}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        return await response.json(); // Ye tera Business Summary aur Health score dega
    } catch (error) {
        console.error("AI Analysis error:", error);
        return null;
    }
};