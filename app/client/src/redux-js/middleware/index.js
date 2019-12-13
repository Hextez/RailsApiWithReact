import * as Stuff from '../constants/action-types';


export function test({dispatch}){
    return function(next){
        return function(action){
            if(action.type === "SA"){
                return dispatch({type: "WRONG" });
            }
            return next(action);
        }
    }
}