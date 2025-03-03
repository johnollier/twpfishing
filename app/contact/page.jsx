import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <h1 className="margin--30">Contact</h1>
      <div>
        <Image
          src="/images/IMG_3937-1500.jpg"
          alt="large brownie"
          width={0}
          height={0}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div>
        <h4>Becoming a Full Member or an Associate Member </h4>
        <h2>Full Member</h2>
        <p>
          There are no vacancies for Full Membership for the 2025 season but
          prospective Full Members should apply to the Secretary using the form
          below and ask to be placed on the waiting list for next season. When
          you submit the form you will receive confirmation that your message
          has been sent. You will be contacted by the Secretary within 24 hours.
          A proposer and seconder in support of the prospective Full Member's
          application to join will be required before acceptance into the club
          at the Clubs Annual General Meeting in January, see Club Rules.
        </p>
        <h2>Associate Member</h2>
        <p>
          Prospective Associate Members should apply to the Secretary using the
          form below. There are usually vacancies for Associate Members each
          year. If there are vacancies, the Secretary will send an application
          form by email or post.{" "}
          <strong>
            There are several Associate Memberships currently available for the
            2025 season. Applications are invited from both local and other
            anglers. Please contact the club for an application form using the
            form below, include your mobile phone number.
          </strong>
        </p>
        <p>
          Please check your 'spam' folder if you have not seen a reply within 24
          hours.
        </p>
        <p>
          Prospective Associate Members do not need a proposer and seconder and
          can apply for membership at any time of the year. The contact form can
          also be used to contact the club about rivers and beats.{" "}
        </p>
        <p>Alternatively, contact The Secretary at nrainton@gmail.com.</p>
      </div>
    </>
  );
};

export default ContactPage;
