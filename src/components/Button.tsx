import styles from './Button.module.css'

type ButtonProps = {
  children?: React.ReactNode;
  variant?: string;
  onClick?: () => void;
  href?: string;
  btnType?: 'button' | 'link';
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, variant, onClick, btnType, ...rest }: ButtonProps) {

    
  if (btnType === 'button') {
    return (
      <button
        className={`${styles.button} ${variant ? styles[variant] : ''}`}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }

  if (btnType === 'link') {
    return (
      <a
        className={`${styles.button} ${variant ? styles[variant] : ''}`}
        href={rest.href}
        // target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return null;

}
