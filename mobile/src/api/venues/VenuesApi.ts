import { IVenue } from "@/src/entities/interfaces/IVenue";
import { ApiClient } from "../apiClient";

export default class VenuesApi {
  constructor(private apiClient: ApiClient) { }

  public async getVenues(): Promise<IVenue[]> {
    return await this.apiClient.fetchWrapper("GET", "/venues");
  }
}
