export const weatherOptions = [
  {
    day: true,
    condition: "default",
    url: new URL("../assets/day/default.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/day/cloudy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/day/fog.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../assets/day/storm.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rain.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "default",
    url: new URL("../assets/night/default.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/night/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/night/fog.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL("../assets/night/storm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/night/rain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/snow.png", import.meta.url).href,
  },
];

export const defaultWeatherOptions = [
  {
    day: true,
    condition: "blue skies",
    url: new URL("../assets/day/default.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "blue skies",
    url: new URL("../assets/night/default.png", import.meta.url).href,
  },
];

export const coordinates = {
  latitude: 32.8292155,
  longitude: -117.103643,
};

export const apiKey = "7f88a124dbce550dc22ecda6487790dc";

export const currentYear = new Date().getFullYear();

const date = new Date().toDateString();

export const currentDate = date.slice(4, 10);

// json-server --watch db.json --id _id --port 3001

// function handleSubmit(request) {
//   // start loading
//   setIsLoading(true);
//   request()
//     // we need to close only in `then`
//     .then(handleCloseModal)
//     // we need to catch possible errors
//     // console.error is used to handle errors if you don’t have any other ways for that
//     .catch(console.error)
//     // and in finally we need to stop loading
//     .finally(() => setIsLoading(false));
// }

// // here is an example
// const handleAddItem = (item) => {
//   // here we create a function that returns a promise
//   const makeRequest = () => {
//     // `return` lets us use a promise chain `then, catch, finally`
//     return addNewItem(item).then((item) => {
//       setClothingItems([item, ...clothingItems]);
//     });
//   };
//   // here we call handleSubmit passing the request
//   handleSubmit(makeRequest);
// };

//  // here is an example
//  function handleProfileFormSubmit(inputValues) {
//   // here we create a function that returns a promise
//   function makeRequest() {
//     // `return` lets us use a promise chain `then, catch, finally`
//     return api.editProfile(inputValues).then(setCurrentUser);
//   }
//   // here we call handleSubmit passing the request
//   handleSubmit(makeRequest);
// }
