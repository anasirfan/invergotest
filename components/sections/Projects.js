'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/content';
import styles from './Projects.module.css';

export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - windowHeight;

    if (scrollableDistance <= 0) return;

    const scrolled = -rect.top;

    if (scrolled <= 0) {
      track.style.transform = 'translateX(0)';
      setActiveIdx(0);
      return;
    }

    if (scrolled >= scrollableDistance) {
      const maxShift = track.scrollWidth - track.parentElement.clientWidth;
      track.style.transform = `translateX(${-maxShift}px)`;
      setActiveIdx(projects.length - 1);
      return;
    }

    const progress = scrolled / scrollableDistance;
    const maxShift = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
    const shift = progress * maxShift;

    track.style.transform = `translateX(${-shift}px)`;

    const cardEls = track.children;
    if (cardEls.length === 0) return;

    let closestIdx = 0;
    const viewportCenter = track.parentElement.clientWidth / 2;

    for (let i = 0; i < cardEls.length; i++) {
      const cardLeft = cardEls[i].offsetLeft - shift;
      const cardCenter = cardLeft + cardEls[i].offsetWidth / 2;
      if (cardCenter < viewportCenter + cardEls[i].offsetWidth / 2) {
        closestIdx = i;
      }
    }

    setActiveIdx(closestIdx);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className={styles.section} id="projects">
      <div className={styles.sticky}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarLabel}>Portfolio</div>
          <h2 className={styles.sidebarTitle}>projects</h2>
          <ul className={styles.projectNames}>
            {projects.map((p, i) => (
              <li key={i} className={i === activeIdx ? styles.nameActive : ''}>
                {p.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.viewport}>
          <div className={styles.track} ref={trackRef}>
            {projects.map((project, i) => (
              <div key={i} className={styles.card}>
                {project.external ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <img src={project.image} alt={project.name} loading="lazy" />
                    <div className={styles.cardBtn}>VIEW PROJECT</div>
                  </a>
                ) : (
                  <Link href={project.url} className={styles.link}>
                    <img src={project.image} alt={project.name} loading="lazy" />
                    <div className={styles.cardBtn}>VIEW PROJECT</div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
