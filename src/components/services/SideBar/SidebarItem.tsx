import React from 'react';
import styles from './styles.module.css';
import { ServiceItem } from '@/types/serviceTypes';

interface SidebarItemProps {
  item: ServiceItem;
  expandIcon?: string | null;
  isSubItem?: boolean;
  onToggleExpand?: () => void;
  onSelect: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  expandIcon,
  isSubItem = false,
  onToggleExpand,
  onSelect
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    
    if (isSubItem) {
      onSelect();
    } else {
      onSelect();
      if (onToggleExpand) {
        onToggleExpand();
      }
    }
  };

  return (
    <div 
    className={`${styles.item} ${isSubItem ? styles.subItem : ''}`}
    onClick={handleClick}
  >
    <span className={styles.itemTitle}>{item.title}</span>
    {expandIcon && (
      <span 
        className={styles.expandIcon}
        onClick={(e) => {
          e.stopPropagation();
          if (onToggleExpand) {
            onToggleExpand();
          }
        }}
      >
        {expandIcon}
      </span>
    )}
  </div>
  );
};

export default SidebarItem;