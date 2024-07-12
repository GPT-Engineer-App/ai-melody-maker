import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import supabase from "@/integrations/supabase";

const Automation = () => {
  const [eventTriggers, setEventTriggers] = useState("");
  const [actions, setActions] = useState("");

  const { mutate: setupAutomation, isLoading, error } = useMutation({
    mutationFn: async ({ eventTriggers, actions }) => {
      const { data, error } = await supabase
        .from("automations")
        .insert([{ event_triggers: eventTriggers, actions }]);
      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: (data) => {
      console.log("Automation setup successfully:", data);
    },
  });

  const handleSetupAutomation = () => {
    setupAutomation({ eventTriggers, actions });
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
        <Button onClick={handleSetupAutomation} disabled={isLoading}>
          {isLoading ? "Setting up..." : "Setup Automation"}
        </Button>
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    </div>
  );
};

export default Automation;