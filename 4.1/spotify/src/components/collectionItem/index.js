import "./style.css";
import SongIcon from "../songIcon";

const CollectionItem = ({ title, artist }) => {
  return (
    <div className="collectionItemWrapper">
      <SongIcon h="50px" w="50px" />
      <div>
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default CollectionItem;
