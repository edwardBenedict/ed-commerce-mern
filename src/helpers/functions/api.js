export const api = async (url, method, data) => {
  let response = {};
  const config = data
    ? {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    : {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

  try {
    const fetchResponse = await fetch(url, config);
    response.status = fetchResponse.status;
    const data = await fetchResponse.json();
    return { ...response, data };
  } catch (error) {
    return error;
  }
};

export const formDataApi = async (url, method, dataObj) => {
  try {
    const data = new FormData();
    let response = {};
    Object.keys(dataObj).forEach((key) => data.append(key, dataObj[key]));

    const res = await fetch(url, { method: method, body: data });
    response.status = res.status;
    const fetchedData = await res.json();
    return { ...response, fetchedData };
  } catch (error) {
    return error;
  }
};
