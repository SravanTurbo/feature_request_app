import axios from 'axios'

let BASE_URL = 'https://hidden-brushlands-93268.herokuapp.com'

export const handleSubmit = async(item, tab) => {
  let path = tab === '1' ? 'feature-request' : tab === '2' ? 'client' : 'product-area'
  if (item.id) {
    let res = await axios.put(`${BASE_URL}/api/${path}/${item.id}/`, item)
    return res
  }
  let res = await axios.post(`${BASE_URL}/api/${path}/`, item)
  return res
};

export const handleDelete = async (item, tab) => {
  let path = tab === '1' ? 'feature-request' : tab === '2' ? 'client' : 'product-area'
  await axios.delete(`${BASE_URL}/api/${path}/${item.id}`)
};

export const refreshList = async () => {
  let result = []
  let res1 = await axios.get(`${BASE_URL}/api/feature-request/`)
  let res2 = await axios.get(`${BASE_URL}/api/client/`)
  let res3 = await axios.get(`${BASE_URL}/api/product-area/`)
  result.push(res1,res2,res3)
  return result
};
