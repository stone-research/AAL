'use client'

import { motion } from 'framer-motion';

const FirstSection = () => (
  <section className="flex items-center justify-center min-h-screen py-10 bg-white text-black">
    <div className="container mx-auto text-center">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experience The World Of Generative AI.

      </motion.h1>
      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        The most powerful AI-Tools for creative minds.
      </motion.p>
      <motion.a
        href="#about"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Learn More
      </motion.a>
      <div className="flex justify-center mt-10">
        <div className="relative w-full max-w-3xl" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
          <video
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            autoPlay
            muted
            loop
          >
            <source src="/content/video-3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default FirstSection;
