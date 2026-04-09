const BASE_URL = "https://praveenpatil7799.pythonanywhere.com";

export const calculateBill = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/calculate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    return result;

  } catch (error) {
    console.error("API Error:", error);
    return { error: "Failed to connect to backend" };
  }
};