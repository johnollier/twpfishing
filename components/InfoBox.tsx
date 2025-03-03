interface InfoBoxProps {
  heading: string;
  linkUrl: string;
  linkText: string;
  content: string[];
}

const InfoBox = ({ heading, linkUrl, linkText, content }: InfoBoxProps) => {
  return (
    <div className="info-box">
      <h3>{heading}</h3>
      {content.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      <a href={linkUrl} className="info-box-link">
        <div className="link-button">{linkText}</div>
      </a>
    </div>
  );
};

export default InfoBox;
