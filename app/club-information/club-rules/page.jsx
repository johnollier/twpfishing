import React from "react";
import Image from "next/image";
import Link from "next/link";

const ClubRulesPage = () => {
  return (
    <>
      <h1 className="margin--30">Club Rules</h1>
      <div>
        <Image
          src="/images/IMG_0052a-1500.jpg"
          alt="upper dukes bw"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div id="rules-content">
        <h2>GENERAL RULES</h2>
        <p>
          The Club&apos;s General Rules are a high level description of the
          Club&apos;s waters, the conditions of membership and restrictions on
          fishing.
        </p>
        <p>
          The Club&apos;s rules on &nbsp;
          <Link className="link" href="/conservation">
            Conservation
          </Link>{" "}
          &nbsp; are more detailed and cover the rules for fishing and the rules
          on Permits and Membership can be read and printed using these links.
        </p>
      </div>
    </>
  );
};

export default ClubRulesPage;
