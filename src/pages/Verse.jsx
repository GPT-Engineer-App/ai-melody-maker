import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Verse = () => {
  const [verseNarrative, setVerseNarrative] = useState("");

  const handleGenerateVerse = () => {
    // Placeholder for API call to Chosic's Music Tools
    console.log("Generating verse with narrative:", verseNarrative);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Verse</h1>
      <div className="space-y-4">
        <Textarea
          placeholder="Verse Narrative"
          value={verseNarrative}
          onChange={(e) => setVerseNarrative(e.target.value)}
        />
        <Button onClick={handleGenerateVerse}>Generate Verse</Button>
      </div>
    </div>
  );
};

export default Verse;