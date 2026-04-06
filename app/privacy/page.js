import styles from '../legal.module.css';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <article className={styles.legal}>
      <div className={`container container--narrow`}>
        <header className={styles.header}>
          <span className="badge">Legal</span>
          <h1 className="heading-xl" style={{ marginTop: 'var(--sp-4)' }}>Privacy Policy</h1>
          <p className="text-secondary" style={{ marginTop: 'var(--sp-3)' }}>
            Last updated: January 2025
          </p>
        </header>

        <section className={styles.section}>
          <h2>About The Policy</h2>
          <p>At InverGo Design, our first priority is the privacy of our clients and we respect it as our own. Though we collect information from our clients, it is only used to make improvements in our customer services. Our company acknowledges that the maintenance and use of our clients&apos; information is our responsibility. We DO NOT rent or sell the information that our clients provide us online.</p>
          <p>This policy pertains to details for the security of data collected of our client, how it is used, why we collect it, and how we use it. Our policy defines all the options and ways you can opt for in regards to your data collection and our use of your information.</p>
        </section>

        <section className={styles.section}>
          <h2>Personal Information Collected</h2>
          <p>The information collected by InverGo Design includes the client&apos;s name, e-mail, mailing address and phone number. These are pieces of information that the client provides us while ordering or while saving the information with our company.</p>
          <p>Our company also maintains records of the items which have interested our clients in the past, as well as the client&apos;s purchases online.</p>
        </section>

        <section className={styles.section}>
          <h2>Use of Collected Data</h2>
          <p>The information collected is used in many diversified methods. Our company uses the information saved by our clients to process their order. We also send them emails to confirm the order and our customer services may also contact them via phone, mailing address or e-mail if our company has other queries regarding the order placed.</p>
          <p>As a client, one might also receive updates regarding our site and services which may include a newsletter and information on promotions.</p>
        </section>

        <section className={styles.section}>
          <h2>Newsletter Opt-out</h2>
          <p>If you no longer wish to receive our newsletter and promotional communications, you may opt-out of receiving them by following the instructions included in each newsletter or by emailing us at <a href="mailto:sales@invergodesign.com">sales@invergodesign.com</a> or calling us at <a href="tel:+13322494910">+1 (332) 249-4910</a>.</p>
        </section>

        <section className={styles.section}>
          <h2>Social Media Features and Widgets</h2>
          <p>Our website includes Social Media Features, such as the Facebook Like button and interactive widgets. These Features may collect your IP address, which page you are visiting on our site, and may set a cookie to enable the Feature to function properly.</p>
        </section>

        <section className={styles.section}>
          <h2>3rd Party Involvement</h2>
          <p>Personal information will NOT be released to third parties unless as described in this policy. There are no circumstances under which we sell personal information to third parties.</p>
          <p>We use credit card processing companies to bill you for services. These companies do not retain, share, store or use personally identifiable information for any other purposes.</p>
        </section>

        <section className={styles.section}>
          <h2>Security of Personal Information</h2>
          <p>The information of our clients is secure, as it is protected during transmission by the use of the Secure Sockets Layer (SSL) Software which encrypts the information the client puts in.</p>
          <p>If you have any questions about security on our website, you can email us at <a href="mailto:sales@invergodesign.com">sales@invergodesign.com</a>.</p>
        </section>

        <section className={styles.section}>
          <h2>Cookies and Their Use</h2>
          <p>Cookies are alphanumeric identifiers that are transferred to the clients&apos; hard drives through their Web browsers. This enables our systems to recognize the clients&apos; browsers and storage of items in their Shopping Carts during visits.</p>
          <p>We keep track of your IP address to help diagnose problems with our server and to administer our website. Your IP address is also used to gather broad demographic information about you, such as your location and your Internet service provider.</p>
        </section>

        <section className={styles.section}>
          <h2>Notification of Changes</h2>
          <p>If we decide to change our privacy policy, we will post those changes to this privacy statement, the homepage, and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.</p>
        </section>

        <section className={styles.section}>
          <h2>Questions</h2>
          <p>If you have any questions regarding our Privacy Policy, call our toll free number <a href="tel:+13322494910">+1 (332) 249-4910</a> or email us at <a href="mailto:sales@invergodesign.com">sales@invergodesign.com</a>.</p>
        </section>
      </div>
    </article>
  );
}
