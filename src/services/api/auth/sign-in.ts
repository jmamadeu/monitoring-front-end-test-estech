import { apiInstance } from "../api-instance"

export const signIn = async (credentials: API.Auth.SignInParams) => {
  const signInResponse = await apiInstance.post<API.Auth.SignInSuccessResponse>("/login", credentials)

  return signInResponse.data
}