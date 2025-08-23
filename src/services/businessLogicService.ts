import { ListPayload } from "../models/ListPayload";

class BusinessLogicService {
  apiBaseUrl: string;
  constructor(baseUrl: string) {
    this.apiBaseUrl = baseUrl;
  }
  async listByQuery(payload: ListPayload) {
    console.log("listByQuery", payload);
    try {
      const res = await fetch(
        `${this.apiBaseUrl}${payload.route}/readByQuery`, 
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      return await res.json();
    } catch (error) {
      console.error("API error:", error);
      throw error;
    }
  }
}

// Export a ready-to-use instance
const apiBaseUrl = "http://localhost:3001/ESB"; // adjust if deployed
export const businessLogicService = new BusinessLogicService(apiBaseUrl);
