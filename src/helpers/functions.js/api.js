export const postApi = async (url, data) => {
  let response = {};
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const fetchResponse = await fetch(url, config);
    console.log(fetchResponse);
    response.status = fetchResponse.status;
    const data = await fetchResponse.json();
    return { ...response, ...data };
  } catch (error) {
    return error;
  }
};
