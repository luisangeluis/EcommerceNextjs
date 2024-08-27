const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getCategories = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/v1/categories`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getCategories;