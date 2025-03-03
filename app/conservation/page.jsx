import React from "react";
import Image from "next/image";
import LinkBox from "@/components/LinkBox";

const ConservationPage = () => {
  return (
    <>
      <h1 className="margin--30">Conservation</h1>
      <div>
        <Image
          src="/images/P5190065.jpg"
          alt="small peal"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div className="flex-container">
        <div id="consevation-content">
          <p>
            In setting out the Club&apos;s rules, certain criteria have been
            applied to recognise that salmon fishing is different from that of
            sea trout fishing. Salmon are a highly threatened species and fished
            for by day. Sea trout are largely fished for by night and are not
            currently at risk but warning signs indicate we must conserve these
            enigmatic travellers. These differences have resulted in rules that
            are common to both salmon and sea trout fishing during the day and
            those rules that apply specifically to fishing at night for sea
            trout which is a speciality sport.
          </p>
          <p>
            A sustainable club fishery is highly dependent on agencies external
            to the club doing their job. Our contribution must be to fish with
            conservation at the heart of our fishing effort. The Club gives
            anglers rules and advice on best angling practice for the quick and
            safe catch and release of salmon and sea trout. This allows us all
            to continue to enjoy this wonderful sport. The rules have been
            compiled from the results of the members survey and taking into
            account best angling practice of local and national angling clubs,
            associations and the Environment Agency. The salmon flow chart and
            sea trout flow chart are directives for permit holders and an
            aide-memoire for members. The rules are contained in the yellow
            boxes and are mandatory, the conservation practice in the blue boxes
            is recommended.
          </p>
          <p>
            The Club&apos;s General rules and the rules about Permits and
            Membership can be read and printed by clicking on these links.
          </p>
          <h2>Catch and Release</h2>
          <p>
            The club rules are overarched by national and local byelaws.
            Environment Agency rules and directives also apply. Size limits and
            catch and release laws for salmon, sea trout and brown trout vary
            from river to river. Club rules and local codes of practice are more
            stringent than the national and local byelaws. It is the
            angler&apos;s responsibility to ensure that they are familiar with
            all of the restrictions governing the catch and release of salmon,
            sea trout and brown trout. Should a rainbow trout be caught whilst
            fishing club waters, it must be removed, as these escapees are
            regarded as invasive and could upset the balance of native brown,
            sea trout and salmon populations.
          </p>
          <h2>Salmon</h2>
          <p>
            Killing a salmon should be an exceptionally rare event in order to
            preserve the species.
          </p>
          <p>
            This flow chart gives full details of the clubs rules about the
            catch and release of salmon.
          </p>
          <h2>Sea Trout</h2>
          <p>
            Anglers are asked to put a low limit on the number of fish they
            take, no more than 2 fish per day.
          </p>
          <p>
            This flow chart gives full details of the clubs rules about the
            catch and release of sea trout.
          </p>
          <h2>Brown Trout</h2>
          <p>
            Fishing with artificial flies only, on barbless or de-barbed single
            hooks, shall be permitted until one hour after sunset.
          </p>
          <p>
            Any trout less than 8″ (20cm) in length must be returned to the
            river.
          </p>
          <h2>Grayling</h2>
          <p>
            Grayling fishing is only available on the River Tamar, the grayling
            season starts on 16th June and ends on 14th March.
          </p>
          <p>
            Fishing with artificial flies only, on barbless or de-barbed single
            hooks, shall be permitted until one hour after sunset.
          </p>
          <p>
            When Grayling fishing, it is hoped best conservation practice will
            be adopted, but if a fish is to be kept, the limit is two only per
            day and they must be within 30-38cms in length. A local EA bye-law
            requires that all other grayling are released.
          </p>
          <h2>Pollution</h2>
          <p>Call the Environment Agency incident hotline to report:</p>
          <ul>
            <li>damage or danger to the natural environment</li>
            <li>pollution to water or land</li>
            <li>poaching or illegal fishing</li>
            <li>dead fish or fish gasping for air</li>
            <li>
              rivers blocked by a vehicle or fallen tree causing risk of
              flooding
            </li>
            <li>
              flooding from any river, stream, canal, natural spring or the sea
            </li>
            <li>incidents at Environment Agency-regulated waste sites</li>
            <li>illegal removals from watercourses</li>
            <li>unusual changes in river flow</li>
            <li>collapsed or badly damaged river or canal banks</li>
          </ul>
          <h2>Environment Agency pollution incident hotline</h2>
          <p>Telephone: 0800 80 70 60 (24-hour service)</p>
        </div>
        <div id="conservation-links">
          <LinkBox
            logo="anglingtrustlogo.bmp"
            link="https://www.anglingtrust.net/"
            linkText="Angling Trust"
          ></LinkBox>
          <LinkBox
            logo="Logo-SWRAa.jpg"
            link="https://www.anglingtrust.net/"
            linkText="South West Rivers Association"
          ></LinkBox>
          <LinkBox
            logo="fishlegallogo-small.jpg"
            link="https://www.anglingtrust.net/"
            linkText="Fish Legal"
          ></LinkBox>
          <LinkBox
            logo="ealogo.jpg"
            link="https://www.anglingtrust.net/"
            linkText="Pollution hotline"
          ></LinkBox>
        </div>
      </div>
    </>
  );
};

export default ConservationPage;
