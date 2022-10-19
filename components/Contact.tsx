import React from "react";
import {
  PhoneIcon,
  DocumentIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:leonardo-mai@outlook.com?subject=${formData.subject}&body=${formData.message}`
  };


  return (
    <div className="px10 relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          Feel free to reach out to me.{" "}
          <span className="underline decoration-[#009DCF]/50">
            Lets connect!
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#009DCF]" />
            <p>+61 431 433 248</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#009DCF]" />
            <p>Melbourne, Australia</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#009DCF]" />
            <p>leonardo-mai@outlook.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
              name="user_name"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
              name="user_email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="user_subject"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            name="message"
          />
          <button
            type="submit"
            className="rounded-md bg-[#009DCF] py-5 px-10 text-lg font-bold text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
