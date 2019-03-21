const listNationalParks = () => {
  getAllParks().then(parksArray => {
    console.log("parksArray", parksArray)
    let nationParksFragment = document.createDocumentFragment();

    parksArray.forEach(park => {
      let parkHtml = buildParkHtml(park);
      nationParksFragment.appendChild(parkHtml);
    });

    const nationalParksSection = document.querySelector("#national--parks");
    clearElement(nationalParksSection)
    nationalParksSection.appendChild(nationParksFragment)
  });
};

const listNationalMonuments = () => {
  getAllMonuments().then(monumentsArray => {
    console.log("monuments array:", monumentsArray);
      let monumentsDocumentFragment = document.createDocumentFragment();

      monumentsArray.forEach(monument => {
        let monumentHTML = buildMonumentHTML(monument);
        monumentsDocumentFragment.appendChild(monumentHTML);
    });

    const nationalMonumentsSection = document.querySelector("#national--monuments");
    clearElement(nationalMonumentsSection)
    nationalMonumentsSection.appendChild(monumentsDocumentFragment);
  })
};