import { useQuery } from "@tanstack/react-query";
import { me } from "../api/menu.api";

export const useMe = () => {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: me,
  });
};
