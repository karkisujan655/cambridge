import React from "react";
import { useParams, NavLink } from "react-router-dom";
import banner from "../../../images/banner/abroadImg.jpeg";
import aus from "../../../images/studyAbroad/aus.jpg";
import std from "../../../images/studyAbroad/aus-study.webp";
import applyAus from "../../../images/studyAbroad/std-apply.jpg";
import ausReq from "../../../images/studyAbroad/std-require.jpg";
import can from "../../../images/studyAbroad/can.jpg";
import stdCan from "../../../images/studyAbroad/std-can.jpg";
import canUni from "../../../images/studyAbroad/uni-can.jpg";
import costCan from "../../../images/studyAbroad/cost-can.jpg";
import scholor from "../../../images/studyAbroad/scholor.jpg";
import canReq from "../../../images/studyAbroad/std-require-can.jpg";
import usa from "../../../images/studyAbroad/usa-page.jpg";

const AbroadCountry = () => {
  const { countrySlug } = useParams();

  const menuItems = {
    australia: [
      {
        id: 0,
        title: "Why Study in Australia",
        sectionLink: "why",
      },
      // {
      //   id: 1,
      //   title: "Universities/Institutions",
      //   sectionLink: "university",
      // },
      {
        id: 2,
        title: "Cost",
        sectionLink: "cost",
      },
      {
        id: 3,
        title: "Scholarship",
        sectionLink: "scholorship",
      },
      {
        id: 4,
        title: "Apply Process",
        sectionLink: "apply",
      },
      {
        id: 5,
        title: "Requirements",
        sectionLink: "requirements",
      },
    ],
    canada: [
      {
        id: 0,
        title: "Why Study in Canada",
        sectionLink: "why",
      },
      {
        id: 1,
        title: "Universities/Institutions",
        sectionLink: "university",
      },
      {
        id: 2,
        title: "Cost",
        sectionLink: "cost",
      },
      {
        id: 3,
        title: "Scholorship",
        sectionLink: "scholorship",
      },
      {
        id: 4,
        title: "Apply Process",
        sectionLink: "apply",
      },
      {
        id: 5,
        title: "Requirements",
        sectionLink: "requirements",
      },
    ],
    usa: [
      {
        id: 0,
        title: "Why Study in USA",
        sectionLink: "why",
      },
      {
        id: 1,
        title: "Universities/Institutions",
        sectionLink: "university",
      },
      {
        id: 2,
        title: "Cost",
        sectionLink: "cost",
      },
      {
        id: 3,
        title: "Scholorship",
        sectionLink: "scholorship",
      },
      {
        id: 4,
        title: "Apply Process",
        sectionLink: "apply",
      },
      {
        id: 5,
        title: "Requirements",
        sectionLink: "requirements",
      },
    ],
  };

  const selectedCountryNav = menuItems[countrySlug && countrySlug];

  const x = () => {
    if (countrySlug === "australia") {
      return (
        <div className="aus" title="aus">
          <div className="aus-info">
            <h1 className="study-aus-heading">Study Australia</h1>
            <p>
              Australia is a powerhouse of global education with fantastic
              long-term opportunities. The infrastructures, facilities, living
              environment, teaching methodologies and networking experiences are
              the reasons why studying in Australia has become so popular.{" "}
            </p>
          </div>
          <div className="why-study" id="why">
            <img src={aus} alt="" className="aus-img" />
            <h2 className="aus-why-heading"> Why to Study in Australia ?</h2>
            <p>
              Moreover, the Australian government has been heavily involved in
              building a ‘truly internationalized’ education system that is
              driven by research to address the challenges of the future. Almost
              $200,000,000 per annum is invested by the Australian government
              purely on international scholarships. Additionally, the diverse
              range of courses offered by Australian Universities has resulted
              in Australia being the 3rd most popular destination for
              international students. Moreover, 7 of the Top 100 Universities in
              the World are in Australia. All these specialties of Australia
              makes students dream about their future in Australia.
            </p>
          </div>
          {/* <div className="university" id="university">
            <h2 className="aus-why-heading">
              List of Universities/Institutions in the Australia
            </h2>
            <div className="uni">
              <p className="aus-uni-desc">• Centennial College</p>
              <p className="aus-uni-desc">• College of New Caledonia</p>
              <p className="aus-uni-desc">• Fanshawe College</p>
              <p className="aus-uni-desc">• George Brown College</p>
              <p className="aus-uni-desc">• Humber College</p>
              <p className="aus-uni-desc">• Kings University College</p>
              <p className="aus-uni-desc">• Langara College</p>
              <p className="aus-uni-desc">• NAVITAS-CANADA</p>
              <p className="aus-uni-desc">• Thomas University</p>
              <p className="aus-uni-desc">• Trent University</p>
              <p className="aus-uni-desc">• University of Manitoba</p>
              <p className="aus-uni-desc">• University of Waterloo</p>
              <p className="aus-uni-desc">• Vancouver Island University</p>
            </div>
          </div> */}
          <div className="cost" id="cost">
            <h2 className="aus-why-heading">
              Education Cost for Studying in Australia
            </h2>
            Cost of higher education in Canada is quite affordable as compared
            to the cost in the UK, Australia, New Zealand and the US. Here is
            details about tuition fee in Canada:
            <h3 className="aus-cost-sub-heading">Tuition Fee (AUD$):</h3>
            <p className="aus-cost-desc">
              Undergraduate Bachelor Degree :$15,000
            </p>
            <p className="aus-cost-desc">
              Postgraduate Master’s Degree : $10,000 to $16,000
            </p>
            <p className="aus-cost-desc">
              Accommodation (AUD$) : $3000 – $7500
            </p>
            <p className="aus-cost-desc">
              Minimum Living cost (AUD$) : $30,000 per annum (Average Total)
            </p>
            <p className="aus-cost-note">
              Note: The average living cost for Canada may vary according to
              location, university and individual.
            </p>
          </div>
          <div className="scholorship" id="scholorship">
            <h2 className="aus-why-heading">Scholarships to Study in Canada</h2>
            <p className="aus-scholor-desc">
              In order to capitalize on the available scholarships in Canada, we
              advise you to visit our offices as early as possible. We will
              provide you with complete information on the Canada scholarship
              process. If we find you eligible for any scholarships category,
              you will be granted with one.
            </p>
            <p className="aus-scholor-desc">
              Students considering Canada as abroad study are recommended to
              begin the application procedure 8-12 months prior to the intake.
              Scholarship deadlines vary amongst institutions.
            </p>
            <p className="aus-scholor-desc">
              <span className="scholor-span">Intakes</span>: January, May &
              September
            </p>
          </div>
          <div className="apply" id="apply">
            <h2 className="aus-why-heading">How to apply for Australia?</h2>
            <p>
              To learn about the detailed description of admission process and
              get the equivalent advices regarding Study Process in Australia,
              students should first register themselves at Cambridge Institute
              of Technology. Shortly after the registration, students will be
              thoroughly guided through a number of key stages, maximizing their
              chances of getting admission at the University of their choice.
              Here is how the process goes:
            </p>
            <h3 className="apply-aus-desc-head">Registration</h3>
            <p className="apply-aus-desc">
              First register yourself at Cambridge Institute of Technology to
              obtain the best quality advices and details.
            </p>
            <h3 className="apply-aus-desc-head">Profiling</h3>
            <p className="apply-aus-desc">
              Secondly we will make an assessment of your personal information
              including academic qualifications, work experiences, financial
              status, career goals as well as life interests and aspirations.
            </p>
            <h3 className="apply-aus-desc-head">Standardized Tests</h3>
            <p className="apply-aus-desc">
              After going through your profile, we evaluate the requirement of
              any standardized test that you might need to take or revise your
              results that has already been obtained.
            </p>
            <h3 className="apply-aus-desc-head">
              University & Course Selection
            </h3>
            <p className="apply-aus-desc">
              Then, we list down all the potential universities and courses that
              matches your profile and interests.
            </p>
            <h3 className="apply-aus-desc-head">Documentation and Editing</h3>
            <p className="apply-aus-desc">
              We go through your documentation, check and correct your writings
              including Statement of Purpose, Letters of Recommendation and
              Resume and forward it for next process.
            </p>
            <h3 className="apply-aus-desc-head">
              Application Review and Submission
            </h3>
            <p className="apply-aus-desc">
              Your complete application forms are then revised and reviewed
              before being submitted to your final choice of universities.
            </p>
            <h3 className="apply-aus-desc-head">Interview Preparation</h3>
            <p className="apply-aus-desc">
              We assist you for the preparation of your interview. All required
              tests and possible questions are provided to you in order to build
              confidence in you for your interview with your choice of
              university and courses.
            </p>
            <h3 className="apply-aus-desc-head">Visa Counselling</h3>
            <p className="apply-aus-desc">
              We guide you through a step by step process for proper
              documentation before submission of visa application. We assist you
              from banking assistance to university enrollment process and help
              you make your way for abroad study.
            </p>
            <h3 className="apply-aus-desc-head">Pre-Departure Information</h3>
            <p className="apply-aus-desc">
              We deliver comprehensive information about the country of your
              choice to ensure that you are completely prepared for a new life
              at an overseas university.
            </p>
          </div>
          <div className="requirements" id="requirements">
            <h2 className="aus-why-heading">
              Student Visa Requirements for Australia
            </h2>
            Here are the major lists of documents required while processing to
            Australia:
            <p className="apply-desc">
              • Attested copies of X, XII & Graduate Degree (if applicable),
              Mark Sheets including Backlogs (Resits){" "}
            </p>
            <p className="apply-desc">
              • Evidence of English Language proficiency tests e.g. IELTS,
              TOEFL, etc.
            </p>
            <p className="apply-desc">
              • Standardized Tests e.g. GMAT, GRE (where necessary for the
              program)
              <p className="apply-desc"> • Two academic references</p>
            </p>
            <p className="apply-desc">
              • Two references from employers (where applicable)
            </p>
            <p className="apply-desc">• Passport sized photographs</p>
            <p className="apply-desc">• Statement of Purpose (SOP)</p>
            <p className="apply-desc"> • Resume/CV </p>
            <p className="apply-desc">
              {" "}
              • Draft for application fees (if applicable)
            </p>
            <p className="apply-desc">
              {" "}
              • Portfolio (for Art, Design & Architecture Courses)
            </p>
            <p className="apply-desc">
              • Other Certificates & Achievements of Extracurricular Activities
            </p>
            <p className="apply-desc-note">
              {" "}
              Note: Documents required for individual universities and
              individual courses in Australia may vary. For more details about
              the Australia admissions process contact us at 01-4223815 |
              4256776
            </p>
          </div>
        </div>
      );
    } else if (countrySlug === "canada") {
      return (
        <div className="can">
          <div className="can-info">
            <h1 className="study-can-heading">Study Canada</h1>
            <p>
              Canada has consistently maintained its prestige as an attractive
              education hub due to varieties of factors including its global
              recognition, reputation, affordability, cultural exposure and
              abundant research opportunities.{" "}
            </p>
          </div>
          <div className="why-study" id="why">
            <img src={can} alt="" className="can-img" />
            <h2 className="can-why-heading"> Why to Study in Canada ?</h2>
            <p>
              Canada has established itself as an immensely high benchmark for
              academic standards and has rigorous processes to uphold quality
              that ultimately are designed to broaden opportunities for the
              longer term. For a country that measures high amongst the OECD
              countries in terms of its overall quality of life, its tuition
              fees and living costs are surprisingly lower than one may
              speculate, especially when compared with other supreme education
              hubs such as the USA and UK. Furthermore, a total of 13
              Universities from Canada are recognized in the world’s Top 200 by
              QS including 3 that appear to be in the Top 50. If you are looking
              to study in Canada, read ahead and find out more.
            </p>
          </div>
          <h2 className="can-why-heading" id="university">
            List of Universities/Institutions in the Canada
          </h2>
          <div className="uni">
            <p className="can-uni-desc">• Centennial College</p>
            <p className="can-uni-desc">• College of New Caledonia</p>
            <p className="can-uni-desc">• Fanshawe College</p>
            <p className="can-uni-desc">• George Brown College</p>
            <p className="can-uni-desc">• Humber College</p>
            <p className="can-uni-desc">• Kings University College</p>
            <p className="can-uni-desc">• Langara College</p>
            <p className="can-uni-desc">• NAVITAS-CANADA</p>
            <p className="can-uni-desc">• Thomas University</p>
            <p className="can-uni-desc">• Trent University</p>
            <p className="can-uni-desc">• University of Manitoba</p>
            <p className="can-uni-desc">• University of Waterloo</p>
            <p className="can-uni-desc">• Vancouver Island University</p>
          </div>
          <div className="cost" id="cost">
            <h2 className="can-why-heading">
              Education Cost for Studying in Canada
            </h2>
            Cost of higher education in Canada is quite affordable as compared
            to the cost in the UK, Canada, New Zealand and the US. Here is
            details about tuition fee in Canada:
            <h3 className="can-cost-sub-heading">Tuition Fee (CAD$):</h3>
            <p className="can-cost-desc">
              Undergraduate Bachelor Degree :$15,000
            </p>
            <p className="can-cost-desc">
              Postgraduate Master’s Degree : $10,000 to $16,000
            </p>
            <p className="can-cost-desc">
              Accommodation (CAD$) : $3000 – $7500
            </p>
            <p className="can-cost-desc">
              Minimum Living cost (CAD$) : $30,000 per annum (Average Total)
            </p>
            <p className="can-cost-note">
              Note: The average living cost for Canada may vary according to
              location, university and individual.
            </p>
          </div>
          <div className="scholorship" id="scholorship">
            <h2 className="can-why-heading">Scholarships to Study in Canada</h2>
            <p className="can-scholor-desc">
              In order to capitalize on the available scholarships in Canada, we
              advise you to visit our offices as early as possible. We will
              provide you with complete information on the Canada scholarship
              process. If we find you eligible for any scholarships category,
              you will be granted with one.
            </p>
            <p className="can-scholor-desc">
              Students considering Canada as abroad study are recommended to
              begin the application procedure 8-12 months prior to the intake.
              Scholarship deadlines vary amongst institutions.
            </p>
            <p className="can-scholor-desc">
              <span className="scholor-span">Intakes</span>: January, May &
              September
            </p>
          </div>
          <div className="apply" id="apply">
            <h2 className="can-why-heading">How to apply for Canada?</h2>
            <p>
              To learn about the detailed description of admission process and
              get the equivalent advices regarding Study Process in Canada,
              students should first register themselves at Cambridge Institute
              of Technology. Shortly after the registration, students will be
              thoroughly guided through a number of key stages, maximizing their
              chances of getting admission at the University of their choice.
              Here is how the process goes:
            </p>
            <h3 className="apply-can-desc-head">Registration</h3>
            <p className="apply-can-desc">
              First register yourself at Cambridge Institute of Technology to
              obtain the best quality advices and details.
            </p>
            <h3 className="apply-can-desc-head">Profiling</h3>
            <p className="apply-can-desc">
              Secondly we will make an assessment of your personal information
              including academic qualifications, work experiences, financial
              status, career goals as well as life interests and aspirations.
            </p>
            <h3 className="apply-can-desc-head">Standardized Tests</h3>
            <p className="apply-can-desc">
              After going through your profile, we evaluate the requirement of
              any standardized test that you might need to take or revise your
              results that has already been obtained.
            </p>
            <h3 className="apply-can-desc-head">
              University & Course Selection
            </h3>
            <p className="apply-can-desc">
              Then, we list down all the potential universities and courses that
              matches your profile and interests.
            </p>
            <h3 className="apply-can-desc-head">Documentation and Editing</h3>
            <p className="apply-can-desc">
              We go through your documentation, check and correct your writings
              including Statement of Purpose, Letters of Recommendation and
              Resume and forward it for next process.
            </p>
            <h3 className="apply-can-desc-head">
              Application Review and Submission
            </h3>
            <p className="apply-can-desc">
              Your complete application forms are then revised and reviewed
              before being submitted to your final choice of universities.
            </p>
            <h3 className="apply-can-desc-head">Interview Preparation</h3>
            <p className="apply-can-desc">
              We assist you for the preparation of your interview. All required
              tests and possible questions are provided to you in order to build
              confidence in you for your interview with your choice of
              university and courses.
            </p>
            <h3 className="apply-can-desc-head">Visa Counselling</h3>
            <p className="apply-can-desc">
              We guide you through a step by step process for proper
              documentation before submission of visa application. We assist you
              from banking assistance to university enrollment process and help
              you make your way for abroad study.
            </p>
            <h3 className="apply-can-desc-head">Pre-Departure Information</h3>
            <p className="apply-can-desc">
              We deliver comprehensive information about the country of your
              choice to ensure that you are completely prepared for a new life
              at an overseas university.
            </p>
          </div>
          <div className="requirements" id="requirements">
            <h2 className="can-why-heading">
              Student Visa Requirements for Canada
            </h2>
            Here are the major lists of documents required while processing to
            Canada:
            <p className="apply-desc">
              • Attested copies of X, XII & Graduate Degree (if applicable),
              Mark Sheets including Backlogs (Resits){" "}
            </p>
            <p className="apply-desc">
              • Evidence of English Language proficiency tests e.g. IELTS,
              TOEFL, etc.
            </p>
            <p className="apply-desc">
              • Standardized Tests e.g. GMAT, GRE (where necessary for the
              program)
              <p className="apply-desc"> • Two academic references</p>
            </p>
            <p className="apply-desc">
              • Two references from employers (where applicable)
            </p>
            <p className="apply-desc">• Passport sized photographs</p>
            <p className="apply-desc">• Statement of Purpose (SOP)</p>
            <p className="apply-desc"> • Resume/CV </p>
            <p className="apply-desc">
              {" "}
              • Draft for application fees (if applicable)
            </p>
            <p className="apply-desc">
              {" "}
              • Portfolio (for Art, Design & Architecture Courses)
            </p>
            <p className="apply-desc">
              • Other Certificates & Achievements of Extracurricular Activities
            </p>
            <p className="apply-desc-note">
              {" "}
              Note: Documents required for individual universities and
              individual courses in Canada may vary. For more details about the
              Canada admissions process contact us at 01-4223815 | 4256776
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="usa">
          <div className="why-study" id="why">
            <div className="usa-info">
              <h1 className="study-usa-heading">Study America</h1>
              <p>
                America has consistently maintained its prestige as an
                attractive education hub due to varieties of factors including
                its global recognition, reputation, affordability, cultural
                exposure and abundant research opportunities.{" "}
              </p>
            </div>
            <img src={usa} alt="" className="usa-img" />
            <h2 className="usa-why-heading"> Why to Study in America ?</h2>
            <p>
              America has established itself as an immensely high benchmark for
              academic standards and has rigorous processes to uphold quality
              that ultimately are designed to broaden opportunities for the
              longer term. For a country that measures high amongst the OECD
              countries in terms of its overall quality of life, its tuition
              fees and living costs are surprisingly lower than one may
              speculate, especially when compared with other supreme education
              hubs such as the USA and UK. Furthermore, a total of 13
              Universities from America are recognized in the world’s Top 200 by
              QS including 3 that appear to be in the Top 50. If you are looking
              to study in America, read ahead and find out more.
            </p>
          </div>
          <div className="university" id="university">
            <h2 className="usa-why-heading">
              List of Universities/Institutions in the America
            </h2>
            <div className="uni">
              <p className="usa-uni-desc">• Centennial College</p>
              <p className="usa-uni-desc">• College of New Caledonia</p>
              <p className="usa-uni-desc">• Fanshawe College</p>
              <p className="usa-uni-desc">• George Brown College</p>
              <p className="usa-uni-desc">• Humber College</p>
              <p className="usa-uni-desc">• Kings University College</p>
              <p className="usa-uni-desc">• Langara College</p>
              <p className="usa-uni-desc">• NAVITAS-America</p>
              <p className="usa-uni-desc">• Thomas University</p>
              <p className="usa-uni-desc">• Trent University</p>
              <p className="usa-uni-desc">• University of Manitoba</p>
              <p className="usa-uni-desc">• University of Waterloo</p>
              <p className="usa-uni-desc">• Vancouver Island University</p>
            </div>
          </div>
          <div className="cost" id="cost">
            <h2 className="usa-why-heading">
              Education Cost for Studying in America
            </h2>
            Cost of higher education in America is quite affordable as compared
            to the cost in the UK, America, New Zealand and the US. Here is
            details about tuition fee in America:
            <h3 className="usa-cost-sub-heading">Tuition Fee (USD$):</h3>
            <p className="usa-cost-desc">
              Undergraduate Bachelor Degree :$15,000
            </p>
            <p className="usa-cost-desc">
              Postgraduate Master’s Degree : $10,000 to $16,000
            </p>
            <p className="usa-cost-desc">
              Accommodation (USD$) : $3000 – $7500
            </p>
            <p className="usa-cost-desc">
              Minimum Living cost (USD$) : $30,000 per annum (Average Total)
            </p>
            <p className="usa-cost-note">
              Note: The average living cost for America may vary according to
              location, university and individual.
            </p>
          </div>
          <div className="scholorship" id="scholorship">
            <h2 className="usa-why-heading">
              Scholarships to Study in America
            </h2>
            <p className="usa-scholor-desc">
              In order to capitalize on the available scholarships in America,
              we advise you to visit our offices as early as possible. We will
              provide you with complete information on the America scholarship
              process. If we find you eligible for any scholarships category,
              you will be granted with one.
            </p>
            <p className="usa-scholor-desc">
              Students considering America as abroad study are recommended to
              begin the application procedure 8-12 months prior to the intake.
              Scholarship deadlines vary amongst institutions.
            </p>
            <p className="usa-scholor-desc">
              <span className="scholor-span">Intakes</span>: January, May &
              September
            </p>
          </div>
          <div className="apply" id="apply">
            <h2 className="usa-why-heading">How to apply for America?</h2>
            <p>
              To learn about the detailed description of admission process and
              get the equivalent advices regarding Study Process in America,
              students should first register themselves at Cambridge Institute
              of Technology. Shortly after the registration, students will be
              thoroughly guided through a number of key stages, maximizing their
              chances of getting admission at the University of their choice.
              Here is how the process goes:
            </p>
            <h3 className="apply-usa-desc-head">Registration</h3>
            <p className="apply-usa-desc">
              First register yourself at Cambridge Institute of Technology to
              obtain the best quality advices and details.
            </p>
            <h3 className="apply-usa-desc-head">Profiling</h3>
            <p className="apply-usa-desc">
              Secondly we will make an assessment of your personal information
              including academic qualifications, work experiences, financial
              status, career goals as well as life interests and aspirations.
            </p>
            <h3 className="apply-usa-desc-head">Standardized Tests</h3>
            <p className="apply-usa-desc">
              After going through your profile, we evaluate the requirement of
              any standardized test that you might need to take or revise your
              results that has already been obtained.
            </p>
            <h3 className="apply-usa-desc-head">
              University & Course Selection
            </h3>
            <p className="apply-usa-desc">
              Then, we list down all the potential universities and courses that
              matches your profile and interests.
            </p>
            <h3 className="apply-usa-desc-head">Documentation and Editing</h3>
            <p className="apply-usa-desc">
              We go through your documentation, check and correct your writings
              including Statement of Purpose, Letters of Recommendation and
              Resume and forward it for next process.
            </p>
            <h3 className="apply-usa-desc-head">
              Application Review and Submission
            </h3>
            <p className="apply-usa-desc">
              Your complete application forms are then revised and reviewed
              before being submitted to your final choice of universities.
            </p>
            <h3 className="apply-usa-desc-head">Interview Preparation</h3>
            <p className="apply-usa-desc">
              We assist you for the preparation of your interview. All required
              tests and possible questions are provided to you in order to build
              confidence in you for your interview with your choice of
              university and courses.
            </p>
            <h3 className="apply-usa-desc-head">Visa Counselling</h3>
            <p className="apply-usa-desc">
              We guide you through a step by step process for proper
              documentation before submission of visa application. We assist you
              from banking assistance to university enrollment process and help
              you make your way for abroad study.
            </p>
            <h3 className="apply-usa-desc-head">Pre-Departure Information</h3>
            <p className="apply-usa-desc">
              We deliver comprehensive information about the country of your
              choice to ensure that you are completely prepared for a new life
              at an overseas university.
            </p>
          </div>
          <div className="requirements" id="requirements">
            <h2 className="usa-why-heading">
              Student Visa Requirements for America
            </h2>
            Here are the major lists of documents required while processing to
            America:
            <p className="apply-desc">
              • Attested copies of X, XII & Graduate Degree (if applicable),
              Mark Sheets including Backlogs (Resits){" "}
            </p>
            <p className="apply-desc">
              • Evidence of English Language proficiency tests e.g. IELTS,
              TOEFL, etc.
            </p>
            <p className="apply-desc">
              • Standardized Tests e.g. GMAT, GRE (where necessary for the
              program)
              <p className="apply-desc"> • Two academic references</p>
            </p>
            <p className="apply-desc">
              • Two references from employers (where applicable)
            </p>
            <p className="apply-desc">• Passport sized photographs</p>
            <p className="apply-desc">• Statement of Purpose (SOP)</p>
            <p className="apply-desc"> • Resume/CV </p>
            <p className="apply-desc">
              {" "}
              • Draft for application fees (if applicable)
            </p>
            <p className="apply-desc">
              {" "}
              • Portfolio (for Art, Design & Architecture Courses)
            </p>
            <p className="apply-desc">
              • Other Certificates & Achievements of Extracurricular Activities
            </p>
            <p className="applcountrySlugy-desc-note">
              {" "}
              Note: Documents required for individual universities and
              individual courses in America may vary. For more details about the
              America admissions process contact us at 01-4223815 | 4256776
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {/* <h1>{countrySlug && countrySlug}</h1> */}
      <div className="study-abroad">
        <div className="country-banner">
          <img src={banner} alt="" className="country-banner-img" />
        </div>
        <div className="menu-nav">
          <div className="nav-items">
            {selectedCountryNav &&
              selectedCountryNav.map((menuItem) => {
                const { id = "", title = "", sectionLink = "" } = menuItem;
                return (
                  <a className=" option" key={id} href={`#${sectionLink}`}>
                    {/* href="#requirements" */}
                    {title}
                  </a>
                );
              })}
          </div>
        </div>
        <div className="study">
          <div className=" content">{x()}</div>
          <div className="form">
            <div className="box">
              <h2 className="head">
                Make your dreams of studying abroad come true
              </h2>
              <div className="input-area">
                <input type="text" placeholder="Name" className="text-box" />
                <input type="email" placeholder="Email" className="text-box" />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="text-box"
                />
              </div>
              <button className="submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadCountry;
