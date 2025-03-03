import React from "react";
import Image from "next/image";

const TamarPage = () => {
  return (
    <>
      <h1 className="margin--30">Meavy</h1>
      <div>
        <Image
          src="/images/IMG_1743-1500a.jpg"
          alt="river tamar"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div id="walkham-content" className="grid-container">
        <div className="vertical-centre">
          <Image
            src="/images/rivers/tamar/tamar210121.bmp"
            alt="river tamar"
            width={200}
            height={200}
            sizes="300vw"
            className="map-image"
          ></Image>
        </div>
        <div>
          <h2>Tamar Beat - Reserved Water</h2>
          <p>
            <strong>
              The Tamar Beat is only available to Full Members, it is Reserved
              Water. Full Members may fish in rotation according to the colour
              of their ticket and the club calendar entry relating to the Top
              Beat on the River Tavy. Fishing is with fly or artificial lure.
              Fishing from any of the bridges is prohibited.
            </strong>
          </p>
          <p>
            The River Tamar beat may be fished on the day the member is
            allocated the Top beat on the River Tavy. A member may invite
            another member with a different colour card to fish with them, using
            two rods. A member may invite an Associate or guest to fish with
            them, sharing one rod.
          </p>
          <p>
            The beat is approximately 1 kilometer long and the fishing is on the
            right bank in the two fields shown on the map.
          </p>
          <p>
            Please park in the cattle handling pen and ensure that the track and
            gate into the field are kept clear at all times. Should the farmer
            want to use the handling pen he will find the fishermen on the bank
            and request that they move their vehicles. We have been advised this
            will only be a few times during the season. No dogs or cars are
            permitted in the fields, please close all gates.
          </p>
          <p>
            Grayling fishing is available on the River Tamar, the season for
            which starts on 16th June and ends on 14th March. Fishing with
            artificial flies only, on barbless or de-barbed single hooks, shall
            be permitted until one hour after sunset. When Grayling fishing, it
            is hoped best conservation practice will be adopted, but if a fish
            is to be kept, the limit is two only per day and they must be within
            30-38cms in length. All other grayling sizes must be released (local
            EA bye-law).
          </p>
          <p>
            No grayling fishing is permitted on the Club&apos;s other waters.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default TamarPage;
