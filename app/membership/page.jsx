import React from "react";
import Image from "next/image";

const MembershipPage = () => {
  return (
    <>
      <h1 className="margin--30">Membership</h1>
      <div>
        <Image
          src="/images/P9050006-scaled.jpg"
          alt="pool"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div className="flex-container">
        <div id="membership-content">
          <p>
            <strong>Full Members</strong> can fish all of the Reserved waters
            e.g. the Upper, Middle and Lower Beats of the River Tavy on a rota
            basis and can fish the club&apos;s other waters at any time. Full
            Membership is for local anglers who fish regularly. There are no
            Full Membership vacancies for the 2025 season.
          </p>
          <p>
            The Club&apos;s General Rules and Membership Rules can be read and
            printed using these links.
          </p>
          <p>
            {" "}
            <strong>Associate Members</strong> can fish some of the Reserved
            waters e.g. the Abbey Beat on the River Tavy on a rota basis and can
            fish all of the permit waters. Associate Membership is suited to
            local and visiting anglers who fish several times a season. Apply
            for Associate Membership at any time, there are several vacancies
            for 2025.
          </p>
          <p>
            Applications are invited from both local and other anglers. Please
            contact the club for an application form.
          </p>
          <p>
            <strong>Permit Holders</strong> can only fish the permit waters. A
            permit gives access to the rivers for local and visiting anglers who
            only fish occasionally. For full details of the permit waters please
            see the Rivers and Beats page. For the cost of the various permits
            please see the Fishing Permits page.
          </p>
          <p>The Permit Rules can be read and printed using this link.</p>
          <p>
            <strong>Joining</strong> If you wish to join the club please email
            for an application form, using the Contact page.
          </p>
          <p>
            Please read the club&apos;s Membership Rules for full details on the
            election of Full Members.
          </p>
          <p>
            The cost of Full Membership for the 2025 season is £350. The joining
            fee is £25. The cost of Associate Membership for the 2025 season is
            £220.
          </p>
        </div>
        <div id="membership-right">
          <Image
            src={"/images/IMG_0160asmall-600x323.webp"}
            alt="pool"
            width={220}
            height={220}
            sizes="300vw"
            className="small-pool"
          />
          <Image
            src={"/images/IMG_9932small-400x274.webp"}
            alt="pool"
            width={220}
            height={220}
            sizes="300vw"
            className="small-pool"
          />
          <Image
            src={"/images/IMG_9176asmall-400x228.webp"}
            alt="pool"
            width={220}
            height={220}
            sizes="300vw"
            className="small-pool"
          />
        </div>
      </div>
    </>
  );
};

export default MembershipPage;
