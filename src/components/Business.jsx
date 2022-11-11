import styles, { layout } from '../style'
import Button from './Button'
import { features } from '../constants'

const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <article className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
        You do the business, <br className='sm:block hidden'/> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button />
      </article>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => <div key={feature.id} className={`flex flex-row p-6 rounded-[20px] ${index !== feature.length -1 ? "mb-6" : "mb-0"} feature-card`}>

          <div className={`h-16 w-16 ${styles.flexCenter} bg-dimBlue rounded-full`} >
          <img src={feature.icon} alt="icon" className='w-1/2 h-1/2 object-contain'/>        
          </div>

          <div className='flex flex-1 flex-col ml-3'>
            <h6 className='font-poppins text-white font-semibold text-[18px]'>{feature.title}</h6>
            <p className={`${styles.paragraph} leading-6`}>{feature.content}</p>
          </div>
        </div> )}
      </div>
    </section>
  )
}

export default Business