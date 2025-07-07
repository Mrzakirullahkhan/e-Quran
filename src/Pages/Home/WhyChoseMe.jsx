import React from 'react';

const WhyChoseMe = () => {
  return (
    <div className='bg-gray-50'>
      <div className='flex justify-center items-center min-h-[80vh] py-12 md:py-16'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center  md:items-start px-4 sm:px-8 md:px-4 lg:px-0 space-y-10 md:space-y-0'>
          {/* Left: Images Section */}
          <div className='flex flex-col space-y-4 justify-center items-center w-full md:w-1/2 lg:w-1/3'>
            <div className='w-full  flex justify-center items-center'>
              <img
                src='/why-chose-side-image.svg'
                className='w-full h-auto'
                alt='Large Image'
              />
            </div>
          </div>

          {/* Right: Text Section */}
          <div className='w-full md:w-1/2 lg:w-2/3 mt-8 md:mt-0 md:ml-8 space-y-4'>
            <h3 className='text-green-500 font-semibold text-lg text-center md:text-left'>
              Why Choose
            </h3>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left'>
              Al Arabiyya tul Quran
            </h1>
            <p className='text-gray-600 text-start md:text-left mt-4 text-sm sm:text-base '>
              Our innovative online teaching methodology makes learning through the internet easier, more engaging, and highly effective. We have carefully designed courses that cater to both beginners and those looking to strengthen their understanding with accurate pronunciation.

              In addition, we offer specialized Quran study programs focused on Tajweed and Tafseer, providing a well-rounded and accessible learning experience for students of all levels.
            </p>

            {/* Flexbox for paragraphs with proper spacing */}
            <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div className='flex flex-col items-center md:items-start'>
                <img
                  src='/parar-upper-line.svg'
                  className='w-[60%] md:w-[50%] lg:w-[40%]'
                  alt='Upper line'
                />
                <h4 className='text-lg md:text-xl font-semibold text-gray-800 mt-2'>
                  Free Trial Classes for All
                </h4>
                <p className='text-gray-600 text-start md:text-left mt-2 text-sm '>
                  We offer years of expertise in teaching the Quran online for
                  the sake of Allah. Try a free class anytime—register for Skype
                  lessons or contact us for a consultation!
                </p>
              </div>
              <div className='flex flex-col items-center md:items-start'>
                <img
                  src='/parar-upper-line.svg'
                  className='w-[60%] md:w-[50%] lg:w-[40%]'
                  alt='Upper line'
                />
                <h4 className='text-lg md:text-xl font-semibold text-gray-800 mt-2'>
                  Flexible Schedule
                </h4>
                <p className='text-gray-600 text-start md:text-left mt-2 text-sm '>
                  Our Institute offers high-quality Quran classes in an engaging
                  digital setting, allowing you and your family to learn from
                  home. Our tutors are available 24/7 to support your journey.
                </p>
              </div>
              <div className='flex flex-col items-center md:items-start'>
                <img
                  src='/parar-upper-line.svg'
                  className='w-[60%] md:w-[50%] lg:w-[40%]'
                  alt='Upper line'
                />
                <h4 className='text-lg md:text-xl font-semibold text-gray-800 mt-2'>
                  One-to-One Classes
                </h4>
                <p className='text-gray-600 text-start md:text-left mt-2 text-sm '>
                  We provides one-on-one Quran classes with a dedicated teacher,
                  offering personalized instruction in Quran reading,
                  memorization, and tafseer. Each student receives focused,
                  individualized learning for an effective Quran study
                  experience.
                </p>
              </div>
              <div className='flex flex-col items-center md:items-start'>
                <img
                  src='/parar-upper-line.svg'
                  className='w-[60%] md:w-[50%] lg:w-[40%]'
                  alt='Upper line'
                />
                <h4 className='text-lg md:text-xl font-semibold text-gray-800 mt-2'>
                Skilled Multilingual Teachers
                </h4>
                <p className='text-gray-600 text-start md:text-left mt-2 text-sm '>
                We offer qualified teachers proficient in Arabic, English, and Urdu to ensure seamless communication and a productive learning environment for Quranic studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseMe;
