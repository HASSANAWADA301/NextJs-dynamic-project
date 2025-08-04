import { useState } from "react";
import PlayIcon from "../../atoms/PlayIcon/PlayIcon";
import Modal from "../Modal/Modal";

const VideoPreview: React.FC<{ imageUrl: string ,videoUrl:string,lang:string}> = ({ imageUrl,videoUrl,lang }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div
        className="relative w-[419px] h-[220px] cursor-pointer max-[768px]:justify-center max-[460px]:w-auto "
        onClick={() => setShowVideo(true)}
      >
        <img
          src={imageUrl}
          alt="Video preview"
          className="w-full h-full rounded-[28px] relative cursor-pointer
          max-[768px]:w-full max-[768px]:h-full max-[768px]:rounded-[20px]
          
          "
        />
        <div className={`relative  z-1 ${lang=='ar'?"mr-[380px]":"ml-[380px] "} mt-[-150px] w-[62px] h-[62px] rounded-full bg-[#EB6F2D] border-[7px] border-white text-white flex items-center justify-center max-[1335px]:mt-[-30px] max-[1335px]:ml-auto  max-[1335px]:mr-auto  max-[768px]:mt-[-30px] max-[768px]:ml-auto max-[768px]:mb-[20px] max-[768px]:relative max-[768px]:z-1`}>
          <PlayIcon className={`${lang=='ar'?"rotate-180":""}`} />
        </div>
      </div>

      <Modal
        open={showVideo}
        onClose={() => setShowVideo(false)}
      
      >
        <button
          onClick={() => setShowVideo(false)}
          className="absolute top-[20px] right-[40px] text-[2rem] text-white bg-transparent border-none cursor-pointer z-[1001]"
        >
          x
        </button>
        <iframe
          width="100%"
          height="300"
          src={videoUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
};

export default VideoPreview;
