import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Music, FileText, Settings, Zap } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import SongConcept from "./pages/SongConcept.jsx";
import Verse from "./pages/Verse.jsx";
import Chorus from "./pages/Chorus.jsx";
import PreChorus from "./pages/PreChorus.jsx";
import Bridge from "./pages/Bridge.jsx";
import Outro from "./pages/Outro.jsx";
import Refinement from "./pages/Refinement.jsx";
import Automation from "./pages/Automation.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Song Concept",
    to: "/song-concept",
    icon: <Music className="h-4 w-4" />,
  },
  {
    title: "Verse",
    to: "/verse",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Chorus",
    to: "/chorus",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Pre-Chorus",
    to: "/pre-chorus",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Bridge",
    to: "/bridge",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Outro",
    to: "/outro",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Refinement",
    to: "/refinement",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    title: "Automation",
    to: "/automation",
    icon: <Zap className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="song-concept" element={<SongConcept />} />
              <Route path="verse" element={<Verse />} />
              <Route path="chorus" element={<Chorus />} />
              <Route path="pre-chorus" element={<PreChorus />} />
              <Route path="bridge" element={<Bridge />} />
              <Route path="outro" element={<Outro />} />
              <Route path="refinement" element={<Refinement />} />
              <Route path="automation" element={<Automation />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;