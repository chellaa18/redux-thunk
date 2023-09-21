import * as apiHelper from '../../helper/ApiHelper'

export const UserService = {
  
    HomeTime,
    GetCmsData
   
}


async function HomeTime(data) {
    try {
        const api = await apiHelper.getRequest(`products/1`, data)
        return api
    } catch (e) {
        console.error(e)
        return e.toString()
    }
}


async function GetCmsData(data) {
    try {
        const api = await apiHelper.postRequest(`products`, data)
        return api
    } catch (e) {
        console.error(e)
        return e.toString()
    }
}

