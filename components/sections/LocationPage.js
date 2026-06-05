import Link from 'next/link';
import styles from './LocationPage.module.css';

export default function LocationPage({ data }) {
  const { h1, city, state, service, faqs, whyUs, services: serviceList, cta, schema, intro } = data;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <span className="badge">{city}, {state}</span>
          <h1 className={`heading-xl ${styles.h1}`}>{h1}</h1>
          <p className={styles.intro}>{intro}</p>
          <div className={styles.actions}>
            <Link href="/#contact" className="btn btn--primary btn--lg">Get a Free Quote</Link>
            <Link href="/portfolio" className="btn btn--secondary btn--lg">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.h2}>Why {city} Businesses Choose InverGo Design</h2>
          <div className={styles.whyGrid}>
            {whyUs.map((item, i) => (
              <div key={i} className={styles.whyCard}>
                <span className={styles.whyIcon}>{item.icon}</span>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.h2}>{service} Services in {city}</h2>
          <div className={styles.serviceGrid}>
            {serviceList.map((s, i) => (
              <div key={i} className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className="container container--narrow">
          <h2 className={styles.h2}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{faq.q}</h3>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>{cta.title}</h2>
          <p className={styles.ctaDesc}>{cta.desc}</p>
          <Link href="/#contact" className="btn btn--primary btn--lg">{cta.button}</Link>
        </div>
      </section>
    </>
  );
}
