import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import supabase from "./integrations/supabase/index.js";

const SupabaseProvider = ({ children }) => {
  return (
    <supabase.Provider value={supabase}>
      {children}
    </supabase.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SupabaseProvider>
      <App />
    </SupabaseProvider>
  </React.StrictMode>,
);