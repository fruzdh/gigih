import "./App.css";
import Profile from "./components/profile";

function App() {
  const users = [
    {
      name: "Generasi Gigih",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      name: "Generasi Gigih",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
  ];

  const users1 = [
    { name: "name1", gender: "female" },
    { name: "name1", gender: "male" },
  ];

  return (
    <>
      {Array.from({ length: users.length + 1 }, (_, i) => {
        if (i >= users.length) {
          return <Profile />;
        } else {
          return <Profile name={users[i].name} imageUrl={users[i].imageUrl} />;
        }
      })}

      {users1.map((user) => (
        <h1
          style={{
            color: user.gender === "female" ? "lightcoral" : "midnightblue",
          }}
        >
          {user.name}
        </h1>
      ))}
    </>
  );
}

export default App;
