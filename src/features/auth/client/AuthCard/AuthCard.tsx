import Link from "next/link";
import { useLocale } from "next-intl";
import type { ReactNode } from "react";

import { cn } from "@/libs/utils";

import { authStyles as styles } from "./AuthCard.styles";

type AuthPageFrameProps = {
  eyebrow: string;
  title: string;
  description: string;
  footerText: string;
  footerHref: string;
  footerLinkText: string;
  children: ReactNode;
};

export function AuthPageFrame({
  eyebrow,
  title,
  description,
  footerText,
  footerHref,
  footerLinkText,
  children,
}: AuthPageFrameProps) {
  const locale = useLocale();

  return (
    <main className={styles.shell}>
      <div aria-hidden="true" className={styles.glow} />
      <div aria-hidden="true" className={styles.glowAlt} />
      <section className={styles.card} aria-labelledby="auth-title">
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title} id="auth-title">
          {title}
        </h1>
        <p className={styles.copy}>{description}</p>
        <div className={styles.body}>{children}</div>
        <p className={styles.foot}>
          <span>{footerText}</span>{" "}
          <Link className={cn(styles.link)} href={`/${locale}${footerHref}`}>
            {footerLinkText}
          </Link>
        </p>
      </section>
    </main>
  );
}
