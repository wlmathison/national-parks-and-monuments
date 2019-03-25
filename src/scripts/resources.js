// Parks Section ***********************************
const buildParkHtml = parkObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement("article", `national-park--${parkObject.id}`);
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  if (parkObject.visited !== true) {
    let visitedParkButton = buildElement("button", undefined, "Visited Park")
    parkArticle.appendChild(visitedParkButton);
    visitedParkButton.addEventListener("click", handleParkVisited)
  }

  let editParkButton = buildElement("button", undefined, "Edit Park")
  parkArticle.appendChild(editParkButton);
  editParkButton.addEventListener("click", handleParkEdit)

  let deleteParkButton = buildElement("button", undefined, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleParkDelete)
  return parkArticle;
};

const parkEditForm = (parkObject) => {
  let editFormFragment = document.createDocumentFragment()

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-name--${parkObject.id}`, undefined, parkObject.name))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-state--${parkObject.id}`, undefined, parkObject.state))

  editFormFragment.appendChild(buildElement("label", undefined, "Latitude"))
  editFormFragment.appendChild(buildElement("input", `edit-park-latitude--${parkObject.id}`, undefined, parkObject.latitude))

  editFormFragment.appendChild(buildElement("label", undefined, "Longitude"))
  editFormFragment.appendChild(buildElement("input", `edit-park-longitude--${parkObject.id}`, undefined, parkObject.longitude))

  let editParkRadioForm = buildElement("form", `edit-park-visited--${parkObject.id}`)

  editParkRadioForm.appendChild(buildElement("label", undefined, "Visited"));
  let visitedParkRadio = buildElement("input", undefined, undefined, parkObject.visited);
  visitedParkRadio.setAttribute("type", "radio");
  visitedParkRadio.name = "parkStatus";
  visitedParkRadio.value = true;
  if (parkObject.visited === true) {
    visitedParkRadio.checked = true;
  }
  editParkRadioForm.appendChild(visitedParkRadio)

  editParkRadioForm.appendChild(buildElement("label", undefined, "Not Visited"))
  let notVisitedRadio = buildElement("input", undefined, undefined, parkObject.visited);
  notVisitedRadio.setAttribute("type", "radio");
  notVisitedRadio.name = "parkStatus";
  notVisitedRadio.value = false;
  if (parkObject.visited === false) {
    notVisitedRadio.checked = true;
  }
  editParkRadioForm.appendChild(notVisitedRadio)
  editFormFragment.appendChild(editParkRadioForm)

  const updateParkButton = buildElement("button", undefined, "Update")
  updateParkButton.addEventListener("click", handleParkUpdate)
  editFormFragment.appendChild(updateParkButton)

  return editFormFragment
};

// Monuments Section *************************************
const buildMonumentHTML = (monumentObject) => {
  const monumentArticle = buildElement("article", `national-monument--${monumentObject.id}`);
  monumentArticle.appendChild(buildElement("h3", undefined, monumentObject.name));
  monumentArticle.appendChild(buildElement("p", undefined, monumentObject.state));

  if (monumentObject.visited !== true) {
    let visitedMonumentButton = buildElement("button", undefined, "Visited Monument")
    monumentArticle.appendChild(visitedMonumentButton);
    visitedMonumentButton.addEventListener("click", handleMonumentVisited)
  }

  let editMonumentButton = buildElement("button", undefined, "Edit Monument")
  monumentArticle.appendChild(editMonumentButton);
  editMonumentButton.addEventListener("click", handleMonumentEdit)

  let deleteMonumentButton = buildElement("button", `delete-monument--${monumentObject.id}`, "Delete Monument");
  monumentArticle.appendChild(deleteMonumentButton);
  deleteMonumentButton.addEventListener("click", handleMonumentDelete);
  return monumentArticle;
};

const monumentEditForm = (monumentObject) => {
  let editFormFragment = document.createDocumentFragment()

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-name--${monumentObject.id}`, undefined, monumentObject.name))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-monument-state--${monumentObject.id}`, undefined, monumentObject.state))

  editFormFragment.appendChild(buildElement("label", undefined, "Area"))
  editFormFragment.appendChild(buildElement("input", `edit-monument-area--${monumentObject.id}`, undefined, monumentObject.area))

  editFormFragment.appendChild(buildElement("label", undefined, "Date Established"))
  editFormFragment.appendChild(buildElement("input", `edit-monument-date-established--${monumentObject.id}`, undefined, monumentObject.dateEstablished))

  let editMonumentRadioButton = buildElement("form", `edit-monument-visited--${monumentObject.id}`)

  editMonumentRadioButton.appendChild(buildElement("label", undefined, "Visited"));
  let visitedRadio = buildElement("input", undefined, undefined, monumentObject.visited);
  visitedRadio.setAttribute("type", "radio");
  visitedRadio.name = "monumentStatus";
  visitedRadio.value = true;
  if (monumentObject.visited === true) {
    visitedRadio.checked = true;
  }
  editMonumentRadioButton.appendChild(visitedRadio)

  editMonumentRadioButton.appendChild(buildElement("label", undefined, "Not Visited"))
  let notVisitedRadio = buildElement("input", undefined, undefined, monumentObject.visited);
  notVisitedRadio.setAttribute("type", "radio");
  notVisitedRadio.name = "monumentStatus";
  notVisitedRadio.value = false;
  if (monumentObject.visited === false) {
    notVisitedRadio.checked = true;
  }
  editMonumentRadioButton.appendChild(notVisitedRadio)
  editFormFragment.appendChild(editMonumentRadioButton)

  const updateMonumentButton = buildElement("button", undefined, "Update")
  updateMonumentButton.addEventListener("click", handleMonumentUpdate)
  editFormFragment.appendChild(updateMonumentButton)

  return editFormFragment
};