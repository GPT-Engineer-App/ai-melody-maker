import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Bridge = () => {
  const [secondVerseTheme, setSecondVerseTheme] = useState("");
  const [bridgeTheme, setBridgeTheme] = useState("");

  const handleGenerateBridge = () => {
    // Placeholder for API call to Chosic's Music Tools
    console.log("Generating bridge with:", { secondVerseTheme, bridgeTheme });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bridge</h1>
      <div className="space-y-4">
        <Input
          placeholder="Second Verse Theme"
          value={secondVerseTheme}
          onChange={(e) => setSecondVerseTheme(e.target.value)}
        />
        <Input
          placeholder="Bridge Theme"
          value={bridgeTheme}
          onChange={(e) => setBridgeTheme(e.target.value)}
        />
        <Button onClick={handleGenerateBridge}>Generate Bridge</Button>
      </div>
    </div>
  );
};

export default Bridge;