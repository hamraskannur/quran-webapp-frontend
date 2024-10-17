import React, { useState } from "react";
import styles from "./QuestionAnswerPage.module.css";
import NextButton from "../../../components/buttons/next-button/NextButton";
import NavBar from "../../../components/navBar/NavBar";
import QuestionsList from "../../../components/questions-answers/QuestionList";
import QuestionAnswerCard from "../../../components/questionanswercard/QuestionAnswerCard";
import Timer5 from "../../../components/timer/Timer";

function QuestionAnswerPage() {
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut Zone",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });

  const data = ["qId1", "qId2", "qId3", "qId4", "qId5", "qId6", "qId7"];

  return (
    <div className={styles.section}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.WelcomeText}>
            <img
              className={styles.locationImage}
              src="/images/homeLocation.png"
              alt="location-img"
            />
            {userData.place}
          </h2>
          <div className={styles.userDetailes}>
            <h2 className={styles.WelcomeText}>
              <img
                className={styles.profileImage}
                src={userData.profileImage}
                alt="location-img"
              />
              <span className={styles.nameText}>{userData.name}</span>
            </h2>
          </div>
        </div>
        <div className="flex">
          <h1 className={styles.main_title}>Questions List</h1>
          <Timer5 />
        </div>

        <div className={styles.currentparticipant}>
          <QuestionsList QuestionNumber={3} Questions={data} />
          <div className={styles.question_main}>
            <QuestionAnswerCard
              titile={"Question 1"}
              border={"#C19D5C"}
              descrption={"What are some other names for the Quran?"}
            />
            <QuestionAnswerCard
              titile={"Answer"}
              border={"#0B9D64"}
              descrption={
                "The Quran is also known as Al-Furqaan, Al-Kitaab, Al-Zikr, Al-Noor, and Al-HudaThe Quran is also known as Al-Furqaan, Al-Kitaab, Al-Zikr, Al-Noor, and Al-Huda"
              }
            />
            <textarea
              rows={8}
              cols="50"
              type="text"
              className={styles.main_section}
              placeholder="Participant’s Answer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswerPage;
