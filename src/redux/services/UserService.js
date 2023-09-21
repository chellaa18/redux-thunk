import * as apiHelper from '../../helper/ApiHelper'

export const UserService = {
  
    HomeTime,
    GetCmsData
   
}


async function HomeTime(data) {
    try {
        const api = await apiHelper.getRequest(`user/distribution`, data)
        return api
    } catch (e) {
        console.error(e)
        return e.toString()
    }
}


async function GetCmsData(data) {
    try {
        const api = await apiHelper.postRequest(`auth/get-cms`, data)
        return api
    } catch (e) {
        console.error(e)
        return e.toString()
    }
}

