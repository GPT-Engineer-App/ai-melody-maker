export const fetchLyrics = async ({ theme, genre, targetAudience }) => {
  const response = await fetch("https://api.chosic.com/lyrics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ theme, genre, targetAudience }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch lyrics");
  }

  const data = await response.json();
  return data.lyrics;
};

export const fetchMelody = async ({ theme, genre, targetAudience }) => {
  const response = await fetch("https://api.chosic.com/melody", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ theme, genre, targetAudience }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch melody");
  }

  const data = await response.json();
  return data.melody;
};