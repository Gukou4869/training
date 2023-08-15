/** simple helper function to promise timeout, works for animations and also promise testing/tryout */
export const sleep = async (timeout: number) =>
  new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, timeout);
  });
