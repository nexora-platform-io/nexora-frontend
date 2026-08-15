import Link from "next/link";

import { cn } from "@/libs/utils/utils";

import { notFoundStyles as styles } from "./not-found.styles";

export default function NotFound() {
  return (
    <main className={styles.root}>
      <div aria-hidden="true" className={styles.glowOne} />
      <div aria-hidden="true" className={styles.glowTwo} />
      <section className={styles.panel} aria-labelledby="not-found-title">
        <p className={styles.code}>404</p>
        <h1 className={styles.title} id="not-found-title">
          Page not found
        </h1>
        <p className={styles.description}>
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className={styles.actions}>
          <Link className={cn(styles.button)} href="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
