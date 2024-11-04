
const apiUrl: string = "http://localhost:8080/";

type MarkerDataType = any; // TODO: Define the type of the marker data

export const fetchAllFeildMarkers = async () => {
  const response = await fetch(apiUrl + "/marker");
  const data = await response.json();
  return data;
}

export const postFeildMarkers = async (markerData: MarkerDataType) => {
  const response = await fetch(apiUrl + "/marker", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(markerData)
  });
  const data = await response.json();
  return data;
}
