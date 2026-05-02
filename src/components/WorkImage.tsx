import { useState, useRef, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(err => console.error("Video play failed:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img 
          src={props.image} 
          alt={props.alt} 
          style={{ opacity: props.video && isHovered ? 0 : 1, transition: '0.3s' }} 
        />
        {props.video && (
          <video
            ref={videoRef}
            src={encodeURI(props.video)}
            muted
            playsInline
            loop
            preload="auto"
            style={{ 
              opacity: isHovered ? 1 : 0, 
              transition: '0.3s',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1
            }}
          ></video>
        )}
      </a>
    </div>
  );
};

export default WorkImage;
