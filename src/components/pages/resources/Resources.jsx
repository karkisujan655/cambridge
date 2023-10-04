import { Accordion } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../../images/resources/banner.jpg";
import FAQ from "./Accordion";

const Resources = () => {
  const { resourcesSlug } = useParams();

  const x = () => {
    if (resourcesSlug === "faq") {
      return <FAQ />;
    } else if (resourcesSlug === "sop") {
      return (
        <div className="sop">
          <h1 className="sop-title">SOP- Statement Of Purpose</h1>
          <h2 className="sop-sub-title">Guidelines</h2>
          <h3 className="guide-title">1. Introduction</h3>
          <p className="desc">
            ✔ This paragraph encompasses your self-definition, personal
            background, including your origin, and information about your family
            connections.
          </p>
          <h3 className="guide-title">2. Academic Qualifications</h3>
          <p className="desc">
            ✔ Students should compose their academic achievements, prioritizing
            a chronological sequence to facilitate clarity and identify any
            study gaps. In the event of such gaps, it is imperative to provide a
            clear explanation of activities undertaken during those intervals.
          </p>
          <h3 className="guide-title">
            3. IELTS / Work Experience / Internships
          </h3>
          <p className="desc">
            ✔ This information can alternatively be included in the preceding
            paragraph, as these gaps can be explained by these factors. It is
            advisable for students to provide a comprehensive description of
            their job roles, including the company name and their specific
            responsibilities during their job or internship experiences if
            applicable.
          </p>
          <p className="desc">
            ✔ If there is an English for Academic Purposes (EAP) Program
            offered, it is crucial to outline the merits of this program in
            separate paragraphs, emphasizing its importance as a preliminary
            stage before embarking on the main course of study.
          </p>
          <h3 className="guide-title">4. Why choose this course?</h3>
          <p className="desc">✔ Intrest on the Course</p>
          <p className="desc">✔ Career Outcomes</p>
          <p className="desc">✔ What do you expect to learn from this course</p>
          <h3 className="guide-title">5. Why you choose Australia?</h3>
          <p className="desc">
            ✔ Why not in Nepal or any other destination and why Australia?
          </p>
          <h3 className="guide-title">
            6. Why did you choose this university or College?
          </h3>
          <p className="desc">
            ✔ It is better if the student first visits the website of the
            university. It is clearly written on their website
          </p>
          <p className="desc">
            ✔ Assessing the university and college against a minimum of five
            other educational institutions with regard to tuition fees,
            available courses or specializations, geographical location, class
            sizes, language prerequisites, and additional factors.
          </p>
          <h3 className="guide-title">7. Future career and Plans</h3>
          <p className="desc">
            ✔ In this section, you are required to outline your aspirations and
            plans following the completion of your studies in Australia. You may
            discuss your desire to acquire work experience through internships
            during the Post Study Visa Period, but it's important not to
            indicate any intention of remaining in Australia solely for
            employment purposes. Describing your post-study goals is a critical
            aspect of your application. Expressing a clear intention to return
            to your home country with valid reasons is highly favorable, and
            it's essential for students not to overlook this point.
          </p>
          <p className="desc">
            ✔ Additionally, ensure that you have some understanding of the
            Government of Nepal's perspective on your selected field, including
            potential upcoming projects, investments, and their overall
            approach. Explain how you can become involved in these projects,
            using the knowledge and skills you acquire in Australia to make a
            meaningful contribution to your community.
          </p>
          <p className="desc">
            ✔ Make sure that obtaining a qualification while gaining work
            experience in Australia also enhances your communication skills,
            making you a more suitable candidate for high-paying jobs in Nepal
            upon your return. Your investment in education in Australia is bound
            to yield lifelong rewards, fostering qualities such as confidence,
            creativity, and a strong work ethic during your study stay in the
            country.
          </p>
          <h3 className="guide-title">8. Sponsors</h3>
          <p className="desc">
            ✔ Could you please provide details about your financial plan to fund
            your education and living expenses in Australia? Specifically,
            identify your sponsors, typically, which are your parents.
          </p>
          <h3 className="guide-title">
            9. Reasons to come back Home country Nepal
          </h3>
          <p className="desc">
            ✔ Demonstrate strong reasons to come back to home country through
            datas and research on your field; Governmment plans and policies in
            your respective field,similarly initiatives of NGO, INGO as well.
          </p>
          <p>
            Explain the bond of family and relatives, property inheritance,
            cultural and social values of family and society and reasons to come
            back to your loved ones
          </p>
          <h3 className="guide-title">10. Visa Conditions</h3>
          <p className="desc">
            ✔ As an international student, it is crucial to have a clear
            understanding of specific visa responsibilities associated with the
            Student Visa Subclass 500. In your own words, outline and describe
            these visa obligations.
          </p>
          <h3 className="guide-title">11. Conclusion</h3>
          <p className="desc">
            ✔Expressing gratitude to the visa office for their time and
            thoughtful consideration has consistently been a significant element
            of a Statement of Purpose (SOP). Extend a warm greeting and convey
            your sincere appreciation to the visa officer. Additionally, in
            concluding your SOP, you may politely request their favorable
            decision to grant you the visa, which would enable you to pursue
            your studies, thereby establishing a further connection.
          </p>
        </div>
      );
    } else {
      return (
        <div className="interview">
          <h1 className="interview-title">Possible Interview Questions</h1>
          <h3 className="guide-title">Top Seven Interview Questions </h3>
          <p className="desc">
            ✔ Why did you choose this University/Instituion for your further
            studies?
          </p>
          <p className="desc">✔ Why do you want to go to this country?</p>
          <p className="desc">✔ How long will you be staying?</p>
          <p className="desc">✔ Where will you be staying?</p>
          <p className="desc">✔ What do you intend to do after your studies?</p>
          <p className="desc">✔ Do you have any relatives in the (Country)?</p>
          <p className="desc">✔ Do you have a family?</p>
          <p className="desc">
            ✔ Who is sponsoring you? Why is he/ she sponsoring you?
          </p>
          <p className="desc">✔ What program of study are you going for?</p>
          <p className="desc">✔ What is the scope of your program?</p>
          <p className="desc">
            ✔ How is your past education relevant for your intended course?
          </p>
          <p className="desc">✔ What are your Future Plans?</p>

          <h3 className="guide-title">Keys for the Successful Interviews </h3>
          <p className="desc">✔ Confidence</p>
          <p className="desc">✔ Clear voice</p>
          <p className="desc">
            ✔ When addressing questions, it is important to provide
            comprehensive responses that go beyond simple "yes" or "no" answers.
            Instead, offer explanations by including the word "because" to
            provide a more thorough and informative reply.
          </p>
          <p className="desc">
            ✔ Stay in a quiet place at the time of telephone interview
          </p>
          <p className="desc">
            ✔ Thoroughly acquaint yourself with the contents of your offer
            letter and all accompanying documents, paying special attention to
            details related to financial matters.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="resources">
      <img src={Banner} alt="" className="resources-banner" />
      <div className="content">{x()}</div>
    </div>
  );
};

export default Resources;
