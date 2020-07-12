import Axios from 'axios'

export default async params => {
  const { data } = await Axios.get('characters', { params })
  return data
}