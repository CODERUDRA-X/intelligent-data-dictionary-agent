import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const translations = {
  English: {
    title: "Intelligent Data Dictionary Agent",
    tables: "Database Tables",
    health: "Health Score",
  },
  Hindi: {
    title: "बुद्धिमान डेटा डिक्शनरी एजेंट",
    tables: "डेटाबेस टेबल्स",
    health: "स्वास्थ्य स्कोर",
  },
  Korean: {
    title: "지능형 데이터 사전 에이전트",
    tables: "데이터베이스 테이블",
    health: "건강 점수",
  },
  Chinese: {
    title: "智能数据字典代理",
    tables: "数据库表",
    health: "健康评分",
  },
  Urdu: {
    title: "ذہین ڈیٹا ڈکشنری ایجنٹ",
    tables: "ڈیٹا بیس ٹیبلز",
    health: "صحت اسکور",
  },
  Japanese: {
    title: "インテリジェントデータディクショナリエージェント",
    tables: "データベーステーブル",
    health: "ヘルススコア",
  },
};

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  const toggleTheme = (value) => setTheme(value);
  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <AppContext.Provider
      value={{
        theme,
        language,
        toggleTheme,
        changeLanguage,
        t: translations[language],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);