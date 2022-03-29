export const sleep = (time: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export const getConditionalObjectField = (condition: boolean, key: string, value: string) => {
  if (condition) {
    return { [key]: value };
  } else return undefined;
};
