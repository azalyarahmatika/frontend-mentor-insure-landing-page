import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../../styles/components/_footer.module.scss';
import FooterPatternDesktop from '../../images/bg-pattern-footer-desktop.svg';
import FooterPatternMobile from '../../images/bg-pattern-footer-mobile.svg';
import Logo from '../../images/logo.svg';
import Facebook from '../../images/icon-facebook.svg';
import Twitter from '../../images/icon-twitter.svg';
import Pinterest from '../../images/icon-pinterest.svg';
import Instagram from '../../images/icon-instagram.svg';

function Footer() {
  const [isDesktop, setDesktop] = useState(true);

  useEffect(() => {
    function desktopChecker() {
      var screenWidth = window.innerWidth;

      if (screenWidth <= 1000) { 
        setDesktop(false);
      } else {
        setDesktop(true);
      }
    }

    desktopChecker();
    window.addEventListener('resize', desktopChecker);
    return () => window.removeEventListener('resize', desktopChecker);
  }, []);
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <Image 
          src={Logo}
          alt='Logo'
        />
        <Image 
          src={isDesktop ? FooterPatternDesktop : FooterPatternMobile}
          alt='Pattern'
          className={styles.footer_top_pattern}
        />
        <div className={styles.footer_top_contact}>
          <Image 
            src={Facebook}
            alt='Facebook'
          />
          <Image 
            src={Twitter}
            alt='Twitter'
          />
          <Image 
            src={Pinterest}
            alt='Pinterest'
          />
          <Image 
            src={Instagram}
            alt='Instagram'
          />
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <ul>
          <li>OUR COMPANY</li>
          <li>HOW WE WORK</li>
          <li>WHY INSURE?</li>
          <li>VIEW PLANS</li>
          <li>REVIEWS</li>
        </ul>

        <ul>
          <li>HELP ME</li>
          <li>FAQ</li>
          <li>TERMS OF USE</li>
          <li>PRIVACY POLICY</li>
          <li>COOKIES</li>
        </ul>

        <ul>
          <li>CONTACT</li>
          <li>SALES</li>
          <li>SUPPORT</li>
          <li>LIVE CHAT</li>
        </ul>

        <ul>
          <li>OTHERS</li>
          <li>CAREERS</li>
          <li>PRESS</li>
          <li>LICENCES</li>
        </ul>
      </div>
    </footer>
  );
}
 
export default Footer;