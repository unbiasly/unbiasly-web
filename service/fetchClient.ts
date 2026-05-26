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
  post: <T>(url: string, body: object) =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: commonHeaders,
    }).then<T>(handleResponse),
};

export default fetchClient;
