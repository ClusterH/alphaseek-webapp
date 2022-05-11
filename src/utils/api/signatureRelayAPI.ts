import axios from 'axios'

import { setupInterceptorsTo } from 'config/axios/axiosInterceptors'
import { SIGNATURE_RELAY_API } from 'config/constants'

const specificAxios = setupInterceptorsTo(axios.create())

export const getSignatureAndNonce = async (address: string, amount: number) => {
  try {
    const { data, status } = await specificAxios.post(`${SIGNATURE_RELAY_API}`, { address, amount })
    if (status === 200) {
      return data
    } else return false
  } catch (e: any) {
    console.log(e)
  }
}
