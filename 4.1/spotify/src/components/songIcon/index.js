const SongIcon = ({ h, w }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div
      style={{
        "background-color": "#" + randomColor,
        height: h,
        width: w,
        "border-radius": "10px",
      }}
    ></div>
  );
};

export default SongIcon;
