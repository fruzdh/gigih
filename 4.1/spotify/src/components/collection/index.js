import "./style.css";
import { BiSolidCollection } from "react-icons/bi";
import { FaPlus, FaArrowRight, FaSistrix, FaCaretDown } from "react-icons/fa6";
import CollectionName from "../collectionName";
import CollectionItem from "../collectionItem";

const Collection = () => {
  return (
    <div className="collectionWrapper">
      <div className="collectionHeader">
        <div className="icon">
          <BiSolidCollection />
          <h3>Koleksi Kamu</h3>
        </div>
        <FaPlus className="icon" />
        <FaArrowRight className="icon" />
      </div>
      <div className="collectionNames">
        <CollectionName name={`name 1`} />
        <CollectionName name={`name 2`} />
      </div>
      <div className="collectionList">
        <div className="collectionOption">
          <FaSistrix className="icon" />
          <div className="icon">
            <p>Recent</p>
            <FaCaretDown />
          </div>
        </div>
        {Array.from({ length: 10 }, (_, i) => (
          <CollectionItem
            title={`song title ${i + 1}`}
            artist={`artist name ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
