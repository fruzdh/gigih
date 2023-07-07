const getSong = (isReject) => {
  const result = [
    {
      title: "song title 1",
      artists: [{ name: "artist name 1.1" }],
      duration: 200,
    },
    {
      title: "song title 2",
      artists: [{ name: "artist name 2.1" }],
      duration: 200,
    },
    {
      title: "song title 3",
      artists: [{ name: "artist name 3.1" }],
      duration: 200,
    },
    {
      title: "song title 4",
      artists: [{ name: "artist name 4.1" }],
      duration: 200,
    },
    {
      title: "song title 5",
      artists: [{ name: "artist name 5.1" }],
      duration: 200,
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isReject) {
        reject(new Error("Rejected"));
      } else {
        resolve(JSON.stringify(result));
      }
    }, 2000);
  });
};

getSong(false)
  .then((data) => {
    console.log("promise: ");
    console.log(data);
  })
  .catch((err) => {
    console.log(`promise: ${err.message}`);
  });

getSong(true)
  .then((data) => {
    console.log("promise: ");
    console.log(data);
  })
  .catch((err) => {
    console.log(`promise: ${err.message}`);
  });

const getSongAsync = async (isReject) => {
  return await getSong(isReject);
};

getSongAsync(false)
  .then((data) => {
    console.log("async await:");
    console.log(data);
  })
  .catch((err) => {
    console.log(`async await: ${err.message}`);
  });

getSongAsync(true)
  .then((data) => {
    console.log("async await:");
    console.log(data);
  })
  .catch((err) => {
    console.log(`async await: ${err.message}`);
  });
