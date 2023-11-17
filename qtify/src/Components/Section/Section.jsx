import React, { useState } from 'react'
import styles from './Section.module.css';
import CardGrid from '../Grid/Grid';

export default function Section(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.sectionTop}>
          <header className={styles.sectionHead}>
            {props.header}
          </header>
          <a href='#' type='button' onClick={handleToggleCollapse} className={styles.collapseBtn}>
            {isCollapsed ? 'Show All' : 'Collapse'}
          </a>
        </div>
        <div className={styles.collapsibleSection} style={{ overflow: 'hidden', height: isCollapsed ? '240px' : '536px', transition: 'height 0.5s' }}>
        <CardGrid />
        </div>
      </section>
    </div>
  )
}
