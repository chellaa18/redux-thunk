import { UserConstant } from "../constants";

const initialState = {

  };

export default function (state = initialState, action) {
    if (!action || (action && !action.type)) return state;
  
    switch (action.type) {

      case UserConstant.HOMETIME:
        return {
          ...state,
          HomeTime: action.data
        }  
      case UserConstant.GETCMSDATA:
        return {
          ...state,
          GetCmsData: action.data
      }  
        
      
      default:
        return state;
    }
  }