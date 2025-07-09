// import emailjs from 'emailjs-com';
// import { AnimatePresence, motion } from 'framer-motion';
// import React, { useState } from 'react';
// import { FiAlertCircle } from 'react-icons/fi';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import { toast } from 'react-toastify';

// const Modal = ({ isOpen, setIsOpen }) => {
//   // State variables
//   const [selectedOption, setSelectedOption] = useState('');
//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');
//   const [input3, setInput3] = useState('');
//   const [input4, setInput4] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);

//   // Animation variants
//   const sectionVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.5 } },
//   };

//   // Email sending function
//   const handleEnrollNowClick = () => {
//     const templateParams = {
//       to_name: 'Admin',
//       from_name: input1,
//       user_email: input3,
//       user_mobile: input2,
//       user_message: input4,
//     };

//     emailjs
//       .send(
//         "service_065wv88",
//         "template_8bizywk",
//         templateParams,
//         "i8MAXrjT3ft8eTIGo" 
//       )
//       .then(response => {
//         console.log('Email sent successfully!', response.status, response.text);
//         toast.success('Email sent successfully!');
//         // Optionally, clear inputs or close modal here
//       })
//       .catch(error => {
//         console.error('Failed to send email:', error);
//         toast.error('Failed to send email. Please try again.');
//       });
//   };

//   // Dropdown handling functions
//   const handleOptionClick = option => {
//     setInput4(option);
//     setShowDropdown(false);
//   };

//   const handleImageClick = () => {
//     setShowDropdown(prev => !prev);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setIsOpen(false)}
//           className='bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer'
//         >
//           <motion.div
//             initial={{ scale: 0, rotate: '12.5deg' }}
//             animate={{ scale: 1, rotate: '0deg' }}
//             exit={{ scale: 0, rotate: '0deg' }}
//             onClick={e => e.stopPropagation()}
//             className='bg-gradient-to-br from-[#FFD050] to-[#FFD050] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden'
//           >
//             <FiAlertCircle className='text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24' />

//             {/* Image Section */}
//             <div className='flex justify-end items-end'>
//               <img
//                 src='/si_close-duotone.svg'
//                 alt='close'
//                 className='cursor-pointer'
//                 onClick={() => setIsOpen(false)}
//               />
//             </div>

//             {/* Text and Radio Button Section */}
//             <div className='flex flex-col gap-4 justify-center text-white'>
//               <motion.h1
//                 className='text-[#1C8E5A] font-semibold text-2xl text-center'
//                 variants={sectionVariants}
//               >
//                 Book 3 Days Free Trial
//               </motion.h1>

//               <motion.div
//                 className='flex items-center gap-4 justify-center'
//                 variants={sectionVariants}
//               >
//                 <label
//                   className={`flex items-center gap-2 ${
//                     selectedOption === 'Male'
//                       ? 'text-[#1C8E5A]'
//                       : 'text-[#9F9F9F]'
//                   }`}
//                 >
//                   <input
//                     type='radio'
//                     value='Male'
//                     checked={selectedOption === 'Male'}
//                     onChange={() => setSelectedOption('Male')}
//                     className={`form-radio cursor-pointer w-4 h-4 rounded-full border-2 ${
//                       selectedOption === 'Male'
//                         ? 'border-[#1C8E5A]'
//                         : 'border-transparent'
//                     }`}
//                   />
//                   <span>Male</span>
//                 </label>
//                 <label
//                   className={`flex items-center gap-2 ${
//                     selectedOption === 'Female'
//                       ? 'text-[#1C8E5A]'
//                       : 'text-[#9F9F9F]'
//                   }`}
//                 >
//                   <input
//                     type='radio'
//                     value='Female'
//                     checked={selectedOption === 'Female'}
//                     onChange={() => setSelectedOption('Female')}
//                     className={`form-radio cursor-pointer w-4 h-4 rounded-full border-2 ${
//                       selectedOption === 'Female'
//                         ? 'border-[#1C8E5A]'
//                         : 'border-transparent'
//                     }`}
//                   />
//                   <span>Female</span>
//                 </label>
//               </motion.div>

//               {/* Input Fields */}
//               <motion.div
//                 className='flex flex-col gap-y-4 mt-4'
//                 variants={sectionVariants}
//               >
//                 <div className='flex flex-col md:flex-row gap-4 relative'>
//                   <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl'>
//                     <img src='/solar_user-linear.png' alt='' />
//                     <hr className='h-7 border-[#9F9F9F] border mx-2' />
//                     <input
//                       type='text'
//                       value={input1}
//                       onChange={e => setInput1(e.target.value)}
//                       placeholder='Name'
//                       className='p-1 rounded-3xl text-black w-full outline-transparent'
//                     />
//                   </div>

//                   <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl relative'>
//                     <PhoneInput
//                       country={'gb'}
//                       value={input2}
//                       onChange={phone => setInput2(phone)}
//                       enableSearch
//                       inputClass='text-black rounded-3xl border-none'
//                       buttonClass='rounded-3xl border-none'
//                       dropdownClass='text-black bg-white rounded-3xl shadow-lg border border-gray-300'
//                       className='flex w-full items-center rounded-3xl'
//                     />
//                   </div>
//                 </div>

//                 <div className='flex flex-col md:flex-row gap-4'>
//                   <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl'>
//                     <img src='Frame 33.svg' alt='' />
//                     <hr className='h-7 border-[#9F9F9F] border mx-2' />
//                     <input
//                       type='text'
//                       value={input3}
//                       onChange={e => setInput3(e.target.value)}
//                       placeholder='Email'
//                       className='p-1 rounded-3xl text-black w-full outline-transparent'
//                     />
//                   </div>

//                   <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl relative'>
//                     <input
//                       type='text'
//                       value={input4}
//                       onChange={e => setInput4(e.target.value)}
//                       placeholder='Message'
//                       className='p-[6px] ps-1 rounded-3xl text-black w-full outline-transparent'
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Enroll Button */}
//             <motion.div
//               className='flex justify-center mt-4'
//               variants={sectionVariants}
//             >
//               <button
//                 onClick={handleEnrollNowClick}
//                 className='px-8 py-3 text-nowrap bg-[#1C8E5A] hover:bg-green-700 font-semibold rounded-3xl transition duration-300'
//               >
//                 Start 3 Days Free Trial
//               </button>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Modal;


import emailjs from 'emailjs-com';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';

const Modal = ({ isOpen, setIsOpen }) => {
  const [selectedOption, setSelectedOption] = useState('Male');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [loading, setLoading] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setIsOpen]);

  const handleEnrollNowClick = () => {
    // Validation
    if (!input1 || !input2 || !input3 || !input4 || !selectedOption) {
      toast.error("Please fill out all the fields.");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(input3)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const templateParams = {
      to_name: 'Admin',
      from_name: input1,
      user_email: input3,
      user_mobile: input2,
      user_message: input4,
    };

    emailjs
      .send(
        "service_065wv88",
        "template_8bizywk",
        templateParams,
        "i8MAXrjT3ft8eTIGo"
      )
      .then(response => {
        console.log('Email sent successfully!', response.status, response.text);
        toast.success('Email sent successfully!');
        // Clear inputs
        setInput1('');
        setInput2('');
        setInput3('');
        setInput4('');
        setSelectedOption('');
        setIsOpen(false);
      })
      .catch(error => {
        console.error('Failed to send email:', error);
        toast.error('Failed to send email. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className='bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer'
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={e => e.stopPropagation()}
            className='bg-gradient-to-br from-[#FFD050] to-[#FFD050] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden'
          >
            {/* <FiAlertCircle className='text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24' /> */}

            <div className='flex justify-end items-end'>
              <img
                src='/si_close-duotone.svg'
                alt='close'
                className='cursor-pointer'
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className='flex flex-col gap-4 justify-center text-white'>
              <motion.h1
                className='text-[#1C8E5A] font-semibold text-2xl text-center'
                variants={sectionVariants}
              >
                Book 3 Days Free Trial
              </motion.h1>

              <motion.div
                className='flex items-center gap-4 justify-center'
                variants={sectionVariants}
              >
                <label className={`flex items-center gap-2 ${selectedOption === 'Male' ? 'text-[#1C8E5A]' : 'text-[#9F9F9F]'}`}>
                  <input
                    type='radio'
                    value='Male'
                    checked={selectedOption === 'Male'}
                    onChange={() => setSelectedOption('Male')}
                    className={`form-radio cursor-pointer w-4 h-4 rounded-full border-2 ${selectedOption === 'Male' ? 'border-[#1C8E5A]' : 'border-transparent'}`}
                  />
                  <span>Male</span>
                </label>
                <label className={`flex items-center gap-2 ${selectedOption === 'Female' ? 'text-[#1C8E5A]' : 'text-[#9F9F9F]'}`}>
                  <input
                    type='radio'
                    value='Female'
                    checked={selectedOption === 'Female'}
                    onChange={() => setSelectedOption('Female')}
                    className={`form-radio cursor-pointer w-4 h-4 rounded-full border-2 ${selectedOption === 'Female' ? 'border-[#1C8E5A]' : 'border-transparent'}`}
                  />
                  <span>Female</span>
                </label>
              </motion.div>

              <motion.div
                className='flex flex-col gap-y-4 mt-4'
                variants={sectionVariants}
              >
                <div className='flex flex-col md:flex-row gap-4'>
                  <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl'>
                    <img src='/solar_user-linear.png' alt='user' />
                    <hr className='h-7 border-[#9F9F9F] border mx-2' />
                    <input
                      type='text'
                      value={input1}
                      onChange={e => setInput1(e.target.value)}
                      placeholder='Name'
                      className='p-1 rounded-3xl text-black w-full outline-transparent'
                    />
                  </div>

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
                    <img src='Frame 33.svg' alt='email' />
                    <hr className='h-7 border-[#9F9F9F] border mx-2' />
                    <input
                      type='text'
                      value={input3}
                      onChange={e => setInput3(e.target.value)}
                      placeholder='Email'
                      className='p-1 rounded-3xl text-black w-full outline-transparent'
                    />
                  </div>

                  <div className='flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl'>
                    <input
                      type='text'
                      value={input4}
                      onChange={e => setInput4(e.target.value)}
                      placeholder='Message'
                      className='p-[6px] ps-1 rounded-3xl text-black w-full outline-transparent'
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div className='flex justify-center mt-4' variants={sectionVariants}>
              <button
                onClick={handleEnrollNowClick}
                disabled={loading}
                className={`px-8 py-3 bg-[#1C8E5A] font-semibold rounded-3xl transition duration-300 ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
                }`}
              >
                {loading ? 'Sending...' : 'Start 3 Days Free Trial'}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
