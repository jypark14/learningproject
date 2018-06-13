// @ts-check
export const fetchData = async () => {
  try {
    const response = await fetch("https://api.myjson.com/bins/m7yx6");
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
