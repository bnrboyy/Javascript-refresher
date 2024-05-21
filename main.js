const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!!");
    }, 1000);
  });
  return promise;
};

const fetchData2 = (callback) => {
  setTimeout(() => {
    callback(10);
  }, 1000);
};

fetchData2((data) => {
  for (i = 1; i <= data; i++) {
    console.log(i);
  }
});

setTimeout(() => {
  console.log("Timer is done!!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
      return fetchData();
    })
    .then((text3) => {
      console.log(text3);
    });
}, 2000);
