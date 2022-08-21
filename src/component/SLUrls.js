const LocationLookupUrl =  (searchText) => {return `typeahead.json?key=${process.env.REACT_APP_SL_LOCATION_LOOKUP_URL_API_KEY}&searchstring=${searchText}&stationsonly=true`}
const SLTravelPlanner = (originId, destId, date = "", time="", Arrival="0") => {return `TravelPlannerV3_1/trip.json?key=${process.env.REACT_APP_SL_Travel_Planner_API_KEY}&originId=${originId}&destId=${destId}&searchForArrival=${Arrival == "2" ? "1" : "0"}&date=${date}&time=${time}`}















export {LocationLookupUrl, SLTravelPlanner};