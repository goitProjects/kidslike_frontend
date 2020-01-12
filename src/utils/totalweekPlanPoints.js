const totalWeekPlanPoints = tasks =>
  tasks.reduce((total, task) => {
    const { taskPoints } = task;
    const sumActive = task.days.reduce((amount, el) => {
      return el.isActive === true ? amount + 1 : amount;
    }, 0);
    return total + taskPoints * sumActive;
  }, 0);

export default totalWeekPlanPoints;
