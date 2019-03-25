const apiBaseUrl = "http://localhost:8088"

// Parks Section ********************************
const getAllParks = () => fetch(`${apiBaseUrl}/parks`).then(response => response.json())

const deletePark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "DELETE"
})

const patchPark = (parkId, updatedParkObject) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedParkObject)
})

const getPark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`).then(response => response.json())

const putPark = (parkId, updatedParkObject) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedParkObject)
})

// Monuments Section ******************************
const getAllMonuments = () => fetch(`${apiBaseUrl}/monuments`).then(response => response.json())

const deleteMonument = (monumentID) => fetch(`${apiBaseUrl}/monuments/${monumentID}`, {
  method: "DELETE"
})

const patchMonument = (monumentID, updatedMonumentObject) => fetch(`${apiBaseUrl}/monuments/${monumentID}`, {
  method: "PATCH",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedMonumentObject)
})

const getMonument = (monumentID) => fetch(`${apiBaseUrl}/monuments/${monumentID}`).then(response => response.json())

const putMonument = (monumentID, updatedMonumentObject) => fetch(`${apiBaseUrl}/monuments/${monumentID}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(updatedMonumentObject)
})