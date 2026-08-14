"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterDto } from "../../shared/schemas/auth.schema";
import { ROUTES } from "@/libs/routes";

import { useRegister } from "../../shared/queries/auth.mutations";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthError } from "../../server/AuthError/AuthError";
import { AuthPageFrame } from "../AuthCard";

import { registerStyles as styles } from "./RegisterForm.styles";

export function RegisterForm() {
  const t = useTranslations("auth");
  const { mutate, isError, isPending } = useRegister();

  const onSubmit = (data: RegisterDto) => {
    mutate(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <AuthPageFrame
      eyebrow={t("brand")}
      title={t("register.title")}
      description={t("register.description")}
      footerText={t("register.footerText")}
      footerHref={ROUTES.auth.login}
      footerLinkText={t("register.footerLink")}
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className={styles.field}
          htmlFor="register-username"
        >
          <span className={styles.label}>{t("register.username")}</span>
          <Input
            id="register-username"
            type="text"
            placeholder={t("register.usernamePlaceholder")}
            autoComplete="username"
            {...register("username")}
          />
          {errors.username && <AuthError text={errors.username.message ?? "Username is invalid"} />}
        </label>

        <label
          className={styles.field}
          htmlFor="register-email"
        >
          <span className={styles.label}>{t("register.email")}</span>
          <Input
            id="register-email"
            type="email"
            placeholder={t("register.emailPlaceholder")}
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && <AuthError text={errors.email.message ?? "Email is invalid"} />}
        </label>

        <label
          className={styles.field}
          htmlFor="register-password"
        >
          <span className={styles.label}>{t("register.password")}</span>
          <Input
            id="register-password"
            type="password"
            placeholder={t("register.passwordPlaceholder")}
            autoComplete="new-password"
            {...register("password")}
          />
          {errors.password && <AuthError text={errors.password.message ?? "Password is invalid"} />}
        </label>

        {isError && <p className={""}>Login failed</p>}

        <Button
          className={styles.submit}
          type="submit"
        >
          {isPending ? t("register.submitting") : t("register.submit")}
        </Button>
      </form>
    </AuthPageFrame>
  );
}
