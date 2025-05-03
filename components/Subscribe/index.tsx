import React from "react";

interface Errors {
  name?: boolean;
  email?: boolean;
  phone?: boolean;
}

const SubscribeForm = () => {
  const [result, setResult] = React.useState("");
  const [errors, setErrors] = React.useState<Errors>({});
  const [resultColor, setResultColor] = React.useState("");

  const validate = (name: string, email: string, phone: string) => {
    const newErrors: Errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /\d{10}$/;

    if (!name) newErrors.name = true;
    if (!phone || !phoneRegex.test(phone)) newErrors.phone = true;
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
      [name]: !value || (name === "phone" && !/\d{10}$/.test(value)),
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    if (!validate(name, email, phone)) {
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
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResultColor("darkgreen");
      setResult("Successfully Subscribed!");
      (event.target as HTMLFormElement).reset();
      setErrors({});
    } else {
      console.log("Error", data);
      setResult(data.message);
      setResultColor("red");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="pb-5">
        <div className="mb-7.5 flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={handleInputChange}
            className={`w-full border-b ${
              errors.name ? "border-red-500" : "border-stroke"
            } bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none`}
          />
          <input
            type="email"
            placeholder="Email address"
            name="email"
            onChange={handleInputChange}
            className={`w-full border-b ${
              errors.email ? "border-red-500" : "border-stroke"
            } bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none`}
          />
          <input
            type="tel"
            placeholder="Phone number"
            name="phone"
            onChange={handleInputChange}
            className={`w-full border-b ${
              errors.phone ? "border-red-500" : "border-stroke"
            } bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none`}
          />
        </div>
        <div className="flex flex-wrap xl:justify-between ">
          <button
            type="submit"
            aria-label="subscribe button"
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
          >
            Subscribe
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
          name="message"
          value="This user would like to be subscribed to the mailing list."
        />
        <input type="hidden" name="subject" value="SUBSCRIBE FORM" />
        <input type="hidden" name="from_name" value="Las Olas Yoga Forms" />
      </form>
      <span style={{ color: resultColor }}>{result}</span>
    </>
  );
};

export default SubscribeForm;
