export const getCountryById = async (code: string, name: string) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/countries/${code}/${name}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch country data:", error);
    return null;
  }
};
