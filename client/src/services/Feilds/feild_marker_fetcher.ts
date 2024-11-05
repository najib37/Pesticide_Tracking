import axios from "axios";
import { MarkerType } from "../../types/MarkerType";
const apiUrl: string = "http://localhost:9090/api/v1/";


export const fetchAllMarkers = async () => {
  const response = await axios.get("http://localhost:9090/api/v1/marker");
  const data = await response.data;
  return data;
}

export const postMarker = async (
  url: string,
  { arg }: { arg: MarkerType }
) => {
  const response = await axios.post("http://localhost:9090/api/v1/marker/", arg, {
    headers: {
      'Content-Type': 'application/json'
    },
  });
  console.log("________________________________")
  console.log(response);
  console.log("________________________________")
}
