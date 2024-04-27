import Image from 'next/image';
import styles from '../../styles/components/_navigation.module.scss';
import { useState, useEffect } from 'react';

import logo from '../../images/logo.svg';
import Close from '../../images/icon-close.svg';
import Hamburger from '../../images/icon-hamburger.svg';
import Pattern from '../../images/bg-pattern-mobile-nav.svg';

function Navigation() {
  const [isToggled, setToggle] = useState(true);
  const [isDesktop, setDesktop] = useState(true);

  const handleToggle = async (event) => {
    event.preventDefault();
    setToggle(!isToggled);
  }

  useEffect(() => {
    function desktopChecker() {
      var screenWidth = window.innerWidth;

      if (screenWidth <= 1000) { 
        setDesktop(false);
        setToggle(false);
      } else {
        setDesktop(true);
        setToggle(true);
      }
    }

    desktopChecker();
    window.addEventListener('resize', desktopChecker);
    return () => window.removeEventListener('resize', desktopChecker);
  }, []);

  const toggleList = isToggled ? `${styles.display_block}` : `${styles.display_none}`;
  
  const hamburgerClass = isDesktop ? `${styles.display_none}` : `${styles.display_block}`;

  return (
    <nav className={styles.nav}>
      <Image
        src={logo}
        alt="Insure Logo"
        className={styles.logo}
      />

      <div className={`${styles.nav_menu} ${toggleList}`}>
        <ul>
          <li>HOW WE WORK</li>
          <li>BLOG</li>
          <li>ACCOUNT</li>
          <li>VIEW PLANS</li>
        </ul>

        <Image
          src={Pattern}
          alt="Pattern"
        />
      </div>

      <Image
        src={isToggled ? Close: Hamburger }
        alt="Menu"
        onClick={handleToggle}
        className={hamburgerClass}
      />
    </nav>
  );
}
 
export default Navigation;