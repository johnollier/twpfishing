import Image from "next/image";

interface LinkBoxProps {
  logo: string;
  linkUrl: string;
  linkText: string;
}

const LinkBox = ({ logo, linkUrl, linkText }: LinkBoxProps) => {
  return (
    <div className="link-box">
      <Image
        src={`/images/${logo}`}
        alt="logo"
        width={0}
        height={0}
        sizes="300vw"
        className="link-box-image"
      />
      <a href={linkUrl}> {linkText} </a>
    </div>
  );
};

export default LinkBox;
