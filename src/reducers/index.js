import {FETCH_SMURF_DATA, ADD_SMURF_SUCCESS, SMURF_DATA_FAILURE, ADD_SMURF} from '../actions/index'

export const initialState = {
    smurfs: [],
    loading: false,
    error: '',
    // newSmurf:{
    //     name:'',
    //     position:'',
    //     nickname:'',
    //     description:''
    // }
}

export const smurfsReducer = (state = initialState, action)=>{

    switch(action.type){
       case FETCH_SMURF_DATA:
           return{
                ...state,
                isLoading: true,
                errors: ""
          };
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
          };
        case SMURF_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
              };
        case ADD_SMURF:
            return {
                ...state, 
                smurfs: [
                    ...state.smurfs, 
                    {
                    name: action.payload,
                    height: "5cm",
                    age: 100,
                    id: new Date()        
                  }]};
           default:
         return state;
    }
}
export default smurfsReducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary