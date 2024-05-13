import { post } from '../../api'

export async function countriesService () {
  return await post('general/select/countries')
}
