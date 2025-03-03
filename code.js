import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTable, FaUserGraduate, FaCertificate } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <motion.h1
        className="text-4xl font-bold text-blue-400 neon-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Data Analyst Portfolio
      </motion.h1>
      
      <motion.p
        className="text-orange-400 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Transforming Data into Insights with SQL, Python & Power BI
      </motion.p>
      
      {/* About Me */}
      <motion.div className="mt-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <h2 className="text-2xl font-semibold text-blue-300">About Me</h2>
        <p className="text-gray-400 mt-2">
          Hi, I'm VIKINDRA REDDY PERAM, a passionate Data Analyst with expertise in SQL, Python, Power BI, and Tableau.
          I enjoy transforming raw data into meaningful insights that drive business decisions.
        </p>
      </motion.div>
      
      {/* Education Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-blue-300 flex items-center justify-center"><FaUserGraduate className="mr-2" /> Education</h2>
        <p className="text-gray-400 mt-2">B.tech in Electronics and Communication Engineerig - [2024]</p>
      </div>

      {/* Certifications Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-blue-300 flex items-center justify-center"><FaCertificate className="mr-2" /> Certifications</h2>
        <ul className="text-gray-400 mt-2">
          <li>Google Data Analytics Certification</li>
          <li>Microsoft Power BI Data Analyst</li>
          <li>Career Essentials in Data Analysis by Microsoft & LinkedIn</li>
          <li>Business Analysis Foundations (LinkedIn Learning)</li>
        </ul>
      </div>

      {/* Projects Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {[
          { title: "Sales Dashboard", description: "A Power BI dashboard to analyze sales performance and trends." },
          { title: "Customer Churn Analysis", description: "Using SQL and Python to identify factors influencing customer churn." },
          { title: "Retail Price Optimization", description: "An Excel-based analysis to optimize product pricing strategies." }
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <Card className="bg-gray-900 shadow-lg neon-card border border-blue-500">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold text-blue-300">{project.title}</h2>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                <Button className="mt-3 bg-orange-500 hover:bg-orange-600 text-black">View Project</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-10 flex gap-4">
        <a href="https://github.com/Vikindra" target="--blank" className="text-blue-400 text-3xl hover:text-orange-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/vikindra-reddy-peram-a25a87241" target="_blank" className="text-blue-400 text-3xl hover:text-orange-400">
          <FaLinkedin />
        </a>
        <a href="mailto:vikindrareddy720@gmail.com" className="text-blue-400 text-3xl hover:text-orange-400">
          <FaEnvelope />
        </a>
        <a href="https://public.tableau.com/profile/yourprofile" target="_blank" className="text-blue-400 text-3xl hover:text-orange-400">
          <FaTable />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
