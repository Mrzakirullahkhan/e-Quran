import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FreeTrail from './FreeTrail';
import { FaBookReader, FaClock, FaUserFriends, FaGlobe } from 'react-icons/fa';

function About() {
  const features = [
    {
      icon: <FaBookReader className="text-4xl text-[#1C8E5A]" />,
      image: '/Frame 1261153708.png',
      title: 'Free Trial Classes for All',
      description:
        'We offer years of expertise in teaching the Quran online for the sake of Allah. Try a free class anytime—register for Skype lessons or contact us for a consultation!',
    },
    {
      icon: <FaClock className="text-4xl text-[#1C8E5A]" />,
      image: '/Frame 1261153708.png',
      title: 'Flexible Schedule',
      description:
        'Quran Online Academy offers high-quality Quran classes in an engaging digital setting, allowing you and your family to learn from home. Our tutors are available 24/7 to support your journey.',
    },
    {
      icon: <FaUserFriends className="text-4xl text-[#1C8E5A]" />,
      image: '/Frame 1261153708.png',
      title: 'One-to-One Classes',
      description:
        'Personalized attention with dedicated instructors ensures you receive focused guidance tailored to your specific learning pace and style, maximizing your progress.',
    },
    {
      icon: <FaGlobe className="text-4xl text-[#1C8E5A]" />,
      image: '/Frame 1261153708.png',
      title: 'Multilingual Teachers',
      description:
        'Our diverse teaching team offers instruction in various languages, making the Quran accessible to students from different linguistic backgrounds around the world.',
    },
  ];

  // Hero section animations
  const heroControls = useAnimation();
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Mission section animations
  const missionControls = useAnimation();
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Why study section animations
  const whyStudyControls = useAnimation();
  const { ref: whyStudyRef, inView: whyStudyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Features section animations
  const featureControls = useAnimation();
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (heroInView) heroControls.start('visible');
    if (missionInView) missionControls.start('visible');
    if (whyStudyInView) whyStudyControls.start('visible');
    if (featuresInView) featureControls.start('visible');
  }, [
    heroInView, 
    missionInView, 
    whyStudyInView, 
    featuresInView, 
    heroControls, 
    missionControls, 
    whyStudyControls, 
    featureControls
  ]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        variants={fadeInUp}
        initial="hidden"
        animate={heroControls}
        className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C8E5A]/80 to-transparent z-10"></div>
          <img
            src="/Frame 1261153740.png"
            alt="About-Us Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-20 flex flex-col justify-center h-full container mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white mb-4 drop-shadow-lg">
              About Us
            </h1>
            <div className="w-20 h-1 bg-[#FFD050] rounded-full mb-4"></div>
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-medium max-w-lg drop-shadow-md">
              Al Quran Digital Institute
            </p>
            <p className="text-white/90 text-lg max-w-lg mt-4 hidden md:block">
              Empowering students worldwide with authentic Quranic education through innovative digital learning.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        ref={missionRef}
        className="py-16 md:py-24 px-4 md:px-16 container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <motion.div 
            className="col-span-12 md:col-span-7 lg:col-span-8"
            variants={fadeInUp}
            initial="hidden"
            animate={missionControls}
          >
            <div className="bg-gradient-to-r from-[#1C8E5A] to-[#1C8E5A]/80 text-white px-4 py-2 inline-block rounded-lg mb-4">
              Our Mission
            </div>
            <h2 className="font-semibold text-[#1C8E5A] text-3xl md:text-4xl mb-6">
              Al Quran Digital Institute
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="font-normal text-lg leading-relaxed">
                <span className="text-[#1C8E5A] font-medium">Al Quran Digital Institute</span> is dedicated to providing high-quality
                Quranic education to students worldwide, emphasizing the profound
                meanings and wisdom behind every holy word revealed by Allah.
              </p>
              <p className="font-normal text-lg leading-relaxed">
                Recognized globally for our outstanding online teaching standards
                and comprehensive student support, our experienced tutors hold
                authentic degrees and Ijazah certifications to ensure reliable and
                knowledgeable instruction.
              </p>
              <p className="font-normal text-lg leading-relaxed">
                We believe that Quranic knowledge has the power to transform lives. For years, we've been committed to
                making Quran education accessible to those who may lack
                opportunities in their region, especially for learning with proper
                Tajweed.
              </p>
              <p className="font-normal text-lg leading-relaxed">
                Our mission is rooted in the concept of <span className="italic">Sadqa-e-Jariah</span> (a
                form of ongoing charity) through the spread of true Islamic
                knowledge. Our online Quran learning programs are structured to
                cater to various needs and proficiency levels, from basic to
                advanced courses in Tajweed, Tafseer, and memorization.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="col-span-12 md:col-span-5 lg:col-span-4 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={missionControls}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
              }
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#1C8E5A]/10 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-[#FFD050]/20 rounded-3xl transform -rotate-3"></div>
              <img 
                src="/Group 9.png" 
                alt="Quran Study" 
                className="rounded-2xl relative z-10 shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Study With Us Section */}
      <motion.section 
        ref={whyStudyRef}
        className="py-16 bg-[#F8FAFC] relative overflow-hidden"
        variants={fadeInUp}
        initial="hidden"
        animate={whyStudyControls}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1C8E5A]/5 rounded-full transform translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD050]/5 rounded-full transform -translate-x-1/3 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whyStudyControls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <div className="w-24 h-1 bg-[#1C8E5A] mx-auto mb-6 rounded-full"></div>
              <h3 className="text-[#1C8E5A] text-xl font-medium mb-3">
                Why Study with US
              </h3>
              <h2 className="font-semibold text-2xl md:text-3xl mb-6">
                Al Quran Digital Institute
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                We specialize in online Quran and Tajweed education, enabling you to
                integrate learning into your everyday routine seamlessly. Our
                innovative teaching approach offers an engaging and interactive
                experience, allowing students to deeply connect with their studies.
                With the support of our dedicated and knowledgeable tutors, you'll
                receive guidance and encouragement at every step of your learning
                journey.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        ref={featuresRef}
        className="py-16 md:py-24 px-4 md:px-16 container mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={featureControls}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-[#1C8E5A]/10 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="absolute top-0 right-0 w-10 h-10 bg-[#FFD050]/30 rounded-full blur-lg -z-10"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#1C8E5A] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
              
              <div className="mt-6 w-12 h-1 bg-[#FFD050] rounded-full transform origin-left group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Free Trial Section */}
      <section className="container mx-auto px-4 md:px-16 pb-24">
        <FreeTrail />
      </section>
    </div>
  );
}

export default About;