export const getContent = async () => {
  const res = await fetch(`/data/content.json`); 
  if (!res.ok) throw new Error("Failed to fetch content");
  return res.json();
};
