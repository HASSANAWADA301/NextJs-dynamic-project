import { FaPlay } from "react-icons/fa";

const PlayIcon: React.FC<{ className?: string}> = ({ className }) => (
  <i className={className} style={{cursor:'pointer'}}>{FaPlay({})}</i>
);
export default PlayIcon;
