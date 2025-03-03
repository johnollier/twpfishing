import React from "react";
import Image from "next/image";

const AllRiversPage = () => {
  return (
    <>
      <h1 className="margin--30">All Rivers</h1>
      <div>
        <Image
          src="/images/IMG_0020-1500.jpg"
          alt="lower dukes"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div id="all-rivers-map">
        <Image
          src="/images/rivers/allwaters04.bmp"
          alt="river map"
          width={570}
          height={570}
          sizes="300vw"
        ></Image>
      </div>
      <div id="all-content">
        <p>
          The club has many miles of good fishing for salmon, sea trout and
          brown trout. The map shows all of the club&apos;s waters except for
          the Tamar Beat.
        </p>
        <p>
          See detailed maps of each river and its beats on the Rivers and Beats
          menu.
        </p>
      </div>
    </>
  );
};

export default AllRiversPage;
