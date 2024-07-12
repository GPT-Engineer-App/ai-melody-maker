import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Automation = () => {
  const [eventTriggers, setEventTriggers] = useState("");
  const [actions, setActions] = useState("");

  const handleSetupAutomation = () => {
    // Placeholder for API call to automation platform
    console.log("Setting up automation with:", { eventTriggers, actions });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Automation</h1>
      <div className="space-y-4">
        <Input
          placeholder="Event Triggers"
          value={eventTriggers}
          onChange={(e) => setEventTriggers(e.target.value)}
        />
        <Input
          placeholder="Actions"
          value={actions}
          onChange={(e) => setActions(e.target.value)}
        />
        <Button onClick={handleSetupAutomation}>Setup Automation</Button>
      </div>
    </div>
  );
};

export default Automation;