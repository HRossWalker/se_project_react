const baseUrl = "http://localhost:3001";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Contenet-Type": "application/json",
    },
  }).then(handleServerResponse);
};

const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Contenet-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleServerResponse);
};

const removeItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Contenet-Type": "application/json",
    },
  }).then(handleServerResponse);
};

const api = {
  getItems,
  addItem,
  removeItem,
};

export default api;
