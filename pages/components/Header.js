import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../../styles/components/_header.module.scss';
import Jumbotron from '../../images/image-intro-desktop.jpg';
import IntroLeftDesktop from '../../images/bg-pattern-intro-left-desktop.svg';
import IntroRightDesktop from '../../images/bg-pattern-intro-right-desktop.svg';
import IntroLeftMobile from '../../images/bg-pattern-intro-left-mobile.svg';
import IntroRightMobile from '../../images/bg-pattern-intro-right-mobile.svg';

function Header() {
  const [isDesktop, setDesktop] = useState(true);

  useEffect(() => {
    function desktopChecker() {
      var screenWidth = window.innerWidth;

      if (screenWidth < 1000) { 
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
    <header className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.header_left_text}>
          <h1>Humanizing your insurance.</h1>
          <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
          <button>VIEW PLANS</button>
        </div>
        
        <Image
          src={isDesktop ? IntroLeftDesktop : IntroLeftMobile}
          alt='Image Intro'
        />
      </div >
    
      <div className={styles.header_right}>
        <div className={styles.header_right_wrapper}>
          <Image
            src={Jumbotron}
            alt='Image Intro'
          />
        </div>
        <Image
          src={isDesktop ? IntroRightDesktop : IntroRightMobile}
          alt='Pattern'
          priority={false}
          className={styles.header_right_pattern}
        />
      </div>
    </header>
  );
}
 
export default Header;