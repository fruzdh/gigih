import "./style.css";

const Progress = ({ w }) => {
  return (
    <div className="progressWrapper" style={{ width: w }}>
      <div className="progressBase"></div>
      <div className="progress"></div>
      <div className="progressCircle"></div>
    </div>
  );
};

export default Progress;
