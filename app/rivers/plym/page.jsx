import React from "react";
import Image from "next/image";

const PlymPage = () => {
  return (
    <>
      <h1 className="margin--30">Plym</h1>
      <div>
        <Image
          src="/images/River-Plym.jpg"
          alt="river tavy"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div id="walkham-content" className="grid-container">
        <div className="vertical-centre">
          <Image
            src="/images/rivers/plym/cad1201213.bmp"
            alt="river cad"
            width={200}
            height={200}
            sizes="300vw"
            className="map-image"
          ></Image>{" "}
        </div>
        <div>
          <h2>River Cad Beat 1 - Langcombe Brook to Shaugh Bridge</h2>
          <p>
            <strong>
              Beat 1 is available to full members, associate members and permit
              holders at any time during the fishing season. Fishing is only
              with fly or artificial lure. The beat lies within Dartmoor
              National Park and bylaws prohibit spinning for brown trout.
              Fishing from bridges is prohibited.
            </strong>
          </p>
          <p>
            Right bank fishing begins at the junction of the River Cad with the
            Langcombe Brook (OS SX 592665). It continues downstream to the hedge
            that meets the river above Brisworthy Farm. Right bank fishing
            continues from Cadover Bridge and ends at Lower Cadworthy Farm.
          </p>
          <p>
            {" "}
            Left bank fishing begins at the junction of the River Cad with
            Blacka Brook and continues downstream to the junction with the River
            Meavy.
          </p>
          <p>
            {" "}
            There is easy access from the abundant parking at Cadover Bridge and
            Shaugh Bridge but on a nice summers day these areas are full of
            trippers enjoying a day on the moors. However, few people venture
            out of sight of their cars and the steep central section between the
            two bridges is relatively quiet and the angler will experience
            little disturbance. This is fast water, tumbling over large boulders
            into deep pots which harbour many untroubled fish.{" "}
          </p>
          <p>
            The stream was once well fished and is mentioned in H.S. Joyces book
            "A Trout Angler&apos;s Notebook&apos;. In this 1947 publication
            Joyce describes fishing the river and rejoices in an early morning
            encounter at a pool adjacent to Lower Cadworthy Farm. Joyce and his
            contemporaries were keen trout fishermen and had a high regard for
            the sporting qualities of this pretty river.
          </p>
        </div>
        <div className="vertical-centre">
          <Image
            src="/images/rivers/plym/plym1201213.bmp"
            alt="river plym"
            width={200}
            height={200}
            sizes="300vw"
            className="map-image"
          ></Image>{" "}
        </div>
        <div>
          <h2>River Plym Beat 1 - Shaugh Bridge to Bickleigh Bridge</h2>
          <p>
            <strong>
              Beat 1 is available to full members, associate members and permit
              holders at any time during the fishing season. Fishing is
              permitted only with fly or artificial lure. The beat lies within
              Dartmoor National Park and bylaws prohibit spinning for brown
              trout. Fishing from bridges is prohibited.
            </strong>
          </p>
          <p>
            Fishing from the right bank is from Shaugh Bridge to Bickleigh
            Bridge.
          </p>
          <p>
            Fishing from the left bank is from Shaugh Bridge to the hedge above
            Harscombe Farm. The left bank is overgrown and difficult to
            negotiate in places.{" "}
          </p>
          <p>
            There is ample parking at Shaugh Bridge and some limited parking at
            Bickleigh Bridge.
          </p>
        </div>
      </div>
    </>
  );
};

export default PlymPage;
