export const  Observer = (next, error, complete) => {
  let isCompleted = false
  const completeSubscription = () => isCompleted = true
  return {
    next: (x) => !isCompleted && next(x),
    error: (e) => {
      completeSubscription()
      error(e)
    },
    complete: () => {
      completeSubscription()
      complete()
    }
  };
};