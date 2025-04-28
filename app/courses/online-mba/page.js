import BasicCard from "@/app/UI/BasicCard";
import WhyMbaCarousel from "@/components/Carousel/WhyMbaCarousel";
import ApplyNowBtn from "@/components/CTA/ApplyNowBtn";
import DownloadBrochureBtn from "@/components/CTA/DownloadBrochureBtn";
import { WHY_MBA } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="conatiner mx-auto">
      <h1 className="fw-bold text-center fs-1 py-4">
        Online MBA Programs by Top Indian Universities
      </h1>
      <section className="section container mx-auto">
        <h2 className="py-4">📚 What is an MBA?</h2>
        <h3 className="mb-4 text-justify">
          An MBA (Master of Business Administration) is a postgraduate degree
          focusing on business management, leadership, entrepreneurship,
          finance, marketing, and more. In an Online MBA, you get the same
          prestigious education — with the flexibility to learn at your own
          pace, from anywhere.
        </h3>

        <p>
          ✅ Specializations: Marketing, Finance, HR, Analytics,
          Entrepreneurship
        </p>
        <p>✅ Duration: 1 to 2 years</p>
        <p>✅ Mode: 100% Online with optional campus immersion</p>
      </section>
      <section className="section container">
        <h2 className="text-xl font-semibold py-4 md:text-2xl lg:text-3xl">
          🎓 Why Pursue an MBA?
        </h2>
        <div className="d-flex flex-column flex-lg-row justify-content-center gap-4">
          {WHY_MBA.map((item, index) => (
            <BasicCard key={index} title={item.title} text={item.text} />
          ))}
        </div>
        <br/><br/>
        <div className="d-flex flex-column flex-lg-row justify-content-center gap-4 mt-4">
          <DownloadBrochureBtn />
          <ApplyNowBtn />
        </div>
        {/* <div>
          <WhyMbaCarousel />
        </div> */}
      </section>
      <section className="section container bg-light">
        <h2 className="py-4">📈 Trends in the Last 10 Years (2015–2025)</h2>
        <div className="overflow-x-auto">
          <table className="table-auto mx-auto w-full lg:w-[80%] text-left">
            <thead>
              <tr className="">
                <th className="border px-4 py-2">Metric</th>
                <th className="border px-4 py-2">2015</th>
                <th className="border px-4 py-2">2025</th>
                <th className="border px-4 py-2">Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Number of Online MBA Enrollments
                </td>
                <td className="border px-4 py-2">45,000</td>
                <td className="border px-4 py-2">2,10,000</td>
                <td className="border px-4 py-2">+366%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">
                  Top Private Universities Offering Online MBA
                </td>
                <td className="border px-4 py-2">12</td>
                <td className="border px-4 py-2">58</td>
                <td className="border px-4 py-2">+383%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Average Starting Salary (INR)
                </td>
                <td className="border px-4 py-2">₹5.2 LPA</td>
                <td className="border px-4 py-2">₹9.8 LPA</td>
                <td className="border px-4 py-2">+88%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Female Enrollment %</td>
                <td className="border px-4 py-2">32%</td>
                <td className="border px-4 py-2">46%</td>
                <td className="border px-4 py-2">+14%</td>
              </tr>
            </tbody>
            <caption className="text-sm text-gray-500 my-2">
              (Source: NIRF Management Rankings 2024, UGC Distance Education
              Bureau)
            </caption>
          </table>
        </div>
      </section>
      <section className="section container">
        <h2 className="text-xl font-semibold py-4 md:text-2xl lg:text-3xl">
          {" "}
          🔮 Future Outlook for MBA Graduates
        </h2>
        <p className="text-xl lg:mb-8">
          By 2030, India is expected to need ~25 million new managers{" "}
          <span className="">(Source: IBEF & McKinsey).</span>
        </p>
        <div className="">
          <p>
            ✅ Rise of AI, Sustainability, Fintech, and Healthcare sectors
            creating fresh roles
          </p>
          <p>
            ✅ Demand for MBAs with digital skills: Data Analytics, Product
            Management, and Business Strategy
          </p>
          <p>
            ✅ Hybrid work cultures boosting leadership and remote management
            skills
          </p>
        </div>
      </section>
      <section className="section container">
        <h2 className="py-4">🌏 National & International Opportunities</h2>
        <p className="fw-bold">Top Industries Hiring in India</p>
        <ul className="">
          <li>IT/ITES (22%)</li>
          <li>Banking & Financial Services (19%)</li>
          <li>Consulting (15%)</li>
          <li>EdTech & E-commerce (12%)</li>
        </ul>

        <p className="fw-bold mt-8">Top Job Roles</p>
        <ul className="">
          <li>Management Consultant</li>
          <li>Business Analyst</li>
          <li>Financial Manager</li>
          <li>Product Manager</li>
          <li>HR Business Partner</li>
        </ul>

        <p className="fw-bold mt-8">International Demand</p>
        <ul className="">
          <li>
            USA: Management Analysts to grow by 11% by 2032 (US Bureau of Labor
            Statistics)
          </li>
          <li>
            UAE: Huge demand in Hospitality, Real Estate, and Financial Services
          </li>
          <li>
            Australia & Canada: Shortage of skilled managers in startups and
            SMEs
          </li>
        </ul>
        <div className="d-flex flex-column flex-lg-row justify-content-center gap-4 mt-4">
          <DownloadBrochureBtn />
          <ApplyNowBtn />
        </div>
      </section>
      <section className="section container">
        <h2 className="text-xl font-semibold py-4 md:text-2xl lg:text-3xl">
          🏆 Why Choose Online MBA Programs?
        </h2>
        <div className="d-flex flex-column flex-wrap flex-md-row justify-content-md-center">
          <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 NIRF-ranked Partner Universities
          </span>
          <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 UGC-DEB Approved Online Degrees
          </span>
          <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 NAAC A+ Accredited Institutions
          </span>
          <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 Affordable Fee Plans starting from ₹1.2 Lakhs{" "}
          </span>
          <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 100% Placement Assistance & Global Certifications
          </span>
          <span className="bg-success text-white fs-5 m-2 p-2 rounded">
            🌟 AI-driven Learning Platforms & Mentorship Programs
          </span>
        </div>
      </section>

      <section className="section container">
        <h2 className="text-xl font-semibold py-4 md:text-2xl lg:text-3xl">
          📑 Some Quick Numbers
          <span className="text-sm text-gray-500">
            {" "}
            (Source: UGC & AICTE 2025)
          </span>
        </h2>

        <table className="">
          <tbody className="overflow-x-auto">
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Stat</th>
              <th className="border px-4 py-2">Value</th>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Total Private Universities Offering Online MBA
              </td>
              <td className="border px-4 py-2">73</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Avg. Completion Rate for Online MBA Students
              </td>
              <td className="border px-4 py-2">87%</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Average Annual Package (Top 20%)
              </td>
              <td className="border px-4 py-2">₹14.5 LPA</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                % of Students Going for Entrepreneurship
              </td>
              <td className="border px-4 py-2">21%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section container">
        <p>
          🎥 Hear From Our Alumni Embedded video testimonials from successful
          alumni placed in companies like Deloitte, Amazon, Byju's, and
          Accenture.
        </p>
        <p>
          📞 Ready to Transform Your Career? 🔹 Apply Now | 🔹 Book a Free
          Counseling Session | 🔹 Download Course Brochure
        </p>
      </section>
    </div>
  );
};

export default page;
// This page is designed to provide a comprehensive overview of Online MBA programs, their benefits, trends,
// and future outlook.
