import SongIcon from "../songIcon";
import "./style.css";

const SongItem = ({ title, artist }) => {
  return (
    <div className="songItemWrapper">
      <SongIcon w="150px" h="150px" />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
};

export default SongItem;
