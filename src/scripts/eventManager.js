// Parks Section ****************************************
const handleParkDelete = () => {
  console.log(
    "delete button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  deletePark(parkId).then(() => listNationalParks(), listNationalMonuments());
};

const handleParkVisited = () => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  let visitedParkObject = {
    visited: true
  };

  patchPark(parkId, visitedParkObject).then(() => listNationalParks(), listNationalMonuments());
};

const handleParkEdit = () => {
  console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
  let parkId = event.target.parentNode.id.split("--")[1];

  const parkArticle = document.querySelector(`#national-park--${parkId}`);
  clearElement(parkArticle);

  getPark(parkId).then(parkToEdit => {
    const editFormForPark = parkEditForm(parkToEdit);
    parkArticle.appendChild(editFormForPark);
  });
};

const handleParkUpdate = () => {
  console.log(
    "update button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  const editedParkName = document.querySelector(`#edit-park-name--${parkId}`);
  const editedParkState = document.querySelector(`#edit-park-state--${parkId}`);
  const editedParkLatitude = document.querySelector(`#edit-park-latitude--${parkId}`);
  const editedParkLongitude = document.querySelector(`#edit-park-longitude--${parkId}`);
  const editedParkVisited = document.querySelector(`#edit-park-visited--${parkId}`).parkStatus.value;

  console.log(editedParkName.value, editedParkState.value, editedParkVisited);

  let editedPark = {
    name: editedParkName.value,
    state: editedParkState.value,
    latitude: editedParkLatitude.value,
    longitude: editedParkLongitude.value,
    visited: (editedParkVisited === "true")
  };
  console.log(editedPark)
  putPark(parkId, editedPark).then(() => listNationalParks(), listNationalMonuments());
};

// Monuments Section ***********************************************
const handleMonumentDelete = () => {
  let monumentID = event.target.id.split("--")[1];
  deleteMonument(monumentID)
    .then(listNationalParks)
    .then(listNationalMonuments)
};

const handleMonumentVisited = () => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monumentID = event.target.parentNode.id.split("--")[1];

  let visitedMonumentObject = {
    visited: true
  };

  patchPark(monumentID, visitedMonumentObject).then(() => listNationalParks(), listNationalMonuments());
};

const handleMonumentEdit = () => {
  console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
  let monumentID = event.target.parentNode.id.split("--")[1];

  const monumentArticle = document.querySelector(`#national-monument--${monumentID}`);
  clearElement(monumentArticle);

  getMonument(monumentID).then(monumentToEdit => {
    const editFormForMonument = monumentEditForm(monumentToEdit);
    monumentArticle.appendChild(editFormForMonument);
  });
};

const handleMonumentUpdate = () => {
  console.log(
    "update button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let monumentID = event.target.parentNode.id.split("--")[1];

  const editedMonumentName = document.querySelector(`#edit-monument-name--${monumentID}`);
  const editedMonumentState = document.querySelector(`#edit-monument-state--${monumentID}`);
  const editedMonumentArea = document.querySelector(`#edit-monument-area--${monumentID}`);
  const editedMonumentDateEstablished = document.querySelector(`#edit-monument-date-established--${monumentID}`);
  const editedMonumentVisited = document.querySelector(`#edit-monument-visited--${monumentID}`).monumentStatus.value;

  // console.log(editedMonumentName.value, editedMonumentState.value, editedMonumentVisited);

  let editedMonument = {
    name: editedMonumentName.value,
    state: editedMonumentState.value,
    area: editedMonumentArea.value,
    dateEstablished: editedMonumentDateEstablished.value,
    visited: (editedMonumentVisited === "true")
  };
  console.log(editedMonument)
  putMonument(monumentID, editedMonument).then(() => listNationalMonuments(), listNationalMonuments());
};