import { ExtendedError } from "../entities/classes/ExtendedError";
import { useGlobalStore } from "../store/GlobalStore";
const statusCodeErrors = [400, 404, 500];

export class ApiClient {
  private baseURL = process.env.EXPO_PUBLIC_API_URL;

  public async fetchWrapper(
    method: "GET" | "POST" | "PUT" | "DELETE",
    endpoint: string,
    data?: object | string | FormData | null
  ): Promise<any> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : null,
        credentials: "include",
      };
      let response: Response;
      response = await fetch(url, options);
      if (!response.ok) {
        const code = response.status;
        response = await response.json();
        throw new ExtendedError("Network response was not ok", response, code);
      }
      this.setErrorHandler(false);
      response = await response.json();
      return response;
    } catch (error: any) {
      if (error instanceof ExtendedError) {
        if (error.statusCode && statusCodeErrors.includes(error.statusCode)) {
          this.setErrorHandler(true);
        }
      }
      throw error;
    }
  }

  public setErrorHandler(failed: boolean = false) {
    useGlobalStore.getState().setApiConnectionFailed(failed);
  }
}
