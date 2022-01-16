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
