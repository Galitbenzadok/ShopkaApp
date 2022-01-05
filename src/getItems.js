const getItems = async () => {
  const response = await fetch("/api/items");
  const items = await response.json();
  return items;
};

export default getItems;
