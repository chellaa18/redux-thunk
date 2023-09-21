import { UserService } from '../services'
import { UserConstant } from '../constants'
import { BaseAction } from "./BaseAction";
const { success } = BaseAction;

export const UserAction = {
 
    HomeTime,
    GetCmsData,
};



function HomeTime(data = {}, callback = () => { }) {

    return async dispatch => {
        try {
            let resp = await UserService.HomeTime(data)
            callback(resp)
            dispatch(success(UserConstant.HOMETIME, resp.data))
        } catch (e) {
            console.error(e)
        }
    }
};

function GetCmsData(data = {}, callback = () => { }) {

    return async dispatch => {
        try {
            let resp = await UserService.GetCmsData(data)
            callback(resp)
            dispatch(success(UserConstant.GETCMSDATA, resp))
        } catch (e) {
            console.error(e)
        }
    }
}