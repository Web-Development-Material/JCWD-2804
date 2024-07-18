import axios from "axios";

const API_URL =
  "https://cdn.contentful.com/spaces/ipzb87vgy2fw/environments/master/entries?access_token=hkpho6Q9WsCsVAlLChpE-PtXNkoEjZdGYgYBdKd1QNA";

export const fetchEntries = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
