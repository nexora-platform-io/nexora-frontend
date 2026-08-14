"use client";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/libs/utils/utils";
import { ROUTES } from "@/libs/routes";

import { useLogout } from "../../shared/queries/menu.mutation";

import { userMenuStyles as styles } from "./UserMenu.styles";

const user = {
  username: "qwerty",
  email: "qwerty@example.com",
  fallback: "Q",
} as const;

export function UserMenu() {
  const t = useTranslations("userMenu");
  const locale = useLocale();
  const { mutate } = useLogout();
  const router = useRouter();

  const onLogout = () => {
    mutate(undefined, {
      onSuccess: () => {
        router.push(`/${locale}${ROUTES.auth.login}`);
      },
    });
  };

  return (
    <div className={styles.root}>
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label={t("open")}
          className={styles.trigger}
        >
          <Avatar className={styles.avatar}>
            <AvatarFallback className={styles.avatarFallback}>{user.fallback}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={styles.content}
          align="end"
          sideOffset={12}
        >
          <DropdownMenuGroup>
            <DropdownMenuLabel className={styles.label}>
              <Avatar className={cn(styles.avatar, "size-10")}>
                <AvatarFallback className={styles.avatarFallback}>{user.fallback}</AvatarFallback>
              </Avatar>

              <span className={styles.userInfo}>
                <span className={styles.username}>{user.username}</span>
                <span className={styles.email}>{user.email}</span>
              </span>
            </DropdownMenuLabel>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className={styles.separator} />

          <DropdownMenuItem
            className={cn(styles.item, styles.logout)}
            onClick={() => {
              onLogout();
            }}
          >
            {t("logout")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
