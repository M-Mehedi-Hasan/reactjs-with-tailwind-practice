import styles from "../style"
import Button from "./Button"

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col sm:flex-row bg-black-gradient-2 box-shadow rounded-[20px]`}>
      <div className="flex flex-1 flex-col">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} w-[445px] h-[58px] leading-[29px] mt-6`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA