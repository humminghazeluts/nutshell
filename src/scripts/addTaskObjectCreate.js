const createTask = (taskName, expectedCompletionDate, completed) => {
    return {
      taskName : taskName,
      expectedCompletionDate: expectedCompletionDate,
      completed : completed
    }
  }
export default createTask