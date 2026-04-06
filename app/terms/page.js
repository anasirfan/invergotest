import styles from '../legal.module.css';

export const metadata = { title: 'Terms & Conditions' };

export default function TermsPage() {
  return (
    <article className={styles.legal}>
      <div className={`container container--narrow`}>
        <header className={styles.header}>
          <span className="badge">Legal</span>
          <h1 className="heading-xl" style={{ marginTop: 'var(--sp-4)' }}>Terms &amp; Conditions</h1>
          <p className="text-secondary" style={{ marginTop: 'var(--sp-3)' }}>
            Last updated: January 2025
          </p>
        </header>

        <section className={styles.section}>
          <h2>Revision Policy</h2>
          <p>We practice revision depending upon the package you selected. Customers can ask us for unlimited free revisions and we will revise their design without any additional charges provided that the design and concept remains the same. 48 hours would be the Revision Turnaround Time.</p>
        </section>

        <section className={styles.section}>
          <h2>Refund Policy / Money Back Guarantee</h2>
          <p>In any event, any deposited funds for a project shall not be subject to refund after delivery if the initial design concepts are approved, or a change is requested unless InverGo Design cancels or terminates your Contract for a reason other than your breach or non-performance.</p>
          <h3>All refund requests are to be fulfilled as stated:</h3>
          <ul>
            <li>You make a request when the initial concepts for a logo are offered. Once you approve or request changes, the refund offer becomes void.</li>
            <li>Request before delivery of initial concepts: Full Refund (less 10% service fee).</li>
            <li>Request within 48 hours of initial delivery: 66% refund (less 10% service fee).</li>
            <li>Request between 48-120 hours: 33% refund (less 10% service fee).</li>
            <li>No refund after 120 hours of initial design delivery.</li>
            <li>No refund after 30 days of inactivity on your order.</li>
            <li>No refund after final files have been delivered.</li>
            <li>No refund once website development is completed or deployed live.</li>
            <li>No refund for video animation after storyboard design.</li>
            <li>SEO and social media marketing payments are non-refundable.</li>
            <li>No refund for Content Writing Packages.</li>
            <li>No refund for legal paperwork services provided.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>How to Claim Your Refund</h2>
          <p>To ensure your refund request is approved, contact us via:</p>
          <ul>
            <li>Toll free: <a href="tel:+13322494910">+1 (332) 249-4910</a></li>
            <li>Live Chat</li>
            <li>Email: <a href="mailto:sales@invergodesign.com">sales@invergodesign.com</a></li>
          </ul>
          <p>After the refund, your design rights would be obtained by InverGo Design and you would not be able to display any version of the design.</p>
        </section>

        <section className={styles.section}>
          <h2>Quality Assurance Policy</h2>
          <p>In order to provide you the desired satisfaction, our designers don&apos;t deviate from the specifications provided by you in the order form. The designs are created after thorough research which ensures the design quality and uniqueness.</p>
        </section>

        <section className={styles.section}>
          <h2>100% Satisfaction Guarantee</h2>
          <p>We rework the ordered design and keep on revising it until you are 100% satisfied (depending upon your package).</p>
        </section>

        <section className={styles.section}>
          <h2>Domain and Hosting</h2>
          <p>Domain and hosting will be provided for free with website packages, where applicable. All email accounts provided with website packages can be configured on third-party email software such as Outlook. Each email account will have 10MB of space. There is no refund for the hosting, domain or email server package.</p>
        </section>

        <section className={styles.section}>
          <h2>Delivery Policy</h2>
          <p>We deliver all our customized design orders via email within 5 to 7 days of receiving your order. We offer a RUSH DELIVERY service for first logo samples within 48 hours for an additional $100.</p>
        </section>

        <section className={styles.section}>
          <h2>Customer Support</h2>
          <p>We offer 24-Hour Customer Support to address your queries and questions. You can contact us any time and we guarantee to respond immediately.</p>
        </section>

        <section className={styles.section}>
          <h2>Communication Policy</h2>
          <p>InverGo Design is not liable for any correspondence from email addresses other than those followed by our own domain i.e. &ldquo;@invergodesign.com&rdquo; or any toll free number not mentioned on our website.</p>
        </section>

        <section className={styles.section}>
          <h2>100% Unique Design Guarantee</h2>
          <p>At InverGo Design we guarantee that all of our customers&apos; logos are made from scratch. This way you will have a logo that is tailor-made for your requirements.</p>
        </section>
      </div>
    </article>
  );
}
