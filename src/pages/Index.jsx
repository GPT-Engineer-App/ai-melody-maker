import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import { fetchLyrics, fetchMelody } from "@/services/chosic";
import { Link } from "react-router-dom";
import shareIcon from "/images/share-icon.png";
import embedIcon from "/images/embed-icon.png";
import newsletterIcon from "/images/newsletter-icon.png";

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
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Share and Embed this Tool</h2>
        <div className="flex space-x-4">
          <Button>
            <img src={shareIcon} alt="Share" className="h-6 w-6 mr-2" />
            Share
          </Button>
          <Button>
            <img src={embedIcon} alt="Embed" className="h-6 w-6 mr-2" />
            Embed
          </Button>
        </div>
        <div className="mt-4">
          <Textarea
            placeholder="Embed Code"
            value={`<iframe src="${window.location.href}" width="600" height="400"></iframe>`}
            readOnly
          />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <div className="flex space-x-4">
          <Input placeholder="Your Email" />
          <Button>
            <img src={newsletterIcon} alt="Subscribe" className="h-6 w-6 mr-2" />
            Subscribe
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-md">
            <p>"This tool has revolutionized my music composition process!" - User A</p>
          </div>
          <div className="p-4 border rounded-md">
            <p>"I can't believe how easy it is to create amazing music with this tool." - User B</p>
          </div>
          <div className="p-4 border rounded-md">
            <p>"A must-have for any music creator!" - User C</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Features Overview</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Generate lyrics and melodies based on your input</li>
          <li>Share and embed your compositions easily</li>
          <li>Subscribe to our newsletter for updates</li>
          <li>Read testimonials from satisfied users</li>
        </ul>
      </div>
      <div className="mt-8">
        <Button className="w-full py-4 text-xl">
          Get Started Now
        </Button>
      </div>
    </div>
  );
};

export default Index;