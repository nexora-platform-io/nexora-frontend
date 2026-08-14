"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginDto } from "../../shared/schemas/auth.schema";
import { ROUTES } from "@/libs/routes";

import { useLogin } from "../../shared/queries/auth.mutations";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthPageFrame } from "../AuthCard";
import { loginStyles as styles } from "./LoginForm.styles";

export function LoginForm() {
  const t = useTranslations("auth");
  const router = useRouter();
  const { mutate, isError, isPending } = useLogin();
  const { register, handleSubmit } = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginDto) => {
    mutate(data, {
      onSuccess: () => {
        router.push(`${ROUTES.dashboard}`);
      },
    });
  };

  return (
    <AuthPageFrame
      eyebrow={t("brand")}
      title={t("login.title")}
      description={t("login.description")}
      footerText={t("login.footerText")}
      footerHref={ROUTES.auth.register}
      footerLinkText={t("login.footerLink")}
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className={styles.field}
          htmlFor="login-email"
        >
          <span className={styles.label}>{t("login.email")}</span>
          <Input
            id="login-email"
            type="email"
            placeholder={t("login.emailPlaceholder")}
            autoComplete="email"
            {...register("email")}
          />
        </label>

        <label
          className={styles.field}
          htmlFor="login-password"
        >
          <span className={styles.label}>{t("login.password")}</span>
          <Input
            id="login-password"
            type="password"
            placeholder={t("login.passwordPlaceholder")}
            autoComplete="current-password"
            {...register("password")}
          />
        </label>

        {isError && <p className={""}>Login failed</p>}

        <Button
          className={styles.submit}
          type="submit"
        >
          {isPending ? t("login.submitting") : t("login.submit")}
        </Button>
      </form>
    </AuthPageFrame>
  );
}
