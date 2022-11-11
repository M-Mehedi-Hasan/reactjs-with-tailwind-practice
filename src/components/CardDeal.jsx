import styles, {layout} from "../style"
import { card } from "../assets"
import Button from "./Button"

const CardDeal = () => (
    <section className={`${layout.section}`}>

      <article className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
        <p className={`${styles.paragraph} mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button />
      </article>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-full"/>
      </div>

    </section>
  )


export default CardDeal