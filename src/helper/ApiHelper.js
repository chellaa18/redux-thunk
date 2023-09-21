import { AuthHeader } from "./Auth";
import axios from 'axios';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


let cancelToken;

let url;
switch (process.env.NODE_ENV) {
  case "development":
   

    break;
  case "devel":
 
    break;
  default:
 
    break;
}

export const getRequest = async (endpoint, isCancel = false) => {
  return makeRequest(`${url}/${endpoint}`, "GET", isCancel);
};


export const putRequest = async (endpoint, body, isCancel = false) => {
  return makeRequest(`${url}/${endpoint}`, "PUT", body, isCancel);
};


export const postRequest = async (endpoint, body, isCancel = false) => {
  return makeRequest(`${url}/${endpoint}`, "POST", body, isCancel);
};

export const deleteRequest = async (endpoint, body, isCancel = false) => {
  return makeRequest(`${url}/${endpoint}`, "DELETE", body, isCancel);
};



const makeRequest = async (endpoint, responseType, data, isCancel = false) => {
  if (isCancel) {
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }
    cancelToken = axios.CancelToken.source();
  }
  try {
    const resp = await axios({
      url: endpoint,
      method: responseType,
      // data: JSON.stringify(data),
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthHeader().Authorization,
      },
      cancelToken: isCancel && cancelToken.token,
    });
    return await handleResponse(resp);
  } catch (e) {
    await handleErrors(e.response);
  }
};

const ErrorReload = (res) => {
  if (res != undefined && window.location.pathname !== '/') {
    window.location.replace("/")
    localStorage.clear();
  }
}


const handleErrors = (res) => {
  console.log(res); 
  if (res != undefined)
    if (
      res.data.message === "jwt expired" ||
      res.data.message === "Please authenticate" ||
      res.data.message === "jwt must be provided"
    ) {
    //   toast.error("Session Time Out!")
      ErrorReload(res);
    } else if (res.status === 500) {
      // toast.error(res.statusText);
      // toast.error(res.data.message);

    }
    else if (res.status === 400) {
      // toast.error(res.data.message);
      // toast.error(res.data.errors[0].msg);
    }
   else if (res.status === 401) {
    // toast.error(res.statusText);
    // toast.error(res.data.message);

   }
    else {
      //NotificationManager.error(res.data);
    }
};


const handleResponse = (response) => {
  if (response.status === 200 || response.status === 201) {
    return response;
  } else if (response.status === 401 || response.message === "jwt expired") {
    throw new Error("UnAuthorised");
  } else if (response.status === 500) {
    // toast.error("Session Time Out!");

    if (
      response.message === "jwt expired" ||
      response.message === "Please authenticate"
    ) {
      window.location.href = "/";
    //   toast.error("Session Time Out!");
    } else {
    //   toast.error("Internal server error");
    }
  } else {
    // toast.error("Network Error");
  }
};

