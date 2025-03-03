import React from "react";
import Image from "next/image";

const HealthAndSafetyPage = () => {
  return (
    <>
      <h1 className="margin--30">Privacy</h1>
      <div>
        <Image
          src="/images/IMG_1216-1500.jpg"
          alt="cascade"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div id="privacy-content">
        <h2>
          Tavy Walkham and Plym Fishing Club Privacy Policy - Data Protection
          Act 2018
        </h2>
        <p>
          The attached document gives details about how the club collects and
          processes personal data including data collected through the website,
          from enquiries and from the purchase of permits at the club&apos;s
          agents. It applies to club members and permit holders.
        </p>
        <p>The entire document can be viewed here and can also be printed.</p>
      </div>
    </>
  );
};

export default HealthAndSafetyPage;
