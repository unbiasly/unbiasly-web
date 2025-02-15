export const handleResponse = <T>(response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<T>;
};

const commonHeaders = {
  "Content-Type": "application/json",
};

const fetchClient = {
  get: <T>(url: string) => fetch(url).then<T>(handleResponse),
  post: <T>(url: string, body: object | FormData) => {
    const headers = body instanceof FormData ? {} : commonHeaders;
    
    const requestBody = body instanceof FormData ? body : JSON.stringify(body);
    return fetch(url, {
      method: "POST",
      body: requestBody,
      headers: headers as HeadersInit,
    }).then<T>(handleResponse);
  },
};

export default fetchClient;
