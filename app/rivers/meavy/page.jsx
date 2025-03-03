import React from "react";
import Image from "next/image";

const MeavyPage = () => {
  return (
    <>
      <h1 className="margin--30">Meavy</h1>
      <div>
        <Image
          src="/images/IMG_1079a-1600.jpg"
          alt="river meavy"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div id="walkham-content" className="grid-container">
        <div className="vertical-centre">
          <Image
            src="/images/rivers/meavy/meavy1210118.bmp"
            alt="river meavy"
            width={200}
            height={200}
            sizes="300vw"
            className="map-image"
          ></Image>{" "}
        </div>
        <div>
          <h2>
            River Meavy Beat 1 – Burrator Dam to Marchants Bridge at Meavy
          </h2>
          <p>
            <strong>
              BBeat 1 is available to full members, associate members and permit
              holders at any time during the fishing season. Fishing is with fly
              or artificial lure. Fishing from any of the bridges is prohibited.
            </strong>
          </p>
          <p>
            While fishing is available from the left bank up to the dam, the top
            section is steep and fast and has limited fishing potential. It is
            strongly recommended that the fishing is accessed from the right
            bank where a footpath leads down from the west end of Burrator Dam
            to Meavy, or from the granite style at Marchant’s Bridge up through
            Flat Wood. In low water the river can be waded to access the left
            bank. There is ample parking at both ends of the beat.
          </p>
          <p>
            {" "}
            The river is small but compensation water does provide a constant
            flow and temperature to the water. It will provide some fishing when
            other rivers are low and hot.
          </p>
        </div>
        <div className="vertical-centre">
          <Image
            src="/images/rivers/meavy/meavy3210120.bmp"
            alt="river meavy"
            width={200}
            height={200}
            sizes="300vw"
            className="map-image"
          ></Image>{" "}
        </div>
        <div>
          <h2>River Meavy Beat 3 – Clearbrook to Shaugh Bridge</h2>
          <p>
            <strong>
              Beat 3 is available to full members, associate members and permit
              holders at any time during the fishing season. Fishing is the with
              fly or artificial lure. Fishing from any of the bridges is
              prohibited.
            </strong>
          </p>
          <p>
            The fishing is from the right bank and begins at the first field
            boundary below Hoo Meavy Bridge. The river is small and in places
            overgrown, but holds better brown trout and will reward the skillful
            use of a brook rod. The beat is about two kilometers long, it
            continues down past Lower Goodameavy Bridge and on to Shaugh Bridge.
          </p>
          <p>There is parking at Shaugh Bridge and Lower Goodameavy Bridge.</p>
        </div>
      </div>
    </>
  );
};

export default MeavyPage;
