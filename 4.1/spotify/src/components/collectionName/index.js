import "./style.css";

const CollectionName = ({ name }) => {
  return (
    <div className="collectionNameWrapper">
      <p>{name}</p>
    </div>
  );
};

export default CollectionName;
