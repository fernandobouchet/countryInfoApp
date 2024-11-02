export const getAllCountries = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/countries`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return null;
  }
};
