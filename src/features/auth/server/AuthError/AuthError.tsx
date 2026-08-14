import { authErrorStyles as styles } from './AuthError.styles';

type AuthErrorProps = {
  text: string;
};

export function AuthError({ text }: AuthErrorProps) {
  return <p className={styles.root}>{text}</p>;
}
