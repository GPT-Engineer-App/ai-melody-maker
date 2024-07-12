import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [theme, setTheme] = useState("");
  const [genre, setGenre] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [melody, setMelody] = useState("");

  const handleGenerateLyrics = () => {
    // Placeholder for API call to generate lyrics
    console.log("Generating lyrics with:", { theme, genre, targetAudience });
    setLyrics("Generated lyrics based on the provided theme, genre, and target audience.");
  };

  const handleGenerateMelody = () => {
    // Placeholder for API call to generate melody
    console.log("Generating melody with:", { theme, genre, targetAudience });
    setMelody("Generated melody based on the provided theme, genre, and target audience.");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Music Composition Tool</h1>
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
        <Button onClick={handleGenerateLyrics}>Generate Lyrics</Button>
        <Textarea
          placeholder="Generated Lyrics"
          value={lyrics}
          readOnly
        />
        <Button onClick={handleGenerateMelody}>Generate Melody</Button>
        <Textarea
          placeholder="Generated Melody"
          value={melody}
          readOnly
        />
      </div>
    </div>
  );
};

export default Index;