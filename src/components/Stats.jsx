import { stats } from '../constants'
import styles from "../style"

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => <div key={stat.id} className={`flex-1 flex justify-start items-center m-3`}>
        <h4 className='xs:text-[40px] text-[30px]  font-semibold font-poppins text-white xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
        <p className={`${styles.paragraph} xs:text-[20px] text-[15px] xs:leading-[20px] ml-3 leading-[21px] text-gradient uppercase`}>{stat.title}</p>
      </div>)}
    </section>
  )


export default Stats