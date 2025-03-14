import React from 'react'
import styles from './Home.module.css'
import photo from '../img/collage.jpg'
import photo1 from '../img/Rupesh.1.jpg'
function Home() {
  return (
    <div className={styles.container} >
      <div className={styles.container1}>
        <img src={photo} alt="" id={styles.bg}/>
        <div className={styles.profile}>

        <img src={photo1} alt="" id={styles.prof_photo}/>
       <h2 style={{zIndex:'3',position:'absolute',left:'230px',top:'390px'}}>Rupesh</h2>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.buttons}>
          <input type="button" value="Gallery" />
          <input type="button" value="Article" />
        </div>
      </div>
    </div>
  )
}

export default Home


