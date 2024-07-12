import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Outro = () => {
  const [outroTheme, setOutroTheme] = useState("");

  const handleGenerateOutro = () => {
    // Placeholder for API call to Chosic's Music Tools
    console.log("Generating outro with theme:", outroTheme);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Outro</h1>
      <div className="space-y-4">
        <Input
          placeholder="Outro Theme"
          value={outroTheme}
          onChange={(e) => setOutroTheme(e.target.value)}
        />
        <Button onClick={handleGenerateOutro}>Generate Outro</Button>
      </div>
    </div>
  );
};

export default Outro;