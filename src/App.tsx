import React from 'react';
import FirstSection from './section/FirstSection';
import SecondSection from './section/SecondSection';
import ThirdSection from './section/ThirdSection';
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  )
}

export default App;
