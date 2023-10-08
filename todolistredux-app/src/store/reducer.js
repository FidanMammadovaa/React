let initialState =
{
    tasksArr: []
}


export default function reducer(state = initialState, action)
{
    if (action.type === "add")
    {
        let newArr = [...state.tasksArr]
        newArr.push(action.payload)
        return {...state, tasksArr: newArr}
    }
    else if (action.type === "delete")
    {
        let index = action.payload
        let newArr = state.tasksArr.filter((task) => task.id != index)
        console.log(newArr)
        return {...state, tasksArr: newArr}
    }
    else if (action.type === "update")
    {
        // let taskToUpdate = action.payload
        // let newArr = [...state.tasksArr]
        // newArr = newArr.find((task) => task === taskToUpdate)

        // return {...state, tasksArr: newArr}
    }


    return {...state}
}