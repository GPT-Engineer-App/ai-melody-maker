import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import { fetchLyrics, fetchMelody } from "@/services/chosic";
import { Link } from "react-router-dom";

const Index = () => {
  const [theme, setTheme] = useState("");
  const [genre, setGenre] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [melody, setMelody] = useState("");

  const { data: lyricsData, refetch: refetchLyrics, isLoading: isLoadingLyrics, error: errorLyrics } = useQuery({
    queryKey: ["lyrics", { theme, genre, targetAudience }],
    queryFn: () => fetchLyrics({ theme, genre, targetAudience }),
    enabled: false,
  });

  const { data: melodyData, refetch: refetchMelody, isLoading: isLoadingMelody, error: errorMelody } = useQuery({
    queryKey: ["melody", { theme, genre, targetAudience }],
    queryFn: () => fetchMelody({ theme, genre, targetAudience }),
    enabled: false,
  });

  useEffect(() => {
    if (lyricsData) {
      setLyrics(lyricsData);
    }
  }, [lyricsData]);

  useEffect(() => {
    if (melodyData) {
      setMelody(melodyData);
    }
  }, [melodyData]);

  const handleGenerateLyrics = () => {
    refetchLyrics();
  };

  const handleGenerateMelody = () => {
    refetchMelody();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Music Composition Tool</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/song-concept" className="text-blue-500 hover:underline">Song Concept</Link>
          </li>
          <li>
            <Link to="/verse" className="text-blue-500 hover:underline">Verse</Link>
          </li>
          <li>
            <Link to="/chorus" className="text-blue-500 hover:underline">Chorus</Link>
          </li>
          <li>
            <Link to="/pre-chorus" className="text-blue-500 hover:underline">Pre-Chorus</Link>
          </li>
          <li>
            <Link to="/bridge" className="text-blue-500 hover:underline">Bridge</Link>
          </li>
          <li>
            <Link to="/outro" className="text-blue-500 hover:underline">Outro</Link>
          </li>
          <li>
            <Link to="/refinement" className="text-blue-500 hover:underline">Refinement</Link>
          </li>
          <li>
            <Link to="/automation" className="text-blue-500 hover:underline">Automation</Link>
          </li>
        </ul>
      </nav>
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
        <Button onClick={handleGenerateLyrics} disabled={isLoadingLyrics}>
          {isLoadingLyrics ? "Generating Lyrics..." : "Generate Lyrics"}
        </Button>
        {errorLyrics && <p className="text-red-500">{errorLyrics.message}</p>}
        <Textarea
          placeholder="Generated Lyrics"
          value={lyrics}
          readOnly
        />
        <Button onClick={handleGenerateMelody} disabled={isLoadingMelody}>
          {isLoadingMelody ? "Generating Melody..." : "Generate Melody"}
        </Button>
        {errorMelody && <p className="text-red-500">{errorMelody.message}</p>}
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