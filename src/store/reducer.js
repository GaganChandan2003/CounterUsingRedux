// let initialState={
//     count:10
// }

export const reducer=(state,action)=>
{
    switch(action.type)
    {
        case "INC":
            {
               state.count++
               return {...state}
            }
        case "DEC":
            {
               state.count--
               return {...state}
            }     
        default:
            {
                return state
            }                       
    }
    
};