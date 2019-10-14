import axios from 'axios'


export const handleSubmit = async(item, tab) => {
  let path = tab === '1' ? 'feature-request' : tab === '2' ? 'client' : 'product-area'
  if (item.id) {
    let res = await axios.put(`http://localhost:8000/api/${path}/${item.id}/`, item)
    return res
  }
  let res = await axios.post(`http://localhost:8000/api/${path}/`, item)
  return res
};

export const handleDelete = async (item, tab) => {
  let path = tab === '1' ? 'feature-request' : tab === '2' ? 'client' : 'product-area'
  await axios.delete(`http://localhost:8000/api/${path}/${item.id}`)
};

export const refreshList = async () => {
  let result = []
  let res1 = await axios.get('http://localhost:8000/api/feature-request/')
  let res2 = await axios.get('http://localhost:8000/api/client/')
  let res3 = await axios.get('http://localhost:8000/api/product-area/')
  result.push(res1,res2,res3)
  return result
};
