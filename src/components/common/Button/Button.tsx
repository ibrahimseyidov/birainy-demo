import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  icon?: 'phone' | 'eye' | 'arrow' | null;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  icon = null,
  onClick
}) => {
  const getIconComponent = () => {
    switch (icon) {
      case 'phone':
        return <span className={styles.icon}>📞</span>;
      case 'eye':
        return <span className={styles.icon}>👁️</span>;
      case 'arrow':
        return <span className={styles.icon}>→</span>;
      default:
        return null;
    }
  };

  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {icon && getIconComponent()}
      <span className={styles.text}>{children}</span>
    </button>
  );
};

export default Button;