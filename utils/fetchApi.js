import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

//headers: {
//  'x-rapidapi-host': 'bayut.p.rapidapi.com',
//    'x-rapidapi-key': '3dbd98c1a0msh2e7d062b41b22c2p1a4103jsna92732e05a4f'
//}

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '3dbd98c1a0msh2e7d062b41b22c2p1a4103jsna92732e05a4f'
    }
  })
  return data;
}