import SongItem from "../songItem";
import TopItem from "../topItem";
import "./style.css";
import { FaUser, FaUsers } from "react-icons/fa6";

const Content = () => {
  return (
    <div className="contentWrapper">
      <header>
        <FaUsers className="icon" />
        <FaUser className="icon" />
      </header>
      <main>
        <section className="top">
          <h1>Good Night</h1>
          <div className="topWrapper">
            {Array.from({ length: 6 }, (_, i) => (
              <TopItem title={`song title ${i + 1}`} isPlayed={i === 0} />
            ))}
          </div>
        </section>
        {Array.from({ length: 10 }, (_, i) => (
          <section>
            <div className="sectionTitle">
              <h2>{`Section Title ${i + 1}`}</h2>
              <p className="hoverUnderline">Tampilkan semua</p>
            </div>
            <div className="sectionList">
              {Array.from({ length: 5 }, (_, i) => (
                <SongItem
                  title={`song title ${i + 1}`}
                  artist={`artist name ${i + 1}`}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Content;
