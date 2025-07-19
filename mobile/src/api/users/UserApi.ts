import { IAuthenticatedUser, IUser } from "@/src/entities/interfaces/IUser";
import { ApiClient } from "../apiClient";
import { IReport } from "@/src/entities/interfaces/IReport";
const BASE_ROUTE = "/users";
export default class UsersApi {
  constructor(private apiClient: ApiClient) { }

  public async test() {
    return await this.apiClient.fetchWrapper("GET", "/");
  }

  public async authenticate(user: IAuthenticatedUser): Promise<IUser> {
    return await this.apiClient.fetchWrapper(
      "POST",
      `/users/authenticate`,
      user
    );
  }

  public async getTodaysReportForVenue(
    venueId: string,
    userId: string
  ): Promise<IReport> {
    return await this.apiClient.fetchWrapper(
      "POST",
      `${BASE_ROUTE}/getTodaysReportForVenue`,
      {
        venueId,
        userId,
      }
    );
  }

  public async create(user: IUser): Promise<IUser> {
    return await this.apiClient.fetchWrapper(
      "POST",
      BASE_ROUTE + "/create",
      user
    );
  }
}
