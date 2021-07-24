import React from "react";
import SignIn3 from "./New";
import styles from "./After_sign_in_2.module.css";
const SignIn3mix = () => {
  return (
    <>
      <div className={styles.signin3_main}>
        <h2>What's new at glassdoor</h2>
        <div className={styles.signin3_inner}>
          <SignIn3
            img="https://blog-consumer.glassdoor.com/site-us/app/uploads/sites/2/thompsonhomonnay_glassdoor_27-390x193.jpg"
            h4="5 Ways to Know If You’re Making Less Than Your Coworkers"
            p="Knowing where you stand in terms of compensation compared to it’s time to ask for a raise..."
            btn="Read the Blog"
          />
          <SignIn3
            img="https://media.glassdoor.com/home/feature-link/ca/iStock_81884597_MEDIUM-750x370.jpg"
            h4="Do Race & Gender Play a Role in Salary Negotiations? A New Study Says Yes"
            p="Making the case for a promotion or raise is a nerve-wracking process for any employee, but is it a fair playing field..."
            btn="Read Blog Post"
          />
          <SignIn3
            img="https://blog-consumer.glassdoor.com/site-us/app/uploads/sites/2/GettyImages-601394282-e1543596187398-390x193.jpg"
            h4="Glassdoor's Employees' Choice Awards 2019 and Best Employee Award"
            p="Glassdoor's annual Employees' Choice Awards honor the Best Places to Work across North America and parts of Europe."
            btn="See the 2019 List"
          />
        </div>
      </div>
    </>
  );
};

export default SignIn3mix;
