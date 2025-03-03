import InfoBox from "@/components/InfoBox";
import Image from "next/image";
const PermitsPage = () => {
  return (
    <>
      <h1 className="margin--30">Fishing Permits</h1>
      <div>
        <Image
          src="/images/IMG_8858a-1500.jpg"
          alt="pool"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div className="flex-container">
        <div id="permits-content">
          <p>
            The Club offers a selection of fishing permits for its beats as
            shown in the table below. Simply click on a permit and purchase
            directly through this website. Alternatively, you may buy our
            permits from the clubs agents in the region, see below.
          </p>
          <ul>
            <li>Use PayPal or a credit card</li>
            <li> No account on the website is required </li>
            <li>An email will be sent with details of the permit</li>
            <li>Screenshot the permit on your phone or print it</li>
            <li>An invoice will also be sent by email</li>
          </ul>
          <p>
            A salmon and sea trout permit includes brown trout. Always fish with
            your permit and a valid EA Licence.
          </p>
          <p>
            If you have any questions, please get in touch and we will be happy
            to help you.{" "}
          </p>
          <table className="grey">
            <thead>
              <tr>
                <th>Permit Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="green">Salmon and Sea Trout - season permit</td>
                <td>£140</td>
              </tr>
              <tr>
                <td className="green">Salmon and Sea Trout - 1 week permit</td>
                <td>£55</td>
              </tr>
              <tr>
                <td className="green">Salmon and Sea Trout - 1 day permit</td>
                <td>£20</td>
              </tr>
              <tr>
                <td className="green">Brown Trout - season permit </td>
                <td>£60</td>
              </tr>
              <tr>
                <td className="green">Brown Trout - 1 month permit</td>
                <td>£25</td>
              </tr>
              <tr>
                <td className="green">Brown Trout - 1 week permit</td>
                <td>£15</td>
              </tr>
              <tr>
                <td className="green">
                  Brown Trout (under 18) - season permit
                </td>
                <td>£15</td>
              </tr>
              <tr>
                <td className="green">
                  Brown Trout (under 18) - 1 month permit
                </td>
                <td>£5</td>
              </tr>
            </tbody>
          </table>
          <p>
            The Club&apos;s conservation policy and catch and release rules are
            explained on the Conservation page. The Club&apos;s General Rules
            and the detailed Permit Rules can be read and printed using these
            links. Anglers must ensure that they are familiar with the rules
            before fishing.{" "}
          </p>
          <p>
            You can also purchase the fishing permits listed above from the
            following local agents.
          </p>
          <div className="flex-container">
            <InfoBox
              heading="Osborne &amp; Cragg Fishing Shop"
              linkUrl="http://osborneandcragg.business.site/"
              linkText="VISIT SITE"
              content={[
                "37 Bretonside, The Barbican",
                "Plymouth",
                "PL4 OBB2",
                "01752 223141",
              ]}
            ></InfoBox>
            <InfoBox
              heading="Yelverton Garage"
              linkUrl="https://goo.gl/maps/DbXvGGZQWM42"
              linkText="VIEW MAP"
              content={[
                "1 Meavy Lane",
                "Yelverton",
                "PL20 6AL",
                "01822 853785",
              ]}
            ></InfoBox>
          </div>
        </div>
        <div id="permits-right">
          <InfoBox
            heading="EA Fishing Licences"
            linkUrl="https://www.gov.uk/fishing-licences"
            linkText="VISIT SITE"
            content={[
              "You will need a valid EA license to fish on our beats. Visit the .gov.uk site below to purchase or renew your fishing licence.",
            ]}
          ></InfoBox>
          <InfoBox
            heading="Permit Rules"
            linkUrl="/club-information/club-rules"
            linkText="VIEW RULES"
            content={["View the Club's general rules."]}
          ></InfoBox>
        </div>
      </div>
    </>
  );
};

export default PermitsPage;
