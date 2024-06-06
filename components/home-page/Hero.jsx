import classes from './Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/ninja.jpg'
          width={300}
          height={300}
          alt='Image showing Ismail'
        />
      </div>
      <h1>Hi, I am Ismail</h1>
      <p>I blog about Web Deb, especially Frontend and Frameworks like React</p>
    </section>
  )
}
