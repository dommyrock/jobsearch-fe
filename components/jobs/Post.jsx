import Link from "next/link";
import { React,useEffect, memo,useRef, useState } from "react";
import {
  job_a_class,
  job_card_header,
  job_card_title,
  job_card_button,
  job_div_flex_row,
  job_flex,
  job_tags,
  pre_card_content,
} from "../../styles/job.module.css";

const Post = memo(function Post({ job }) {
  const divRef = useRef(null);
  const [buttons, setButtons] = useState("initial"); 
  //TODO : For mobile view remove short description and just show title and locations
  //also copy Apply button = link inside this div if it exists for current job

  const handleClick = (event) => {
    //disable parent link being followed
    event.preventDefault();
    setButtons("duoButtons");
  };
  const handleCopyToClipboard = (e) => {
    e.preventDefault();
    e.target.style.background = "#84d8843d";
    navigator.clipboard.writeText(job.company_id); //replace this with prop.jobLink in prod
  };
  const handleMailBtnClick = (e) => {
    e.preventDefault();
    e.target.style.background = "#84d8843d";
    //TODO :replace this with real link when api is done, also replace <a> href mailto bellow
    window.open(
      "mailto:?subject=Infrastructure Architect, Google Cloud Professional Services&body=Check out this job: https://careers.google.com/jobs/results/92583004368446150",
      "_blank"
    );
  };

  useEffect(() => {
    //inject description into DOM(to be rendered as html, not string)
    divRef.current.innerHTML = job.summary;
    let dat = job
    debugger
  }, []);

  return (
    <li>
      <Link href="/job/[id]" as={`/job/${2222222222222222}`}>
        <a className={job_a_class}>
          <div itemScope="itemscope" itemType="http://schema.org/JobPosting">
            <div className={job_card_header}>
              <ul style={{ float: "right" }}>
                <li>
                  <div>
                    {buttons === "initial" ? (
                      <button
                        aria-label="Share Director, Cloud Business &amp; Systems Resilience Programs"
                        className={job_card_button}
                        onClick={(e) => handleClick(e)}
                      >
                        <svg
                          width="28"
                          height="28"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          role="presentation"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginRight: "8px" }}
                        >
                          <g>
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                          </g>
                        </svg>
                        Share
                      </button>
                    ) : (
                      <>
                        {/* RENDER SHARE AND EMAIL BUTTONS */}
                        <a
                          href="mailto:?subject=Infrastructure%20Architect%2C%20Google%20Cloud%20Professional%20Services&amp;body=Check%20out%20this%20job%3A%20https%3A%2F%2Fcareers.google.com%2Fjobs%2Fresults%2F92583004368446150%2F."
                          target="_blank"
                          rel="noopener noreferrer"
                          data-gtm-ref="job-actions-email-to-a-friend"
                        >
                          <button
                            aria-label="Share Director, Cloud Business &amp; Systems Resilience Programs"
                            className={job_card_button}
                            style={buttonInline_style}
                            onClick={(e) => handleMailBtnClick(e)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#fff"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width="25"
                              height="25"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        </a>
                        <button
                          aria-label="Share Director, Cloud Business &amp; Systems Resilience Programs"
                          className={job_card_button}
                          onClick={(e) => handleCopyToClipboard(e)}
                          style={buttonInline_style}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="25"
                            height="25"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                            />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </li>
                {/* TODO : ADD Company icon here if it exists in cdn else show default svg */}
              </ul>
              <h2 itemProp="title" className={job_card_title}>
                {job.title}
              </h2>
              <div className={job_div_flex_row}>
                <ul className={`${job_tags} ${job_flex}`}>
                  <li
                    itemScope="itemscope"
                    itemType="http://schema.org/Organization"
                    itemProp="hiringOrganization"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="16"
                      height="16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span itemProp="name">{job.company_name}</span>
                    <meta
                      content="/jobs/dist/img/assets/g-logo.5fe50104e092c1d56f8cb7575e9a1766.png"
                      itemProp="logo"
                    />
                  </li>
                  <li
                    itemScope="itemscope"
                    itemType="http://schema.org/Place"
                    itemProp="jobLocation"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 18 24"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                      </g>
                    </svg>
                    <div
                      itemProp="address"
                      itemScope="itemscope"
                      itemType="http://schema.org/PostalAddress"
                      style={{ display: "flex" }}
                    >
                      <div itemProp="addressLocality">Sunnyvale</div> <div>,&nbsp;</div>
                      <div itemProp="addressRegion">CA</div> <div>,&nbsp;</div>
                      <div itemProp="addressCountry">USA</div>
                    </div>
                  </li>
                </ul>
              </div>
              <meta
                content="In this role, you will join the Enterprise Resilience Services team in Global Security and Resilience Services (GSRS) to lead the Cloud area ecosystem in the acceleration of innovative business and systems resilience programs. Not unlike Google’s forward-looking technology, our approach to enterprise resilience takes business continuity to the next level. Through a coordinated security and resilience program framework, we are helping teams meet enterprise and user expectations during times of disruption.  In this role, you will collaborate with global GSRS peers, business continuity, reliability experts and Cloud professionals who are responsible for resilience within different parts of Cloud and Google. You will execute a variety of business and systems resilience projects through tasks and actions along a time management continuum. You will focus on meeting program commitments, including ongoing communications with management sponsors, customer stakeholders and project teams. You will help to implement the integrated framework and processes that encourage interconnected readiness and response protocols as we embrace an all-hazards, risk-based approach to incident management. You will work with compliance teams to ensure we are resilience ready, and with continual improvement at Google’s core, you will work with analytics teams to monitor and report on performance.From keeping Googlers safe and secure to managing disruptive events, the ability to anticipate, deter, detect, and act are the pillars of Google’s Global Security and Resilience Services (GSRS) team. As a member of GSRS you will help develop a culture where safety, security and resiliency are integrated into every facet of Google, including the creative process. You will help us continually identify, evaluate and monitor enterprise risks that could affect business activities and provide business leaders the information they need to make critical decisions. You'll collaborate with cross-functional teams to create innovative strategies and develop programs that drive sustainable effectiveness."
                itemProp="description"
              />
              <meta content="2021-02-05T23:30:43.614Z" itemProp="datePosted" />
            </div>
            <div className={pre_card_content}>
              <h3>Qualifications:</h3>
              {/* PASS REF HERE SO I CAN INSERT CARD DESCRIPTION INTO DOM FOR EACH CARD  */}
              <div itemProp="qualifications" ref={divRef}></div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
});

export default Post;

const buttonInline_style = {
  padding: "3px",
  background: "#ccc3",
  borderRadius: "5px",
  marginLeft: "4px",
};
