const handleParkDelete = () => {
  console.log("delete button clicked", event.target.id.split("--")[1]);
  let parkId = event.target.id.split("--")[1];

  deletePark(parkId)
    .then(listNationalParks)
    .then(listNationalMonuments)
};

const handleMonumentDelete = () => {
  let monumentID = event.target.id.split("--")[1];
  deleteMonument(monumentID)
    .then(listNationalParks)
    .then(listNationalMonuments)
}