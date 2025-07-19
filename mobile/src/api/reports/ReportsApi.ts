import { IStartReportInitData } from "@/src/entities/interfaces/Shared";
import { ApiClient } from "../apiClient";
import { IReport } from "@/src/entities/interfaces/IReport";
const BASE_ENDPOINT = "/reports";

export default class ReportsApi {
  constructor(private apiClient: ApiClient) { }

  public async startReport(data: IStartReportInitData) {
    return await this.apiClient.fetchWrapper(
      "POST",
      BASE_ENDPOINT + "/startReport",
      data
    );
  }

  public async updateReport(data: IReport) {
    return await this.apiClient.fetchWrapper(
      "POST",
      BASE_ENDPOINT + "/updateReport",
      data
    );
  }

  public async getReport(venueId: string) {
    return await this.apiClient.fetchWrapper(
      "POST",
      BASE_ENDPOINT + "/getReport",
      {
        venueId,
      }
    );
  }
}
