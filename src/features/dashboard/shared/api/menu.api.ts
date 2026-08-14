import { api } from "@/libs/api";
import { DASHBOARD_ENDPOINTS } from "./menu.endpoints";

export const logout = () => {
  return api.post(`${DASHBOARD_ENDPOINTS.logout}`);
};
export const me = () => {
  return api.get(`${DASHBOARD_ENDPOINTS.me}`);
};
