import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import { fetchLyrics, fetchMelody } from "@/services/chosic";

const Index = () => {
  const [theme, setTheme] = useState("");
  const [genre, setGenre] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [melody, setMelody] = useState("");

  const { data: lyricsData, refetch: refetchLyrics } = useQuery({
    queryKey: ["lyrics", { theme, genre, targetAudience }],
    queryFn: () => fetchLyrics({ theme, genre, targetAudience }),
    enabled: false,
  });

  const { data: melodyData, refetch: refetchMelody } = useQuery({
    queryKey: ["melody", { theme, genre, targetAudience }],
    queryFn: () => fetchMelody({ theme, genre, targetAudience }),
    enabled: false,
  });

  const handleGenerateLyrics = () => {
    refetchLyrics();
  };

  const handleGenerateMelody = () => {
    refetchMelody();
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
          value={lyricsData || lyrics}
          readOnly
        />
        <Button onClick={handleGenerateMelody}>Generate Melody</Button>
        <Textarea
          placeholder="Generated Melody"
          value={melodyData || melody}
          readOnly
        />
      </div>
    </div>
  );
};

export default Index;