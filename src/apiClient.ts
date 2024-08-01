import WebApp from "@twa-dev/sdk";
import toast from "react-hot-toast";

const apiClient = async (url: string, options: any = {}) => {
  const baseURL = process.env.REACT_APP_API_URL || "";
  const fullUrl = `${baseURL}${url}`;
  const headers = {
    ...options.headers,
    "Content-Type": "application/json",
  };

  if (process.env.REACT_APP_ENV === "development" && !WebApp.initData) {
    headers["Authorization"] = `Bearer ${process.env.REACT_APP_DEV_TOKEN}`;
  } else {
    headers["Authorization"] = `Bearer ${WebApp.initData}`;
  }

  const fetchOptions = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(fullUrl, fetchOptions);

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);

    toast.error("Server error: " + error);

    throw error;
  }
};

export default apiClient;
