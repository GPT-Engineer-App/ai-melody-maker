import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Chorus = () => {
  const [chorusTheme, setChorusTheme] = useState("");
  const [emotion, setEmotion] = useState("");

  const handleGenerateChorus = () => {
    // Placeholder for API call to Chosic's Music Tools
    console.log("Generating chorus with:", { chorusTheme, emotion });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chorus</h1>
      <div className="space-y-4">
        <Input
          placeholder="Desired Theme"
          value={chorusTheme}
          onChange={(e) => setChorusTheme(e.target.value)}
        />
        <Input
          placeholder="Emotion"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
        />
        <Button onClick={handleGenerateChorus}>Generate Chorus</Button>
      </div>
    </div>
  );
};

export default Chorus;