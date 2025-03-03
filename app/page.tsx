import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <h1 className="margin--30">Welcome</h1>
      <div>
        <Image
          src="/images/IMG_3936a-1500.jpg"
          alt="fishing lower dukes"
          width={220}
          height={220}
          sizes="300vw"
          className="main-image"
        />
      </div>
      <div id="home-content" className="flex-container">
        <div id="home-left">
          <Image
            src={"/images/dunkeld200px.jpg"}
            alt="dunkeld"
            width={220}
            height={220}
            sizes="300vw"
            className="flies"
          />
          <Image
            src={"/images/salmonfly01200px.jpg"}
            alt="salmon fly"
            width={220}
            height={220}
            sizes="300vw"
            className="flies"
          />
        </div>
        <div id="home-right">
          <p>
            The club has beats on five rivers, the Tamar, Tavy, Meavy, Plym and
            Walkham. The rivers have different characters varying from the
            moorland streams on Dartmoor, where the upper reaches contain wild
            brown trout, to the mighty Tamar which has runs of sea trout and
            salmon. All of the rivers rise quickly after rain on Dartmoor but
            unlike lowland rivers, the spates quickly subside. The scenery on
            Dartmoor is spectacular and the deep river valleys through which the
            rivers run, contain ancient oaks dripping with lichen. The tree
            lined, rocky river valleys are reminiscent of Scotland and Canada.
          </p>
          <p>
            The club encourages catch and release to preserve wild fish stocks.
            Kingfishers and dippers are common along the river banks and on the
            open moor, the mew of a buzzard mixes with the harsh caw of a raven.
          </p>
          <p>
            There is a waiting list for Full Membership but Associate
            Membership, which is also limited, is usually available. Joining as
            an Associate Member is a good way to enjoy the fishing while getting
            to know the rivers and the other members. It is best to apply for
            Associate Membership before the start of the season to take full
            advantage of the club&apos;s waters. Now is a good time to apply for
            Associate Membership as there are several vacancies for 2025.
            Applications are invited from both local and other anglers. Please
            contact the club for an application form.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
