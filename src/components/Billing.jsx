import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
    <section className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className='h-full w-full relative z-[5]'/>
        <div className='absolute -left-[50%] z-[3] h-[50%] w-[50%] top-0 rounded-full white__gradient'/>
        <div className='absolute -left-[50%] z-[0] h-[50%] w-[50%] bottom-0 rounded-full pink__gradient'/>
      </div>

      <article className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-6`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        
        <div className='flex flex-wrap sm:mt-10 mt-6'>
          <img src={google} alt="play store" className='mr-8 h-[42px] w-[128px] object-contain'/>
          <img src={apple} alt="apple store" className='h-[42px] w-[128px] object-contain'/>
        </div>

      </article>
    </section>
  )


export default Billing