const createTask = (taskName, expectedCompletionDate, completed) => {
  const userId = Number(sessionStorage.getItem("userId"))
    return {
      taskName : taskName,
      expectedCompletionDate: expectedCompletionDate,
      completed : completed,
      userId:  userId
    }
  }
export default createTask