
//Start with initial state
const initialState={count:0}

function counterReducer(state,action){

    switch(action.type){
        case "increment":
          return {count: state.count+1}
            
        case "decrement":
          return {count: state.count-1}
            
 case "incrementByAmount":
          return {count: state.count+ action.payload}
            

           case "decrementByAmount":
          return {count: state.count- action.payload}
            
        default:
            return state
    }
}

//export count state and function 
export {initialState,counterReducer}