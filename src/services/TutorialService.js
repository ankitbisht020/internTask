import http from "./http-common";

const getAll = () => {
  return http.get("/tutorials");
};

const get = (id) => {
  return http.get(`/tutorials/${id}`);
};

const create = (data) => {
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/tutorials/2`);
};




const TutorialDataService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default TutorialDataService;
