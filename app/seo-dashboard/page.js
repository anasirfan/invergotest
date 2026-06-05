import generatedPages from '@/lib/generated-pages.json';
import styles from './dashboard.module.css';

export const metadata = {
  title: 'SEO Dashboard — InverGo Design',
  robots: { index: false, follow: false },
};

export default function SEODashboard() {
  const total = generatedPages.length;

  // Group by service
  const byService = generatedPages.reduce((acc, p) => {
    acc[p.service] = (acc[p.service] || 0) + 1;
    return acc;
  }, {});

  // Group by state
  const byState = generatedPages.reduce((acc, p) => {
    acc[p.state] = (acc[p.state] || 0) + 1;
    return acc;
  }, {});

  // Total possible combinations
  const totalPossible = 40 * 8; // 40 cities × 8 services

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h1 className={styles.title}>🤖 SEO Automation Dashboard</h1>
        <p className={styles.sub}>InverGo Design — Auto-generated location pages</p>
      </div>

      {/* STATS */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statNum}>{total}</span>
          <span className={styles.statLabel}>Pages Generated</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNum}>{totalPossible - total}</span>
          <span className={styles.statLabel}>Pages Remaining</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNum}>{Math.round((total / totalPossible) * 100)}%</span>
          <span className={styles.statLabel}>Progress</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNum}>20</span>
          <span className={styles.statLabel}>Pages / Day</span>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className={styles.progressWrap}>
        <div className={styles.progressBar} style={{ width: `${(total / totalPossible) * 100}%` }} />
      </div>
      <p className={styles.progressText}>{total} of {totalPossible} total pages complete</p>

      {/* BY SERVICE */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Pages by Service</h2>
        <div className={styles.tagGrid}>
          {Object.entries(byService).sort((a,b) => b[1]-a[1]).map(([svc, count]) => (
            <div key={svc} className={styles.tag}>
              <span className={styles.tagName}>{svc}</span>
              <span className={styles.tagCount}>{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BY STATE */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Pages by State</h2>
        <div className={styles.tagGrid}>
          {Object.entries(byState).sort((a,b) => b[1]-a[1]).map(([state, count]) => (
            <div key={state} className={styles.tag}>
              <span className={styles.tagName}>{state}</span>
              <span className={styles.tagCount}>{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ALL PAGES TABLE */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>All Generated Pages ({total})</h2>
        {total === 0 ? (
          <div className={styles.empty}>
            <p>No pages generated yet. Run the GitHub Action to generate the first batch.</p>
          </div>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Page</th>
                  <th>Service</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {generatedPages.map((p, i) => (
                  <tr key={p.slug}>
                    <td>{i + 1}</td>
                    <td className={styles.slug}>{p.slug}</td>
                    <td>{p.service}</td>
                    <td>{p.city}</td>
                    <td>{p.state}</td>
                    <td>
                      <a
                        href={`https://www.invergodesign.com/${p.slug}`}
                        target="_blank"
                        rel="noopener"
                        className={styles.link}
                      >
                        View ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
