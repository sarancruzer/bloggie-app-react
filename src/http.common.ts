import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const customAxios =  axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-type": "application/json"
  }
});

// Step-2: Create request, response & error handlers
const requestHandler = (request: AxiosRequestConfig) => {
    // Token will be dynamic so we can use any app-specific way to always   
    // fetch the new token before making the call
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs';  
    console.log("🚀 ~ file: http.common.ts ~ line 15 ~ requestHandler ~ request", request)
  
    return request;
};

const responseHandler = (response: AxiosResponse<any>) => {
    console.log("🚀 ~ file: http.common.ts ~ line 28 ~ responseHandler ~ response", response)

    if (response.status === 401) {
        // window.location = '/login';
    }

    return response;
};

const errorHandler = (error: any) => {
    console.log("🚀 ~ file: http.common.ts ~ line 33 ~ errorHandler ~ error", error)

    return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
 );


export default customAxios;