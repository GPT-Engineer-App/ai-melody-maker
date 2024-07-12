export const fetchSongMetrics = async () => {
  const response = await fetch("https://api.thirdparty.com/song-metrics", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch song metrics");
  }

  const data = await response.json();
  return data.metrics;
};