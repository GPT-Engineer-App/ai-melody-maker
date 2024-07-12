import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SongConcept = () => {
  const [theme, setTheme] = useState("");
  const [genre, setGenre] = useState("");
  const [targetAudience, setTargetAudience] = useState("");

  const handleGenerateConcept = () => {
    // Placeholder for API call to Chosic's Music Tools
    console.log("Generating song concept with:", { theme, genre, targetAudience });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Song Concept</h1>
      <div className="space-y-4">
        <Input
          placeholder="Theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
        <Input
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <Input
          placeholder="Target Audience"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
        />
        <Button onClick={handleGenerateConcept}>Generate Song Concept</Button>
      </div>
    </div>
  );
};

export default SongConcept;