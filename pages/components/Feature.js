import Image from 'next/image';
import styles from '../../styles/components/_feature.module.scss';
import Snappy from '../../images/icon-snappy-process.svg';
import Affordable from '../../images/icon-affordable-prices.svg';
import People from '../../images/icon-people-first.svg';

function Feature() {
  return (
    <div className={styles.features}>
      <h2>We’re different</h2>
      <div className={styles.feature_wrapper}>
        <div className={styles.feature}>
          <Image
            src={Snappy}
            alt='Snappy Process Icon'
          />
          <h3>Snappy Process</h3>
          <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
        </div>
        <div className={styles.feature}> 
          <Image
            src={Affordable}
            alt='Affordable Prices Icon'
          />
          <h3>Affordable Prices</h3>
          <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
        </div>
        <div className={styles.feature}>
          <Image
            src={People}
            alt='People First Icon'
          />
          <h3>People First</h3>
          <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
        </div>
      </div>
    </div>
  );
}
 
export default Feature;