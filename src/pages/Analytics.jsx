import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchSongMetrics } from "@/services/analytics";

const Analytics = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["songMetrics"],
    queryFn: fetchSongMetrics,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const popularityData = {
    labels: data.map((metric) => metric.timestamp),
    datasets: [
      {
        label: "Popularity",
        data: data.map((metric) => metric.popularity),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  const engagementData = {
    labels: data.map((metric) => metric.timestamp),
    datasets: [
      {
        label: "Emotional Engagement",
        data: data.map((metric) => metric.engagement),
        borderColor: "rgba(153,102,255,1)",
        backgroundColor: "rgba(153,102,255,0.2)",
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Song Metrics Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Popularity Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={popularityData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Emotional Engagement Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={engagementData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;