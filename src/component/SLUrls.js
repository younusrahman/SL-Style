const LocationLookupUrl =  (searchText) => {return `typeahead.json?key=19ea15738f524966a31f0842dd4cb82d&searchstring=${searchText}&stationsonly=true`}


const TravelPlannerDeparts = (originId, destId) => {return `TravelPlannerV3_1/trip.json?key=9abdf7cb3b1d4ac99350526bb478b1d7&originId=${originId}&destId=${destId}&searchForArrival=0`}




export {LocationLookupUrl, TravelPlannerDeparts};