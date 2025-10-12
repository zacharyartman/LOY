"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Errors = {
  email?: boolean;
  message?: boolean;
  name?: boolean;
}

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [errors, setErrors] = React.useState<Errors>({});
  const [resultColor, setResultColor] = React.useState("");

  const validate = (name: string, email: string, message: string) => {
    const newErrors: Errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) newErrors.name = true;
    if (!message) newErrors.message = true;
    if (!email || !emailRegex.test(email)) newErrors.email = true;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]:
        !value ||
        (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)),
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!validate(name, email, message)) {
      setResult(
        "Please review all fields, as one or more appear to be invalid.",
      );
      setResultColor("red");
      return;
    }

    setResult("Sending....");
    setResultColor("grey");

    formData.append("access_key", "8e7f1f3e-c7a0-467c-a81d-68d6c575c13d");

    const response = await fetch("https://api.web3forms.com/submit", {
      body: formData,
      method: "POST",
    });

    const data = await response.json();

    if (data.success) {
      setResultColor("darkgreen");
      setResult("Thank you for your message! We'll be in touch shortly.");
      (event.target as HTMLFormElement).reset();
      setErrors({});
    } else {
      setResult(data.message);
      setResultColor("red");
    }
  };

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 px-7.5 py-10 lg:px-15 lg:py-15 xl:px-20 xl:py-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-lightestbrown"></div>
        <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
          <Image
            src="/./images/shape/shape-dotted-light.svg"
            alt="Dotted"
            layout="fill"
          />
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between xl:gap-20">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 md:w-1/2 xl:p-15"
          >
            <h2 className="mb-2 text-3xl font-semibold text-primaryho xl:text-sectiontitle2">
              Contact Us
            </h2>
            <h2 className="mb-15 text-metatitle3 font-semibold text-black xl:text-metatitle2 ">
              Get in touch
            </h2>

            <form onSubmit={onSubmit} className="mb-5">
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  onChange={handleInputChange}
                  className={`w-full border-b pb-3.5 ${
                    errors.name ? "border-red-500" : "border-stroke"
                  } bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2`}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  onChange={handleInputChange}
                  className={`w-full border-b pb-3.5 ${
                    errors.email ? "border-red-500" : "border-stroke"
                  } bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none lg:w-1/2`}
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  placeholder="Message"
                  name="message"
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full border-b ${
                    errors.message ? "border-red-500" : "border-stroke"
                  } bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none`}
                ></textarea>
              </div>

              <div className="flex flex-wrap gap-4 xl:justify-between">
                <button
                  type="submit"
                  aria-label="send message"
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white duration-150 ease-in-out hover:bg-primaryho"
                >
                  Send Message
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission - LOY"
              />
              <input
                type="hidden"
                name="from_name"
                value="Las Olas Yoga Forms"
              />
            </form>
            <span style={{ color: resultColor }}>{result}</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="animate_top w-full md:w-1/2 md:p-7.5 lg:w-[50%]"
          >
            <div className="relative h-full w-full">
              <Image
                src={"/images/contact/beginner-yoga-class.webp"}
                alt="yoga beginners"
                layout="fill"
                objectFit="cover"
                className="rounded-md object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
