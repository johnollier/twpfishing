import React from "react";
import Image from "next/image";
import Link from "next/link";

const HealthAndSafetyPage = () => {
  return (
    <>
      <h1 className="margin--30">Health and Safety</h1>
      <div>
        <Image
          src="/images/IMG_9630-1500.jpg"
          alt="boulders"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div id="health-and-safety-content">
        <p>
          The Health and Safety at Work Act 1974 and the associated regulations,
          impose legal duties and responsibilities upon the club to safeguard
          the well-being of the members and any other persons who may be
          affected by the clubs working and recreational activities.{" "}
        </p>
        <p>
          The club is committed to do all that is practicable to prevent injury
          and damage to property. The club will have due regard to the
          protection of all people who come into contact with the club.{" "}
        </p>
        <p>
          The full text of the club’s policy can be read here and can also be
          printed.{" "}
        </p>
        <p>
          <strong>Ian Parker </strong>
        </p>
        <p>
          <strong>Chairman of the Tavy Walkham and Plym Fishing Club </strong>
        </p>
      </div>
    </>
  );
};

export default HealthAndSafetyPage;
