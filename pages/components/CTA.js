import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../../styles/components/_cta.module.scss';
import CTAPatternDesktop from '../../images/bg-pattern-how-we-work-desktop.svg';
import CTAPatternMobile from '../../images/bg-pattern-how-we-work-mobile.svg';

function CTA() {
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
    <div className={styles.cta_wrapper}>
      <h2>Find out more <br />about how we work</h2>
      <button>HOW WE WORK</button>
      <Image
        src={isDesktop ? CTAPatternDesktop : CTAPatternMobile}
        alt='Pattern'
      />
    </div>
  );
}
 
export default CTA;