import axios from 'axios'

const baseUrl = 'http://65.1.134.57:3000/v1'

// GET request
export async function fetchDataFromApi(endpoint) {
  try {
    const response = await axios.get(`${baseUrl}/${endpoint}`)
    return response.data
  } catch (error) {
    throw error
  }
}

// POST request
export async function postDataToApi(endpoint, formData) {
  try {
    const response = await axios.post(`${baseUrl}/${endpoint}`, formData)
    return response.data
  } catch (error) {
    throw error
  }
}

// PUT request
export async function updateDataInApi(endpoint, formData) {
  try {
    const response = await axios.put(`${baseUrl}/${endpoint}`, formData)
    return response.data
  } catch (error) {
    throw error
  }
}

// DELETE request
export async function deleteDataFromApi(endpoint) {
  try {
    const response = await axios.delete(`${baseUrl}/${endpoint}`)
    return response.data
  } catch (error) {
    throw error
  }
}
