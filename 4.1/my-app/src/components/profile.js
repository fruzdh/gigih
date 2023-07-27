import "./profile.css";

function Profile({
  name = "name",
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
}) {
  return (
    <div className="wrapper">
      <h1>Hello, {name}</h1>
      <img className="avatar" src={imageUrl} alt="react" />
    </div>
  );
}

export default Profile;
