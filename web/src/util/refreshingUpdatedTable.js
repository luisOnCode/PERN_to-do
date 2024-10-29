function refreshingUpdatedTable(method, list, whatChanged) {
    const theUpdated = []
    const notUpdated = []
    list.filter(item => {
        item.todo_id === whatChanged ? theUpdated.push(item) : notUpdated.push(item)
    })

    if (method === "DELETE") {
        return notUpdated
    }
    
    if (method === "UPDATE") {
        return notUpdated.push(theUpdated[0])
    }
}

export default refreshingUpdatedTable;