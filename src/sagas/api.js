// @ts-check
export const fetchData = async () => {
  try {
    const response = await fetch("https://api.myjson.com/bins/m7yx6");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
