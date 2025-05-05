'use client';
import React from 'react';
import styles from './styles.module.css';
import { useServiceData } from '@/hooks/useServiceData';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
  const { 
    services, 
    handleSetActiveSection,
    handleSetActiveService, 
    getExpandIcon 
  } = useServiceData();

  return (
    <aside className={styles.sidebar}>
      {services.map((service) => (
        <div key={service.id}>
          <SidebarItem 
            item={service}
            expandIcon={getExpandIcon(service)}
            onToggleExpand={() => handleSetActiveSection(service.id)}
            onSelect={() => handleSetActiveSection(service.id)}
          />
          
          {service.isExpanded && service.children && service.children.length > 0 && (
            <div className={styles.subItems}>
              {service.children.map((child) => (
                <SidebarItem
                  key={child.id}
                  item={child}
                  isSubItem={true}
                  onSelect={() => handleSetActiveService(child.id)}
                  />
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;