import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <div className="contact-wrapper w-full pt-[10vh] max-md:pt-[15vh] bg-Dominant">
      <ContactPage1/>
      <ContactPage2 />
      <Footer />
    </div>
  );
};
export default Contact;



const ContactPage1 = ()=>{
  return (
    <div className="contact-page-1 w-full px-5 md:px-10 h-[90vh] max-lg:h-[100vh] p-2 rounded-2xl overflow-hidden flex max-lg:flex-col ">
        <div className="h-full w-[50%] max-lg:w-full max-lg:h-[50%]   ">
          <div className="h-[60%] text-[16vw] sm:text-[15vw] md:text-[12vw] lg:text-[8vw] w-full leading-none max-xl:h-[48%] font-Heading pt-[3vw] text-Secondary ">
            <h1 className="">LET'S BUILD </h1>
            <div className="flex items-center  gap-[.5vw]">
              <img
                className="h-[18vw] sm:h-[18vw] md:h-[12vw]"
                src="public\images\Black___White_Minimalist_Business_Logo_20240514_000835_0000-removebg-preview.png"
                alt=""
              />
              <h1 className="">TOGETHER!</h1>
            </div>
          </div>
          <div className="h-[40%] flex items-center md:mt-[5vh]  lg:mt-[0] justify-center px-10 max-lg:h-[55%] w-full text-Secondary font-['poppins'] bg-Buttoncolor rounded-xl lg:w-[90%] text-[1.45vw]">
            <p className="max-sm:text-[3.6vw] max-lg:text-[3vw]">
              At Your Agency Name , we believe in transforming your vision into
              reality. Our team of skilled designers and developers work
              collaboratively to create visually stunning and highly functional
              websites that drive results.
            </p>
          </div>
        </div>
        <div className="h-full w-[50%] rounded-xl max-lg:mt-[10vw] max-lg:w-full max-lg:h-[40%] ">
          <img
            className="h-full w-full object-cover rounded-xl"
            src="public\images\quhpmdz09rsuzqCrrldgOxbgr4.jpeg"
            alt=""
          />
        </div>
      </div>
  )
}

const ContactPage2 = () => {
  return (
    <div className="contact-page-2 flex gap-5 py-10 max-lg:flex-col text-Secondary font-Secondary  items-center px-10 max-lg:px-5  w-full ">
      <ContactForm />
      <div className="w-[50%]  max-lg:h-[52vh]  max-lg:text-[4.4vw] text-[1.8vw] h-[90vh] max-lg:w-full flex flex-col gap-4">
        <div className="h-[58%] flex flex-col gap-1 p-10 text-right leading-none  w-full rounded-xl">
          <h2>hello@twocreate.co.ind</h2>
          <h2>+(91) 7007574597</h2>
          <h2 className="mt-5">3 Mentmore Terrace</h2>
          <h2>Azamgarh</h2>
          <h2>India</h2>
        </div>
        <div className="h-[40%] p-10 leading-none w-full">
          <h1 className="text-[2.6vw] max-lg:text-[6vw]">CARRERS</h1>
          <h2 className="mt-10 mb-2">We're always interested in new talent.</h2>
          <a href="#" className="">
            careers@twocreate.co.ind
          </a>
        </div>
      </div>
    </div>
  );
};