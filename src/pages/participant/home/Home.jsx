import React, { useState } from "react";
import styles from "./home.module.css";
import CurrentParticipant from "../../../components/currentparticipant/CurrentParticipant";

const Home = () => {
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut Zone",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.WelcomeText}>
            <img
              className={styles.logo_image}
              src="/images/logo.png"
              alt="location-img"
            />
            <img
              className={styles.locationImage}
              src="/images/homeLocation.png"
              alt="location-img"
            />
            {userData.place}
          </h2>
        </div>
        <div className={styles.currentparticipant}>
          <div className={styles.card}>
            <div className={styles.card_header}>
              <div className={styles.card_welcome_title_div}>
                <h1 className={styles.card_title}>Current participant</h1>
              </div>

              <div className={styles.image_div}>
                <img
                  src={userData.profileImage}
                  className={styles.user_image}
                  alt=""
                />
              </div>

              <h1 className={styles.card_name}>{userData.name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
