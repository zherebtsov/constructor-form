export default function clientMiddleware() {
  return ({dispatch, getState}) => {
    return (next) => (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      if (action.promise) {
        const {promise, types, payload} = action;
        const [REQUEST, SUCCESS, FAILURE] = types;
        next({type: REQUEST, payload});

        const actionPromise = promise();
        actionPromise.then(
          (result) => next({result, payload, type: SUCCESS}),
          (error) => next({error, payload, type: FAILURE})
        ).catch((error) => {
          console.error('MIDDLEWARE ERROR:', error);
          next({error, payload, type: FAILURE});
        });
        return actionPromise;
      } else {
        return next(action);
      }
    };
  };
}
