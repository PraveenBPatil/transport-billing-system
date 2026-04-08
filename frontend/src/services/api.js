// 🔹 Change this URL when deploying
const BASE_URL = "http://127.0.0.1:8000";   // local backend

// const BASE_URL = "https://your-backend.onrender.com";  // 👉 use this after deployment

export const calculateBill = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/calculate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();

  } catch (error) {
    console.error("API Error:", error);
    return { error: "Something went wrong" };
  }
};