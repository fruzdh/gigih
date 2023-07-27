import "./style.css";
import SongIcon from "../songIcon";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";

const TopItem = ({ title, isPlayed }) => {
  return (
    <div className="topItemWrapper">
      <SongIcon w="70px" h="70px" />
      <h3>{title}</h3>
      {isPlayed ? (
        <FaCirclePause className="greenIcon" />
      ) : (
        <FaCirclePlay className="greenIcon playIcon" />
      )}
    </div>
  );
};

export default TopItem;
