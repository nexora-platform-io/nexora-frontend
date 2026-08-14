import { api } from "@/libs/api";
import type { LoginDto, RegisterDto } from "../schemas/auth.schema";
import { AUTH_ENDPOINTS } from "./auth.endpoints";

export const login = (data: LoginDto) => {
  return api.post(`${AUTH_ENDPOINTS.login}`, data);
};
export const register = (data: RegisterDto) => {
  return api.post(`${AUTH_ENDPOINTS.register}`, data);
};
