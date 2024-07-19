import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <section className="bg-purple-50">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <motion.div
            className="font-light text-gray-600 sm:text-lg dark:text-gray-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              About Us
            </h2>
            <p className="mb-4">
              The Interdisciplinary Development Research Forum (IDRF) was established in 2024 with the motto of societal reforms through research-oriented development activities, encompassing all dimensions such as research, capacity building, human resource development, and knowledge hubs. Our core mission revolves around disseminating knowledge and providing targeted training to enhance national capacity. IDRF actively engages in diverse activities, including conducting research projects, facilitating awareness programs, implementing skill development initiatives, fostering human resource capacity building, conducting evidence-based research, orchestrating intervention programs, and contributing to the development of Corporate Social Responsibility (CSR) projects.
            </p>
            <p>
              At the heart of our mission lies a dedication to making a tangible impact on society through holistic and strategic endeavors.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <motion.img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.green.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-gray-600/10 ring-1 ring-green-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <motion.h2
            className="mb-4 text-4xl text-center tracking-tight font-bold bg-gradient-to-t from-green-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Vision
          </motion.h2>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                “The IDRF envisions a platform where research through scientific methodologies and down-to-earth academic points of view are easily soluble towards social sustainability.”
              </motion.p>
            </blockquote>
          </figure>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl mt-10">
          <motion.h2
            className="mb-4 text-4xl text-center tracking-tight font-bold bg-gradient-to-t from-green-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            Our Mission
          </motion.h2>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                “To provide a supportive platform and knowledge hub to enhance skills and help society.”
              </motion.p>
            </blockquote>
          </figure>
        </div>
      </section>
    </>
  );
}

export default About;
