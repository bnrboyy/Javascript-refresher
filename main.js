const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!!");
    }, 1000);
  });
  return promise;
  //   setTimeout(function () {
  //     callback("Done!!");
  //   }, 1500);
};

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
    }).then(text3 => {
        console.log(text3)
    })
}, 2000);
