let initialState =
{
    tasksArr: []
}


export default function reducer(state = initialState, action) {
    if (action.type === "add") {
        let newArr = [...state.tasksArr]
        newArr.push(action.payload)
        return { ...state, tasksArr: newArr }
    }
    else if (action.type === "delete") {
        let taskIndex = action.payload;
        if (taskIndex !== -1) {
            let newArr = [...state.tasksArr]
            newArr.splice(taskIndex, 1)
            return { ...state, tasksArr: newArr }
        }
    }
    else if (action.type === "update") {
        const { index, task } = action.payload 
        const newArr = [...state.tasksArr]

        if (index >= 0 && index < newArr.length) {
            newArr[index] = task
        }
        return { ...state, tasksArr: newArr }
    }


    return { ...state }
}