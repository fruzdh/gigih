import { useContext, useEffect, useState } from "react";
import SongItem from "../songItem";
import { AppContext } from "../../helpers/context";
import "./style.css";

const Recommendation = ({ genre }) => {
  const { accessToken } = useContext(AppContext);

  const [data, setData] = useState([]);

  const fetchData = () => {
    const endpoint = `https://api.spotify.com/v1/recommendations?limit=5&seed_genres=${genre}`;
    fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data?.tracks);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    data?.length > 0 && (
      <section>
        <div className="recommendationTitle">
          <h2>{genre}</h2>
          <p className="hoverUnderline">Tampilkan semua</p>
        </div>
        <div className="recommendationList">
          {data.map(({ id, name, artists, uri, album }) => (
            <SongItem
              key={id}
              title={name}
              artist={artists?.map((artist) => artist?.name).join(", ")}
              uri={uri}
              imgUri={album?.images?.length > 0 && album?.images[0].url}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Recommendation;
