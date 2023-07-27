import "./style.css";
import {
  FaRegHeart,
  FaShuffle,
  FaBackwardStep,
  FaCirclePause,
  FaForwardStep,
  FaRepeat,
  FaRegSquareCaretRight,
  FaMicrophone,
  FaListUl,
  FaComputer,
  FaVolumeHigh,
} from "react-icons/fa6";
import SongIcon from "../songIcon";
import Progress from "../progress";

const SongPlayer = () => {
  return (
    <footer>
      <div className="songDetail">
        <SongIcon h="50px" w="50px" />
        <div>
          <h3 className="hoverUnderline">song title 1</h3>
          <p className="hoverUnderline">artist name 1</p>
        </div>
        <FaRegHeart className="icon" />
      </div>
      <div>
        <div className="songOption">
          <FaShuffle className="icon" />
          <FaBackwardStep className="icon" />
          <FaCirclePause className="icon" />
          <FaForwardStep className="icon" />
          <FaRepeat className="icon" />
        </div>
        <div className="songProgress">
          <p>5:00</p>
          <Progress w="400px" />
          <p>10:00</p>
        </div>
      </div>
      <div className="songMenu">
        <FaRegSquareCaretRight className="icon" />
        <FaMicrophone className="icon" />
        <FaListUl className="icon" />
        <FaComputer className="icon" />
        <FaVolumeHigh className="icon" />
        <Progress w="100px" />
      </div>
    </footer>
  );
};

export default SongPlayer;
