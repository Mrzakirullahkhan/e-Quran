// 
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function ContactDetail() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactInfo = [
    {
      title: "Our Address",
      description: "Plot No. 42, Sunrise Road Greenfields Estate Kikuyu",
      iconSrc: "/Frame 141.svg",
      iconAlt: "Address Icon",
    },
    {
      title: "Phone Number",
      description: "+44 7846 199366",
      iconSrc: "/Frame 142.svg",
      iconAlt: "Email Icon",
    },
    {
      title: "Email Address",
      description: "mrzak802@gmail.com",
      iconSrc: "/Frame 143.svg",
      iconAlt: "Phone Icon",
    },
    {
      title: "Working Hours",
      description: "Our customer representative team is available 24/7.",
      iconSrc: "/Frame 144.svg",
      iconAlt: "Clock Icon",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Admin",
      from_name: name,
      user_email: email,
      user_mobile: phone,
      user_message: message,
    };

    emailjs
      .send(
        "service_065wv88", // Replace with your service ID
        "template_8bizywk", // Replace with your template ID
        templateParams,
        "i8MAXrjT3ft8eTIGo" // Replace with your public key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="p-4 sm:p-6 md:p-8 lg:px-10 xl:px-12 2xl:px-16">
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 mt-6">
          {/* Contact Info */}
          <div className="col-span-12 md:col-span-6 bg-white rounded-lg p-4 sm:p-6 lg:p-8 space-y-4 md:space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index}>
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded-full h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
                    <img
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      className="h-8 w-8 sm:h-10 sm:w-10"
                    />
                  </div>
                  <div>
                    <h1 className="text-base sm:text-lg font-semibold text-gray-800">
                      {item.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
                {index < contactInfo.length - 1 && (
                  <hr className="border-gray-300 mt-3 md:mt-5" />
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="col-span-12 md:col-span-6 mt-4 md:mt-0 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col w-full gap-y-4 sm:gap-y-6">
              {/* Name */}
              <div className="flex items-center bg-white p-2 sm:p-3 w-full rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src="/solar_user-linear.png" alt="User Icon" />
                <hr className="h-7 border-[#9F9F9F] border mx-2" />
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="p-1 sm:p-2 rounded-full text-gray-700 w-full outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex items-center bg-white p-2 sm:p-3 w-full rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <PhoneInput
                  country="pk"
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  inputClass="text-gray-700 rounded-full w-full outline-none border-none"
                  buttonClass="rounded-full"
                  inputProps={{
                    name: "user_phone",
                    required: true,
                    placeholder: "Phone Number",
                  }}
                />
              </div>

              {/* Email */}
              <div className="flex items-center bg-white p-2 sm:p-3 w-full rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src="/Frame 33.svg" alt="Email Icon" />
                <hr className="h-7 border-[#9F9F9F] border mx-2" />
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="p-1 sm:p-2 rounded-full text-gray-700 w-full outline-none"
                  required
                />
              </div>

              {/* Message */}
              <div className="relative mb-3 rounded-2xl pt-3 px-2 shadow-md hover:shadow-lg transition-shadow duration-300">
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  rows="4"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center items-center mt-8 md:mt-10">
              <button
                type="submit"
                className="bg-[#FFD050] font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 w-3/4"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactDetail;
