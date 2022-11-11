import { quotes } from "../assets"
import { feedback } from "../constants"
import styles from "../style"

const FeedbackCard = ({img, title, content, name, index}) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double quotes" className="w-[42px] h-[27px] object-contain" />
    <p className="font-poppins text-white text-[18px] leading-[32px] mt-10 mb-6 mx-10">{content}</p>
    <div className="flex flex-row">
      <img src={img} alt="img" className="h-12 w-12 rounded-full" />
      <div className="ml-4">
        <h6 className="font-poppins text-[20px] leading-[32px] text-white">{name}</h6>
        <p className="font-poppins text-[16px] leading-[24px] text-white opacity-50">{title}</p>
      </div>
    </div>
  </div>
)

const Testimonials = () => (
   <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[50%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2}`}>
        What people are <br className="sm:block hidden" /> saying about us
      </h2>

        <p className={`${styles.paragraph} md:mt-0 mt-6 max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>


    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map( (card, index) => 
      <FeedbackCard key={card.id} {...card}/>
      )}
    </div>

   </section>
  )


export default Testimonials