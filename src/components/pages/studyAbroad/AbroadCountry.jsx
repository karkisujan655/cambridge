import React from "react";
import { useParams, NavLink } from "react-router-dom";
import banner from "../../../images/banner/abroad.png";
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

const Australia = () => {
  const { countrySlug } = useParams();

  const menuItems = [
    {
      id: 0,
      title: "Why Study in Australia",
      path: "",
    },
    {
      id: 1,
      title: "Universities/Institutions",
      path: "",
    },
    {
      id: 2,
      title: "Cost",
      path: "",
    },
    {
      id: 3,
      title: "Scholorship",
      path: "",
    },
    {
      id: 4,
      title: "Apply Process",
      path: "",
    },
    {
      id: 5,
      title: "Requirements",
      path: "",
    },
  ];

  return (
    <div>
      {/* <h1>{countrySlug && countrySlug}</h1> */}
      <div className="study-abroad">
        <div className="country-banner">
          <img src={banner} alt="" className="country-banner-img" />
        </div>
        <div className="menu-nav">
          <div className="nav-items">
            {menuItems.map((menuItem) => {
              const { id = "", title = "" } = menuItem;
              return (
                <NavLink className=" option" key={id}>
                  {title}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="study-aus">
          <div className="content">Hello</div>
          <div className="form">hello</div>
        </div>
      </div>
    </div>
  );
};

export default Australia;

{
  /* <div className="study-aus">
          <h1 className="aus-heading">STUDY IN AUSTRALIA</h1>
          <div className="aus-first-part">
            <div className="box-one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque facere, unde similique vitae ullam distinctio inventore
              error perferendis dolorem accusantium esse quaerat aliquam
              corrupti amet aspernatur facilis corporis incidunt veritatis ipsam
              quia voluptatum velit rerum. Quae possimus et libero maxime earum
              optio eaque praesentium, labore necessitatibus omnis quis
              inventore. Doloremque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque facere, unde similique vitae ullam e.
              Doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Doloremque facere, unde similique vitae ullam distinctio
              inventore error perferendis dolorem accusantium esse quaerat
              aliquam corrupti amet aspernatur facilis corporis incidunt
              veritatis ipsam quia voluptatum velit rerum. Quae possimus et
              libero maxime earum optio eaque praesentium, labore distinctio
              inventore error perferendis dolorem accusantium esse quaerat
              aliquam corrupti amet aspernatur facilis corporis incidunt
              veritatis ipsam quia voluptatum velit rerum. Quae possimus et
              libero maxime earum optio eaque praesentium, labore necessitatibus
              omnis quis inventore. Doloremque!
            </div>
            <div className="box-two">
              <img src={aus} alt="" className="aus-img" />
            </div>
          </div>
          <div className="aus-second-part">
            <div className="box-three">
              <img src={std} alt="" className="aus-img" />
            </div>
            <div className="box-four">
              <h2 className="aus-why-heading">Why to Study in Australia ?</h2>
              Moreover, the Australian government has been heavily involved in
              building a ‘truly internationalized’ education system that is
              driven by research to address the challenges of the future. Almost
              $200,000,000 per annum is invested by the Australian government
              purely on international scholarships. Additionally, the diverse
              range of courses offered by Australian Universities has resulted
              in Australia being the 3rd most popular destination for
              international students. Moreover, 7 of the Top 100 Universities in
              the World are in Australia. All these specialties of Australia
              makes students dream about their future in Australia. Lorem ipsum
              Universities in the World are in Australia. All these specialties
              of Australia makes students dream about their future in Australia.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              iusto atque aliquid, veniam, sit, sapiente cumque inventore
              aperiam itaque optio animi fuga voluptas beatae sed reiciendis
              error fugiat facere excepturi!
            </div>
          </div>
          <div className="apply-aus">
            <h2 className="apply-aus-heading">How to apply for Australia?</h2>
            <p className="apply-aus-desc">
              To learn about the detailed description of admission process and
              get the equivalent advices regarding Study Process in Australia,
              students should first register themselves at Cambridge Institute
              of Technology. Shortly after the registration, students will be
              thoroughly guided through a number of key stages, maximizing their
              chances of getting admission at the University of their choice.
              Here is how the process goes-
            </p>
            <div className="apply-aus-box">
              <div className="box-five">
                <h3 className="apply-aus-desc-head">Registration</h3>
                <p className="apply-aus-desc">
                  First register yourself at Cambridge Institute of Technology
                  to obtain the best quality advices and details.
                </p>
                <h3 className="apply-aus-desc-head">Profiling</h3>

                <p className="apply-aus-desc">
                  Secondly we will make an assessment of your personal
                  information including academic qualifications, work
                  experiences, financial status, career goals as well as life
                  interests and aspirations.
                </p>
                <h3 className="apply-aus-desc-head">Standardized Tests</h3>

                <p className="apply-aus-desc">
                  After going through your profile, we evaluate the requirement
                  of any standardized test that you might need to take or revise
                  your results that has already been obtained.
                </p>
                <h3 className="apply-aus-desc-head">
                  University & Course Selection
                </h3>

                <p className="apply-aus-desc">
                  Then, we list down all the potential universities and courses
                  that matches your profile and interests.
                </p>
                <h3 className="apply-aus-desc-head">
                  Documentation and Editing
                </h3>

                <p className="apply-aus-desc">
                  We go through your documentation, check and correct your
                  writings including Statement of Purpose, Letters of
                  Recommendation and Resume and forward it for next process.
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
                  We assist you for the preparation of your interview. All
                  required tests and possible questions are provided to you in
                  order to build confidence in you for your interview with your
                  choice of university and courses.
                </p>
                <h3 className="apply-aus-desc-head">Visa Counselling</h3>

                <p className="apply-aus-desc">
                  We guide you through a step by step process for proper
                  documentation before submission of visa application. We assist
                  you from banking assistance to university enrollment process
                  and help you make your way for abroad study.
                </p>
                <h3 className="apply-aus-desc-head">
                  Pre-Departure Information
                </h3>

                <p className="apply-aus-desc">
                  We deliver comprehensive information about the country of your
                  choice to ensure that you are completely prepared for a new
                  life at an overseas university.
                </p>
              </div>
              <div className="box-six">
                <img src={applyAus} alt="" className="apply-aus-img" />
              </div>
            </div>
          </div>
          <div className="aus-requirement">
            <div className="box-seven">
              <img src={ausReq} alt="" className="aus-requir-img" />
            </div>
            <div className="box-eight">
              <h2 className="aus-requir-heading">
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
                • Other Certificates & Achievements of Extracurricular
                Activities
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
        </div> */
}
{
  /* <div className="study-can">
          <h1 className="can-heading">STUDY IN CANADA</h1>
          <div className="can-first-part">
            <div className="can-box-one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque facere, unde similique vitae ullam distinctio inventore
              error perferendis dolorem accusantium esse quaerat aliquam
              corrupti amet aspernatur facilis corporis incidunt veritatis ipsam
              quia voluptatum velit rerum. Quae possimus et libero maxime earum
              optio eaque praesentium, labore necessitatibus omnis quis
              inventore. Doloremque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque facere, unde similique vitae ullam e.
              Doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Doloremque facere, unde similique vitae ullam distinctio
              inventore error perferendis dolorem accusantium esse quaerat
              aliquam corrupti amet aspernatur facilis corporis incidunt
              veritatis ipsam quia voluptatum velit rerum. Quae possimus et
              libero maxime earum optio eaque praesentium, labore distinctio
              inventore error perferendis dolorem accusantium esse quaerat
              aliquam corrupti amet aspernatur facilis corporis incidunt
              veritatis ipsam quia voluptatum velit rerum. Quae possimus et
              libero maxime earum optio eaque praesentium, labore necessitatibus
              omnis quis inventore. Doloremque!
            </div>
            <div className="can-box-two">
              <img src={can} alt="" className="can-img" />
            </div>
          </div>
          <div className="can-second-part">
            <div className="can-box-three">
              <img src={stdCan} alt="" className="can-img" />
            </div>
            <div className="can-box-four">
              <h2 className="can-why-heading">Why to Study in Canada ?</h2>
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
              to study in Canada, read ahead and find out more. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Praesentium, eligendi
              dolor illum dolores est nostrum error quis odio quidem similique.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              quae odit, assumenda eveniet eum sed illum harum incidunt amet
              quod quidem nobis dolor maxime ab exercitationem quos! Quasi,
              adipisci nesciunt!
            </div>
          </div>
          <div className="can-third-part">
            <div className="can-box-five">
              <h2 className="can-uni-heading">
                List of Universities/Institutions in the Canada
              </h2>
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
            <div className="can-box-six">
              <img src={canUni} alt="" className="can-img" />
            </div>
          </div>
          <div className="can-fourth-part">
            <div className="can-box-seven">
              <img src={costCan} alt="" className="can-cost-img" />
            </div>
            <div className="can-box-eight">
              <h2 className="can-cost-heading">
                Education Cost for Studying in Canada
              </h2>
              Cost of higher education in Canada is quite affordable as compared
              to the cost in the UK, Australia, New Zealand and the US. Here is
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
          </div>
          <div className="can-fifth-part">
            <div className="can-box-nine">
              <h2 className="can-scholor-heading">
                Scholarships to Study in Canada
              </h2>
              <p className="can-scholor-desc">
                In order to capitalize on the available scholarships in Canada,
                we advise you to visit our offices as early as possible. We will
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
            <div className="can-box-ten">
              <img src={scholor} alt="" className="can-scholor-img" />
            </div>
          </div>
          <div className="apply-can">
            <h2 className="apply-can-heading">How to apply for Canada?</h2>
            <p className="apply-can-desc">
              To learn about the detailed description of admission process and
              get the equivalent advices regarding Study Process in Canada,
              students should first register themselves at Cambridge Institute
              of Technology. Shortly after the registration, students will be
              thoroughly guided through a number of key stages, maximizing their
              chances of getting admission at the University of their choice.
              Here is how the process goes-
            </p>
            <div className="apply-can-box">
              <div className="box-five">
                <h3 className="apply-can-desc-head">Registration</h3>
                <p className="apply-can-desc">
                  First register yourself at Cambridge Institute of Technology
                  to obtain the best quality advices and details.
                </p>
                <h3 className="apply-can-desc-head">Profiling</h3>

                <p className="apply-can-desc">
                  Secondly we will make an assessment of your personal
                  information including academic qualifications, work
                  experiences, financial status, career goals as well as life
                  interests and aspirations.
                </p>
                <h3 className="apply-can-desc-head">Standardized Tests</h3>

                <p className="apply-can-desc">
                  After going through your profile, we evaluate the requirement
                  of any standardized test that you might need to take or revise
                  your results that has already been obtained.
                </p>
                <h3 className="apply-can-desc-head">
                  University & Course Selection
                </h3>

                <p className="apply-can-desc">
                  Then, we list down all the potential universities and courses
                  that matches your profile and interests.
                </p>
                <h3 className="apply-can-desc-head">
                  Documentation and Editing
                </h3>

                <p className="apply-can-desc">
                  We go through your documentation, check and correct your
                  writings including Statement of Purpose, Letters of
                  Recommendation and Resume and forward it for next process.
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
                  We assist you for the preparation of your interview. All
                  required tests and possible questions are provided to you in
                  order to build confidence in you for your interview with your
                  choice of university and courses.
                </p>
                <h3 className="apply-can-desc-head">Visa Counselling</h3>

                <p className="apply-can-desc">
                  We guide you through a step by step process for proper
                  documentation before submission of visa application. We assist
                  you from banking assistance to university enrollment process
                  and help you make your way for abroad study.
                </p>
                <h3 className="apply-can-desc-head">
                  Pre-Departure Information
                </h3>

                <p className="apply-can-desc">
                  We deliver comprehensive information about the country of your
                  choice to ensure that you are completely prepared for a new
                  life at an overseas university.
                </p>
              </div>
              <div className="box-six">
                <img src={applyAus} alt="" className="apply-can-img" />
              </div>
            </div>
          </div>
          <div className="can-requirement">
            <div className="box-seven">
              <img src={canReq} alt="" className="can-requir-img" />
            </div>
            <div className="box-eight">
              <h2 className="can-requir-heading">
                Student Visa Requirements for Canada
              </h2>
              Here are the major lists of documents required while processing to
              cantralia:
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
                • Other Certificates & Achievements of Extracurricular
                Activities
              </p>
              <p className="apply-desc-note">
                {" "}
                Note: Documents required for individual universities and
                individual courses in Canada may vary. For more details about
                the Australia admissions process contact us at 01-4223815 |
                4256776
              </p>
            </div>
          </div>
        </div> */
}
{
  /* <div className="study-usa">
          <h1 className="usa-heading">STUDY IN USA</h1>
          <div className="usa-first-part">
            <div className="usa-box-one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque facere, unde similique vitae ullam distinctio inventore
              error perferendis dolorem accusantium esse quaerat aliquam
              corrupti amet aspernatur facilis corporis incidunt veritatis ipsam
              quia voluptatum velit rerum. Quae possimus et libero maxime earum
              optio eaque praesentium, labore necessitatibus omnis quis
              inventore. Doloremque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque facere, unde similique vitae ullam e.
              Doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Doloremque facere, unde similique vitae ullam distinctio
              inventore error perferendis dolorem accusantium esse quaerat
              aliquam corrupti amet aspernatur facilis corporis incidunt
              veritatis ipsam quia voluptatum velit rerum. Quae possimus et
              libero maxime earum optio eaque praesentium, labore distinctio
              inventore error perferendis dolorem accusantium esse quaerat
              aliquam corrupti amet aspernatur facilis corporis incidunt
              veritatis ipsam quia voluptatum velit rerum. Quae possimus et
              libero maxime earum optio eaque praesentium, labore necessitatibus
              omnis quis inventore. Doloremque!
            </div>
            <div className="usa-box-two">
              <img src={can} alt="" className="usa-img" />
            </div>
          </div> */
}
{
  /* <div className="usa-second-part">
            <div className="usa-box-three">
              <img src={stdCan} alt="" className="usa-img" />
            </div>
            <div className="usa-box-four">
              <h2 className="usa-why-heading">Why to Study in USA ?</h2>
              With some of the most prestigious and ancient institutions present
              in the USA, its influence over global power structures –
              politically, socially and economically – has never been more
              evident. Whether it’s the World Bank, the IMF, Goldman Sachs,
              Morgan Stanley or the Federal Reserve, all global establishments,
              private or public, are recruiting talent from the well-known
              institutions in the US. There is a breadth of knowledge in a
              diverse range of subjects that must be wired into, especially for
              aspiring leaders of the future. The networking experience and the
              learning gained during the time spent at a US institution will
              help you on the path towards excellence and eventually success. As
              a result of the diversity of modules, top quality faculty and the
              overall student cultural enhancement, their commitment to
              excellence remains evident in the most objective of measures.
              Also, 6 of the Top 10 Universities in the World are also in the
              United States. If you are planning to study in USA, get in touch
              with us via registering in our website and we will schedule a
              meeting with you for further career counselling. .
            </div>
          </div>
          <div className="usa-third-part">
            <div className="usa-box-five">
              <h2 className="usa-uni-heading">
                List of Universities/Institutions in the USA
              </h2>
              <p className="usa-uni-desc">• California Baptist University</p>
              <p className="usa-uni-desc">
                • California State University Chico
              </p>
              <p className="usa-uni-desc">
                • California State University Dominguez Hills
              </p>
              <p className="usa-uni-desc">
                • California State University Fresno
              </p>
              <p className="usa-uni-desc">
                • Columbia University – School of Professional Studies
              </p>
              <p className="usa-uni-desc">• Eastern Kentucky University</p>
              <p className="usa-uni-desc">
                • Hult International Business School
              </p>
              <p className="usa-uni-desc">• INTO – Marshall University</p>
              <p className="usa-uni-desc">• Le Cordon Bleu USA</p>
              <p className="usa-uni-desc">• Trent University</p>
              <p className="usa-uni-desc">• Marist College</p>
              <p className="usa-uni-desc">• Mercer University</p>
              <p className="usa-uni-desc">• New York Film Academy</p>
              <p className="usa-uni-desc">• Oklahoma City University</p>
              <p className="usa-uni-desc">
                • Southern New Hampshire University
              </p>
              <p className="usa-uni-desc">• Study Group-USA</p>
              <p className="usa-uni-desc">• University of Cincinnati (UC)</p>
              <p className="usa-uni-desc">• Upper Iowa University</p>
              <p className="usa-uni-desc">• Washington College</p>
              <p className="usa-uni-desc">• Western Kentucky University</p>
              <p className="usa-uni-desc">• California Baptist University</p>
            </div>
            <div className="usa-box-six">
              <img src={canUni} alt="" className="usa-img" />
            </div>
          </div>
          <div className="usa-fourth-part">
            <div className="usa-box-seven">
              <img src={costCan} alt="" className="usa-cost-img" />
            </div>
            <div className="usa-box-eight">
              <h2 className="usa-cost-heading">
                Education Cost for Studying in USA
              </h2>
              Cost of higher education in USA is quite affordable as compared to
              the cost in the UK, Australia, New Zealand and the US. Here is
              details about tuition fee in USA:
              <h3 className="usa-cost-sub-heading">Tuition Fee (USD$):</h3>
              <p className="usa-cost-desc">
                Undergraduate Bachelor Degree :$15,000
              </p>
              <p className="usa-cost-desc">
                Postgraduate Master’s Degree : $10,000 to $16,000
              </p>
              <p className="usa-cost-desc">
                Accommodation (CAD$) : $3000 – $7500
              </p>
              <p className="usa-cost-desc">
                Minimum Living cost (CAD$) : $30,000 per annum (Average Total)
              </p>
              <p className="usa-cost-note">
                Note: The average living cost for USA may vary according to
                location, university and individual.
              </p>
            </div>
          </div>
          <div className="usa-fifth-part">
            <div className="usa-box-nine">
              <h2 className="usa-scholor-heading">
                Scholarships to Study in USA
              </h2>
              <p className="usa-scholor-desc">
                In order to capitalize on the available scholarships in USA, we
                advise you to visit our offices as early as possible. We will
                provide you with complete information on the USA scholarship
                process. If we find you eligible for any scholarships category,
                you will be granted with one.
              </p>
              <p className="usa-scholor-desc">
                Students considering USA as abroad study are recommended to
                begin the application procedure 8-12 months prior to the intake.
                Scholarship deadlines vary amongst institutions.
              </p>
              <p className="usa-scholor-desc">
                <span className="scholor-span">Intakes</span>: January, May &
                September
              </p>
            </div>
            <div className="usa-box-ten">
              <img src={scholor} alt="" className="usa-scholor-img" />
            </div>
          </div> */
}
{
  /* <div className="apply-usa">
            <h2 className="apply-usa-heading">How to apply for USA?</h2>
            <p className="apply-usa-desc">
              To learn about the detailed description of admission process and
              get the equivalent advices regarding Study Process in USA,
              students should first register themselves at Cambridge Institute
              of Technology. Shortly after the registration, students will be
              thoroughly guided through a number of key stages, maximizing their
              chances of getting admission at the University of their choice.
              Here is how the process goes-
            </p>
            <div className="apply-usa-box">
              <div className="box-five">
                <h3 className="apply-usa-desc-head">Registration</h3>
                <p className="apply-usa-desc">
                  First register yourself at Cambridge Institute of Technology
                  to obtain the best quality advices and details.
                </p>
                <h3 className="apply-usa-desc-head">Profiling</h3>

                <p className="apply-usa-desc">
                  Secondly we will make an assessment of your personal
                  information including academic qualifications, work
                  experiences, financial status, career goals as well as life
                  interests and aspirations.
                </p>
                <h3 className="apply-usa-desc-head">Standardized Tests</h3>

                <p className="apply-usa-desc">
                  After going through your profile, we evaluate the requirement
                  of any standardized test that you might need to take or revise
                  your results that has already been obtained.
                </p>
                <h3 className="apply-usa-desc-head">
                  University & Course Selection
                </h3>

                <p className="apply-usa-desc">
                  Then, we list down all the potential universities and courses
                  that matches your profile and interests.
                </p>
                <h3 className="apply-usa-desc-head">
                  Documentation and Editing
                </h3>

                <p className="apply-usa-desc">
                  We go through your documentation, check and correct your
                  writings including Statement of Purpose, Letters of
                  Recommendation and Resume and forward it for next process.
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
                  We assist you for the preparation of your interview. All
                  required tests and possible questions are provided to you in
                  order to build confidence in you for your interview with your
                  choice of university and courses.
                </p>
                <h3 className="apply-usa-desc-head">Visa Counselling</h3>

                <p className="apply-usa-desc">
                  We guide you through a step by step process for proper
                  documentation before submission of visa application. We assist
                  you from banking assistance to university enrollment process
                  and help you make your way for abroad study.
                </p>
                <h3 className="apply-usa-desc-head">
                  Pre-Departure Information
                </h3>

                <p className="apply-usa-desc">
                  We deliver comprehensive information about the country of your
                  choice to ensure that you are completely prepared for a new
                  life at an overseas university.
                </p>
              </div>
              <div className="box-six">
                <img src={applyAus} alt="" className="apply-usa-img" />
              </div>
            </div>
          </div> */
}
{
  /* <div className="usa-requirement">
            <div className="box-seven">
              <img src={canReq} alt="" className="usa-requir-img" />
            </div>
            <div className="box-eight">
              <h2 className="usa-requir-heading">
                Student Visa Requirements for USA
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
                • Other Certificates & Achievements of Extracurricular
                Activities
              </p>
              <p className="apply-desc-note">
                {" "}
                Note: Documents required for individual universities and
                individual courses in USA may vary. For more details about the
                Australia admissions process contact us at 01-4223815 | 4256776
              </p>
            </div>
          </div> */
}
