// import { AnimatePresence, motion } from 'framer-motion';
// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Modal from '../Components/Modal'; // Import the modal

// const navLinks = [
//   { title: 'Home', url: '/' },
//   { title: 'About Us', url: '/about' },
//   { title: 'Courses', url: '/courses' },
//   { title: 'Pricing', url: '/pricing' },
//   { title: 'Contact Us', url: '/contact' },
//   { title: 'FAQs', url: '/faqs' },
// ];

// function Navbar() {
//   const [showModal, setShowModal] = useState(false);
//   const [showBookModal, setShowBookModal] = useState(false); // Modal state for Book Now
//   const [activeLink, setActiveLink] = useState('Home');

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleSetActive = link => {
//     setActiveLink(link);
//     setShowModal(false);
//   };

//   const modalVariants = {
//     hidden: { y: '-100vh' },
//     visible: { y: 0, transition: { type: 'tween', duration: 0.3 } },
//     exit: {
//       y: '-100vh',
//       transition: { type: 'tween', duration: 0.3, delay: 0.3 },
//     },
//   };

//   const linkItemVariants = {
//     hidden: { opacity: 0, y: '50%' },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: 'easeOut' },
//     },
//     exit: {
//       opacity: 0,
//       y: '50%',
//       transition: { duration: 0.1, ease: 'easeOut' },
//     },
//   };

//   const navLinksVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
//     exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
//   };

//   return (
//     <nav className='bg-gradient-to-r from-white to-gray-50 py-3 px-6 shadow-lg sticky top-0 z-50 text-nowrap border-b border-gray-100'>
//       <div className='container mx-auto flex justify-between items-center'>
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img src='/Logo.png' alt='Logo' className="w-[80px] " />
//         </div>


//         {/* Navbar Links */}
//         <ul className='hidden lg:flex space-x-12 items-center mr-16'>
//           {navLinks.map(link => (
//             <Link to={link.url} key={link.title}>
//               <li
//                 onClick={() => handleSetActive(link.title)}
//                 className={`${activeLink === link.title
//                     ? 'text-black font-semibold relative after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[3px] after:bg-[#FFD050] after:rounded-full'
//                     : 'text-gray-600'
//                   } text-sm hover:text-black transition-all duration-300 font-medium py-2`}
//               >
//                 {link.title}
//               </li>
//             </Link>
//           ))}
//         </ul>

//         {/* 'Book Now' Button */}
//         <div className='hidden lg:block'>
       
//         </div>

//         {/* Mobile & Tablet Menu Icon */}
//         <div className='lg:hidden'>
//           <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
//             <FaBars className='text-black text-2xl' onClick={toggleModal} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile & Tablet Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className='fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50'
//             variants={modalVariants}
//             initial='hidden'
//             animate='visible'
//             exit='exit'
//           >
//             <button
//               className='absolute top-6 right-6 text-white h-10 w-10 flex items-center justify-center rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300'
//               onClick={toggleModal}
//             >
//               <FaTimes
//                 className='text-white'
//                 style={{ fontSize: '20px' }}
//               />
//             </button>
//             <motion.div
//               className='bg-white w-full max-w-md p-10 rounded-xl shadow-2xl'
//               variants={navLinksVariants}
//               initial='hidden'
//               animate='visible'
//               exit='exit'
//             >
//               <ul className='flex flex-col items-center gap-8'>
//                 {navLinks.map(link => (
//                   <motion.li key={link.title} variants={linkItemVariants}>
//                     <Link
//                       to={link.url}
//                       onClick={() => handleSetActive(link.title)}
//                       className={`${activeLink === link.title
//                           ? 'text-black font-semibold relative after:content-[""] after:absolute after:bottom-[-6px] after:left-1/4 after:w-1/2 after:h-[3px] after:bg-[#FFD050] after:rounded-full'
//                           : 'text-gray-600'
//                         } text-xl transition-all hover:text-black duration-300`}
//                     >
//                       {link.title}
//                     </Link>
//                   </motion.li>
//                 ))}
//                 <li className="mt-4">
                 
//                 </li>
//               </ul>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Modal Component */}
//       <Modal isOpen={showBookModal} setIsOpen={setShowBookModal} />
//     </nav>
//   );
// }

// export default Navbar;


import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Modal from '../Components/Modal';

const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/about' },
  { title: 'Courses', url: '/courses' },
  { title: 'Pricing', url: '/pricing' },
  { title: 'Contact Us', url: '/contact' },
  { title: 'FAQs', url: '/faqs' },
];

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const location = useLocation();

  const toggleModal = () => setShowModal(!showModal);

  const activeLink = navLinks.find(link => link.url === location.pathname)?.title || 'Home';

  const modalVariants = {
    hidden: { y: '-100vh' },
    visible: { y: 0, transition: { type: 'tween', duration: 0.3 } },
    exit: {
      y: '-100vh',
      transition: { type: 'tween', duration: 0.3, delay: 0.3 },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: '50%',
      transition: { duration: 0.1, ease: 'easeOut' },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  return (
    <nav className='bg-gradient-to-r from-white to-gray-50 py-3 px-6 shadow-lg sticky top-0 z-50 text-nowrap border-b border-gray-100'>
    
    <div className='container mx-auto relative flex items-center justify-between'>

  {/* Logo - Left */}
  <div className="flex items-center z-10">
    <img src='/Logo.png' alt='Logo' className="w-[80px]" />
  </div>

  {/* Nav Links - Center */}
  <ul className='hidden lg:flex space-x-12 items-center absolute left-1/2 -translate-x-1/2'>
    {navLinks.map(link => (
      <Link to={link.url} key={link.title}>
        <li
          className={`${activeLink === link.title
              ? 'text-black font-semibold relative after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[3px] after:bg-[#FFD050] after:rounded-full'
              : 'text-gray-600'
            } text-sm hover:text-black transition-all duration-300 font-medium py-2`}
        >
          {link.title}
        </li>
      </Link>
    ))}
  </ul>

  {/* Mobile Hamburger - Right */}
  <div className='lg:hidden z-10'>
    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
      <FaBars className='text-black text-2xl' onClick={toggleModal} />
    </button>
  </div>
</div>

{/* <div className='bg-[#1C8E5A] p-1  w-[90%] mx-auto rounded-full '>
  <marquee behavior="" direction="right" className="font-bold text-white">اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ, اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ</marquee>
</div> */}


      {/* Mobile Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50'
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <button
              className='absolute top-6 right-6 text-white h-10 w-10 flex items-center justify-center rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300'
              onClick={toggleModal}
            >
              <FaTimes className='text-white' style={{ fontSize: '20px' }} />
            </button>
            <motion.div
              className='bg-white w-full max-w-md p-10 rounded-xl shadow-2xl'
              variants={navLinksVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <ul className='flex flex-col items-center gap-8'>
                {navLinks.map(link => (
                  <motion.li key={link.title} variants={linkItemVariants}>
                    <Link
                      to={link.url}
                      onClick={toggleModal}
                      className={`${activeLink === link.title
                          ? 'text-black font-semibold relative after:content-[""] after:absolute after:bottom-[-6px] after:left-1/4 after:w-1/2 after:h-[3px] after:bg-[#FFD050] after:rounded-full'
                          : 'text-gray-600'
                        } text-xl transition-all hover:text-black duration-300`}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Component (Book Now, currently not used) */}
      <Modal isOpen={showBookModal} setIsOpen={setShowBookModal} />
    </nav>
  );
}

export default Navbar;
