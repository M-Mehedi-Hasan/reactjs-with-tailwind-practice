import styles from "../style"
import { logo, Vector } from "../assets" 
import { footerLinks, socialMedia } from "../constants"

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-8`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain"/>
          <p className={`${styles.paragraph} max-w-[312px] mt-4`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => 
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]"> 
            <h4 className="font-poppins text-[18px] text-white leading-[27px] font-medium">{footerLink.title}</h4>
            <ul className="mt-6">
              {footerLink.links.map((links, index) => 
              <li key={index} className={`font-poppins text-dimWhite text-[16px] leading-[24px] hover:text-secondary ${index === footerLink.links.length - 1 ? "mb-0" : "mb-3"}`}> <a href={links.link}> {links.name} </a> </li>)}
            </ul>
          </div> )}
        </div>
      </div>


      <div className="flex justify-between items-center w-full md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins text-[18px] leading-[27px] text-white opacity-60 flex justify-start items-center">
        Copyright <span className="mx-1"><img src={Vector} alt="" className="h-[16px] w-[16px]"/></span> 2021 HooBank. All Rights Reserved.
        </p>

        <div className="flex md:mt-0 mt-6">
          {socialMedia.map((social, index) => 
            <a href={social.link}> 
            <img key={social.id} 
            src={social.icon}
            alt={social.id} className={`h-[21px] w-[21px] ${index === social.length - 1 ? "mr-0" : "mr-6"}`}/></a>)}             
        </div>
      </div>
    </section>
  )


export default Footer