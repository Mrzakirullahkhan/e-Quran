// import emailjs from 'emailjs-com'; 
// import { motion, useAnimation } from 'framer-motion';
// import React, { useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import LastFooter from './LastFooter';
// import { toast } from 'react-toastify';

// function Footer() {
//   const [selectedOption, setSelectedOption] = useState('Male');
//   const [input1, setInput1] = useState(''); // Name
//   const [input2, setInput2] = useState(''); // Phone
//   const [input3, setInput3] = useState(''); // Email
//   const [input4, setInput4] = useState(''); // Message
  

//   const controls = useAnimation();
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

//   if (inView) {
//     controls.start('visible');
//   }

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   const handleEnrollNowClick = (e) => {
//     e.preventDefault();

//     if (!input1 || !input2 || !input3 || !input4) {
//       toast.error("Please fill in all the fields ");
//       return;
//     }

//     // Define the email template parameters
//     const templateParams = {
//       to_name: "Admin",
//       from_name: input1,
//       user_email: input3,
//       user_mobile: input2,
//       user_message: input4, // Changed to use `message`
    
//     };

//     // Send the email
//     emailjs
//       .send(
//         "service_065wv88",
//         "template_8bizywk",
//         templateParams,
//         "i8MAXrjT3ft8eTIGo" 
//       )
//       .then(
//         (result) => {
//           console.log("Email sent successfully:", result.text);
//           toast.success("Email sent successfully!");
//         },
//         (error) => {
//           console.error("Error sending email:", error);
//           toast.error("Failed to send the email, please try again.");
//         }
//       );
//   };

//   return (
//     <motion.section
//       className='bg-[#1C8E5A] mt-10'
//       ref={ref}
//       variants={sectionVariants}
//       initial='hidden'
//       animate={controls}
//     >









      
//       <div className='grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#1C8E5A] overflow-hidden'>
//         {/* Left Section with Logo and Text */}
//         <motion.div
//           className='col-span-12 md:col-span-4 mt-10 flex flex-col gap-4 justify-center items-start'
//           variants={sectionVariants}
//         >
//           <img
//             src='/Logo.png'
//             alt='Footer Logo'
//             className='mb-4 sm:px-4 px-3'
//           />
//           <p className='font-normal text-base text-[#FFFFFF] mb-4 sm:px-4 px-3'>
//             Al Arabiyya tul Quran, we are dedicated to offering students
//             around the globe a profound understanding of the Holy Quran. Our
//             qualified tutors possess authentic degrees and Ijazah certificates.
//           </p>
//           {/* <div className='absolute bottom-[-0px]'>
//             <img src='/Logo.png' alt='Vector Image' />
//           </div> */}
//         </motion.div>



//         {/* Form Section */}
//         <motion.div
//           className='col-span-12 p-4 md:col-span-5 flex flex-col gap-4 justify-center text-white'
//           variants={sectionVariants}
//         >
//           <h1 className='text-[#FFFFFF] font-semibold text-xl mb-2 md:mb-4 text-center'>
//             Book 3 Days Free Trial
//           </h1>

//           {/* Gender Selection */}
//           <div className='flex items-center gap-4 justify-center'>
//             <label
//               className={`flex items-center gap-2 ${
//                 selectedOption === 'Male' ? 'text-[#FFD050]' : 'text-[#9F9F9F]'
//               }`}
//             >
//               <input
//                 type='radio'
//                 value='Male'
//                 checked={selectedOption === 'Male'}
//                 onChange={() => setSelectedOption('Male')}
//                 className={`form-radio w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${
//                   selectedOption === 'Male'
//                     ? 'border-[#FFD050]'
//                     : 'border-transparent'
//                 } accent-[#FFD050]`}
//               />
//               <span>Male</span>
//             </label>
//             <label
//               className={`flex items-center gap-2 ${
//                 selectedOption === 'Female'
//                   ? 'text-[#FFD050]'
//                   : 'text-[#9F9F9F]'
//               }`}
//             >
//               <input
//                 type='radio'
//                 value='Female'
//                 checked={selectedOption === 'Female'}
//                 onChange={() => setSelectedOption('Female')}
//                 className={`form-radio w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${
//                   selectedOption === 'Female'
//                     ? 'border-[#FFD050]'
//                     : 'border-transparent'
//                 } accent-[#FFD050]`}
//               />
//               <span>Female</span>
//             </label>
//           </div>

//           {/* Input Fields */}
//           <div className='flex flex-col gap-y-4 mt-4'>
//             <div className='flex flex-col md:flex-row gap-4'>
//               <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl'>
//                 <img src='/solar_user-linear.png' alt='' />
//                 <hr className='h-7 border-[#9F9F9F] border mx-2' />
//                 <input
//                   type='text'
//                   value={input1}
//                   onChange={e => setInput1(e.target.value)}
//                   placeholder='Name'
//                   className='p-1 rounded-3xl text-black w-full outline-transparent'
//                 />
//               </div>

//               <div className='flex items-center overflow-hidden bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl'>
//                 <PhoneInput
//                   country={'gb'}
//                   value={input2}
//                   onChange={phone => setInput2(phone)}
//                   enableSearch
//                   inputClass='text-black rounded-3xl outline-transparent w-full border-none'
//                   buttonClass='rounded-3xl border-none'
//                   dropdownClass='text-black bg-white rounded-3xl shadow-lg border border-gray-300 max-h-56 overflow-y-auto'
//                   className='flex w-full items-center rounded-3xl border-none'
//                 />
//               </div>
//             </div>

//             <div className='flex flex-col md:flex-row gap-4'>
//               <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl'>
//                 <img src='Frame 33.svg' alt='' />
//                 <hr className='h-7 border-[#9F9F9F] border mx-2' />
//                 <input
//                   type='text'
//                   value={input3}
//                   onChange={e => setInput3(e.target.value)}
//                   placeholder='Email'
//                   className='p-1 rounded-3xl text-black w-full outline-transparent'
//                 />
//               </div>

//               <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl relative'>
//                 <input
//                   type='text'
//                   value={input4}
//                   onChange={e => setInput4(e.target.value)}
//                   placeholder='Message'
//                   className='p-[6px] ps-1 rounded-3xl text-black w-full outline-transparent'
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Enroll Button */}
//           <motion.div
//             className='flex justify-center mt-6 md:mt-4'
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <button
//               onClick={handleEnrollNowClick} // Use the correct function name
//               className='bg-[#FFD050] font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 w-3/4'
//             >
//               Enroll Now
//             </button>
//           </motion.div>
//         </motion.div>




//         {/* Location Section with Icons */}
//         <motion.div
//           className='col-span-12 md:col-span-3 my-auto px-4 md:px-0 text-white text-sm sm:text-base space-y-4'
//           variants={sectionVariants}
//         >
//           <motion.div className='flex items-center' whileHover={{ x: 5 }}>
//             <img
//               src='/footerlocation-icon.svg'
//               alt='Location Icon'
//               className='w-6 h-6 mr-2'
//             />
//             <p>manghopir road karachi</p>
//           </motion.div>
//           <motion.div className='flex items-center' whileHover={{ x: 5 }}>
//             <img
//               src='/footerphone-icon.svg'
//               alt='Phone Icon'
//               className='w-6 h-6 mr-2'
//             />
//             <p>+923471066802</p>
//           </motion.div>
//           <motion.div className='flex items-center' whileHover={{ x: 5 }}>
//             <img
//               src='/footeremail-icon.svg'
//               alt='Email Icon'
//               className='w-6 h-6 mr-2'
//             />
//             <p>mrzak802@gmail.com</p>
//           </motion.div>
//           <motion.div className='flex items-center' whileHover={{ x: 5 }}>
//             <img
//               src='/footerhours-icon.svg'
//               alt='Working Hours Icon'
//               className='w-6 h-6 mr-2'
//             />
//             <p>Available 24/7 to answer your queries</p>
//           </motion.div>
//         </motion.div>

//       </div>
//       <LastFooter />
//     </motion.section>
//   );
// }

// export default Footer;

import emailjs from 'emailjs-com'; 
import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import LastFooter from './LastFooter';
import { toast } from 'react-toastify';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
  const [selectedOption, setSelectedOption] = useState('Male');  // Keep radio btns as is
  const [input1, setInput1] = useState(''); // Name
  const [input2, setInput2] = useState(''); // Phone
  const [input3, setInput3] = useState(''); // Email
  const [input4, setInput4] = useState(''); // Message

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleEnrollNowClick = (e) => {
    e.preventDefault();

    if (!input1.trim()  || !input3.trim() || !input4.trim()) {
      toast.error("Please fill in all the fields");
      return;
    }

    // Email template parameters
    const templateParams = {
      to_name: "Admin",
      from_name: input1,
      user_email: input3,
      user_mobile: input2,
      user_message: input4,
      user_gender: selectedOption,  // You may want to send this too
    };

    emailjs
      .send(
        "service_065wv88",
        "template_8bizywk",
        templateParams,
        "i8MAXrjT3ft8eTIGo"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.success("Email sent successfully!");
          // Clear the form on success
          setInput1('');
          setInput2('');
          setInput3('');
          setInput4('');
          setSelectedOption('Male'); // reset gender as well if you want
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send the email, please try again.");
        }
      );
  };

  return (
    <motion.section
      className='bg-[#1C8E5A] mt-10'
      ref={ref}
      variants={sectionVariants}
      initial='hidden'
      animate={controls}
    >
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#1C8E5A] overflow-hidden'>
        {/* Left Section with Logo and Text */}
        <motion.div
          className='col-span-12 md:col-span-4 mt-10 flex flex-col gap-4 justify-center items-start'
          variants={sectionVariants}
        >
          <img src='/Logo.png' alt='Footer Logo' className='mb-4 sm:px-4 px-3' />
          <p className='font-normal text-base text-[#FFFFFF] mb-4 sm:px-4 px-3'>
            Al Arabiyya tul Quran, we are dedicated to offering students
            around the globe a profound understanding of the Holy Quran. Our
            qualified tutors possess authentic degrees and Ijazah certificates.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className='col-span-12 p-4 md:col-span-5 flex flex-col gap-4 justify-center text-white'
          variants={sectionVariants}
        >
          <h1 className='text-[#FFFFFF] font-semibold text-xl mb-2 md:mb-4 text-center'>
            Book 3 Days Free Trial
          </h1>

          {/* Gender Selection */}
          <div className='flex items-center gap-4 justify-center'>
            {/* Keep radio buttons exactly as you provided */}
            <label
              className={`flex items-center gap-2 ${
                selectedOption === 'Male' ? 'text-[#FFD050]' : 'text-[#9F9F9F]'
              }`}
            >
              <input
                type='radio'
                value='Male'
                checked={selectedOption === 'Male'}
                onChange={() => setSelectedOption('Male')}
                className={`form-radio w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${
                  selectedOption === 'Male'
                    ? 'border-[#FFD050]'
                    : 'border-transparent'
                } accent-[#FFD050]`}
              />
              <span>Male</span>
            </label>
            <label
              className={`flex items-center gap-2 ${
                selectedOption === 'Female'
                  ? 'text-[#FFD050]'
                  : 'text-[#9F9F9F]'
              }`}
            >
              <input
                type='radio'
                value='Female'
                checked={selectedOption === 'Female'}
                onChange={() => setSelectedOption('Female')}
                className={`form-radio w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${
                  selectedOption === 'Female'
                    ? 'border-[#FFD050]'
                    : 'border-transparent'
                } accent-[#FFD050]`}
              />
              <span>Female</span>
            </label>
          </div>

          {/* Input Fields */}
          <div className='flex flex-col gap-y-4 mt-4'>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl'>
                <img src='/solar_user-linear.png' alt='User Icon' />
                <hr className='h-7 border-[#9F9F9F] border mx-2' />
                <input
                  type='text'
                  value={input1}
                  onChange={e => setInput1(e.target.value)}
                  placeholder='Name'
                  className='p-1 rounded-3xl text-black w-full outline-none'
                />
              </div>

              {/* <div className='flex items-center overflow-hidden bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl'>
                <PhoneInput
                  country={'gb'}
                  value={input2}
                  onChange={phone => setInput2(phone)}
                  // mkc
                  enableSearch
                  inputClass='text-black rounded-3xl outline-none w-full border-none'
                  buttonClass='rounded-3xl border-none'
                  dropdownClass='text-black bg-white rounded-3xl shadow-lg border border-gray-300 max-h-56 overflow-y-auto'
                  className='flex w-full items-center rounded-3xl border-none'
                />
              </div> */}

               <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl relative'>
                                  <PhoneInput
                                    country={'gb'}
                                    value={input2}
                                    onChange={phone => setInput2(phone)}
                                    enableSearch
                                    inputClass='text-black rounded-3xl border-none'
                                    buttonClass='rounded-3xl border-none'
                                    dropdownClass='text-black bg-white rounded-3xl shadow-lg border border-gray-300'
                                    className='flex w-full items-center rounded-3xl'
                                  />
                                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl'>
                <img src='Frame 33.svg' alt='Email Icon' />
                <hr className='h-7 border-[#9F9F9F] border mx-2' />
                <input
                  type='email'
                  value={input3}
                  onChange={e => setInput3(e.target.value)}
                  placeholder='Email'
                  className='p-1 rounded-3xl text-black w-full outline-none'
                />
              </div>

              <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl relative'>
                <input
                  type='text'
                  value={input4}
                  onChange={e => setInput4(e.target.value)}
                  placeholder='Message'
                  className='p-[6px] ps-1 rounded-3xl text-black w-full outline-none'
                />
              </div>
            </div>
          </div>

          {/* Enroll Button */}
          <motion.div
            className='flex justify-center mt-6 md:mt-4'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={handleEnrollNowClick}
              className='bg-[#FFD050] font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 w-3/4'
            >
              Enroll Now
            </button>
          </motion.div>
        </motion.div>

        {/* Location Section with Icons */}
        <motion.div
          className='col-span-12 md:col-span-3 my-auto px-4 md:px-0 text-white text-sm sm:text-base space-y-4'
          variants={sectionVariants}
        >
          <motion.div className='flex items-center' whileHover={{ x: 5 }}>
            <img
              src='/footerlocation-icon.svg'
              alt='Location Icon'
              className='w-6 h-6 mr-2'
            />
            <p>Plot No. 42, Sunrise Road Greenfields Estate Kikuyu</p>
          </motion.div>
          <motion.div className='flex items-center gap-2' whileHover={{ x: 5 }}>
           <div className='bg-white p-1.5 rounded-full '>
            <FaWhatsapp color="#1C8E5A" size={16}/>
           </div>
            <p>
+44 7846 199366</p>
          </motion.div>
          <motion.div className='flex items-center' whileHover={{ x: 5 }}>
            <img
              src='/footeremail-icon.svg'
              alt='Email Icon'
              className='w-6 h-6 mr-2'
            />
            <p>mrzak802@gmail.com</p>
          </motion.div>
          <motion.div className='flex items-center' whileHover={{ x: 5 }}>
            <img
              src='/footerhours-icon.svg'
              alt='Working Hours Icon'
              className='w-6 h-6 mr-2'
            />
            <p>Available 24/7 to answer your queries</p>
          </motion.div>
        </motion.div>
      </div>
      {/* <LastFooter /> */}
    </motion.section>
  );
}

export default Footer;

