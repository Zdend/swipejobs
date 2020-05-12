export const TIMEOUT_DELAY = 2000;

export const resolveAsync = (shouldReject = false, payload = null) => () => {
  return new Promise((resolve, reject) => {
    setTimeout(shouldReject ? reject : resolve, TIMEOUT_DELAY, payload);
  });
};
