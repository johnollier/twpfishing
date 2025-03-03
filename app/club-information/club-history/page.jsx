import React from "react";
import Image from "next/image";

const ClubHistoryPage = () => {
  return (
    <>
      <h1 className="margin--30">Club History</h1>
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
      <div id="history-content" className="flex-container">
        <div>
          <p>
            The Tavy Walkham and Plym Fishing Club can be traced back to the
            1860&apos;s. The original book of minutes shows that a meeting took
            place at the Magistrates Room, Tavistock on August 6th 1864, prior
            to the 1865 season and proposed the formation of an Association to
            protect the Fisheries of the Tavy and it&apos;s tributaries. The
            club&apos;s records from 1865 to 1923 have been scanned and
            published on the{" "}
            <a href="https://tavistocksublib.slls.online/">
              Tavistock Subscription Library
            </a>{" "}
            website
          </p>
          <p>The meeting resolved:</p>
          <div className="quotation">
            <p>
              That Mr Benson as one of the Conservators of the Tavy be requested
              to communicate to the Earl of Devon and JH Gile Esq, the other
              conservators, the following letter on the subject of the meeting.
            </p>
            <p>
              ..and that such form be sent if approved to the landowners and
              occupiers,
            </p>
            <p>Salmon Fisheries Act 1861 **see below</p>
            <p>
              We the conservators appointed under the above Act for the River
              Tavy are desirous of obtaining your consent to and cooperation in
              the carrying out its provisions. To enable us to do so it is
              proposed to form an Association to provide by subscriptions and
              the sale of tickets the funds necessary for the protection of the
              fish and such other purposes as may be required. Owners and
              occupiers having a river frontage to have a ticket. The season
              ticket to be in compliance with the Act. May we request an early
              answer whether you concur in the above and authorize us to
              prosecute all poachers and persons illegally trespassing on your
              lands and damaging the river and banks.
            </p>
            <p> We are your obediently,</p>
            <p> D Evans, J H Gile, J Benson Conservators </p>
            <p>
              Be pleased to address your answer to Mr Benson - Bedford Offices,
              Tavistock."
            </p>
          </div>
          <p>
            **The Salmon Fisheries Act of 1861 set out laws for protecting
            salmon and appointed two Inspectors to report to Parliament in
            addition to allowing for the local implementation of the law through
            "Conservators" - see para 33 of the Act.
          </p>
          <p>
            The subsequent meeting resulted in the "River Tavy Fishing
            Association". The name was changed to "Tavy Walkham & Plym Fishing
            Association" in 1887 and changed again in 1956 to the "Tavy Walkham
            & Plym Fishing Club". The minute books provide a fascinating insight
            into the club and the fishing fraternity of the 19th, 20th and
            current century including accounts, conflicts and developments of
            the current set of rules and constitution, battles with mine
            pollution, illegal fishing and financial crises. The original
            subscription was set at £1 to fish within the bounds of the
            association, with the fishing above "Doublewaters" being set at 10/-
            (50p). Day tickets were set at 2/6. Special tickets were available
            for labourers, bailiffs and landowners.
          </p>
        </div>
        <Image
          src="/images/Formationclubdoc-150x150.gif"
          alt="club formation document"
          width={150}
          height={150}
          sizes="300vw"
        ></Image>
      </div>
      <div className="large-image-container">
        <p>Stocking in the 1930's</p>
        <Image
          src="/images/DSC_0016.gif"
          alt="stocking"
          width={220}
          height={220}
          sizes="300vw"
          className="large-image"
        ></Image>
      </div>
    </>
  );
};

export default ClubHistoryPage;
