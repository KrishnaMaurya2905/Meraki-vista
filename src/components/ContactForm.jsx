import React from "react";
import { useForm } from "react-hook-form";
// import StartProjectButton from "./StartProjectButton";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    reset();
  };

  return (
    <div className=" w-[50%] flex flex-col px-5 max-lg:w-full text-[2vw] rounded-xl">
      <h1 className="pb-10 mt-[4vh] max-sm:text-[6vw] font-Secondary font-[400]  md:text-[3vw]">
        Share Your Vision, <br /> We'll Make It Reality!
      </h1>
      <form
        className="text-[1vw] max-sm:text-[3.5vw] max-lg:w-[90%] w-[70%] flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="lg:text-[1.3vw] flex flex-col md:text-[1.8vw]   ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is required" })}
            className="bg-transparent border-b-[1px] py-2 outline-none border-Highliter"
          />
          {errors.name && (
            <span className="text-[.8vw] mt-2 max-sm:text-[2.6vw]">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col lg:text-[1.3vw]  md:text-[1.8vw] ">
          <label htmlFor="company">Company</label>
          <input
            name="company"
            type="text"
            {...register("company", { required: "Company is required" })}
            className="bg-transparent border-b-[1px] py-2 outline-none border-Highliter"
          />
          {errors.company && (
            <span className="text-[.8vw] mt-2 max-sm:text-[2.6vw]">{errors.company.message}</span>
          )}
        </div>
        <div className="flex flex-col lg:text-[1.3vw]  md:text-[1.8vw]">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="bg-transparent border-b-[1px] py-2 outline-none border-Highliter"
          />
          {errors.email && (
            <span className="text-[.8vw] mt-2 max-sm:text-[2.6vw]">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col items-start gap-2 lg:text-[1.3vw]  md:text-[1.8vw]">
          <label htmlFor="budget">Your Budget</label>
          <select
            name="budget"
            {...register("budget", { required: "Budget is required" })}
            className="bg-transparent border-b-[1px] border-Highliter outline-none py-3 w-full"
          >
            <option className="bg-Buttoncolor" value="">
              Select One
            </option>
            <option className="bg-Buttoncolor" value="30k-40k">
              ₹30,000 to ₹40,000
            </option>
            <option className="bg-Buttoncolor" value="40k-50k">
              ₹40,000 to ₹50,000
            </option>
            <option className="bg-Buttoncolor" value="50k-60k">
              ₹50,000 to ₹60,000
            </option>
            <option className="bg-Buttoncolor" value="60k-80k">
              ₹60,000 to ₹80,000
            </option>
            <option className="bg-Buttoncolor" value="80k-100k+">
              ₹80,000 to ₹1,00,000+
            </option>
          </select>
          {errors.budget && (
            <span className="text-[.8vw] max-sm:text-[2.6vw]">{errors.budget.message}</span>
          )}
        </div>
        <div className="flex flex-col lg:text-[1.3vw]  md:text-[1.8vw]">
          <label htmlFor="message">What's on your mind</label>
          <textarea
            name="message"
            {...register("message", { required: "Message is required" })}
            className="bg-transparent border-b-[1px] resize-none py-2 outline-none border-Highliter"
          ></textarea>
          {errors.message && (
            <span className="text-[.8vw] max-sm:text-[2.6vw] mt-2">{errors.message.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-5  ">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", { required: "You must accept terms" })}
            />
            <label htmlFor="terms">
              I hereby accept M/V General Terms & Privacy Policy
            </label>
          </div>
          {errors.terms && (
            <span className="text-[.8vw] max-sm:text-[2.6vw]">{errors.terms.message}</span>
          )}
        </div>
        <div className="relative">
          {/* <StartProjectButton classes={"sendenqiry"} title={"Send Enquiry"} /> */}
          <input
            type="submit"
            className="w-[35%] top-[-10%] opacity-0 absolute h-14 bg-Buttoncolor rounded-full"
            // value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
