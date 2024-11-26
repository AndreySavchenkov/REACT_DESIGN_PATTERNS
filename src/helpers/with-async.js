export async function withAsync(fn) {
  try {
    if (typeof fn !== "function") {
      throw new Error("The arg. must be a function.");
    }

    const { data } = await fn();

    return {
      response: data,
      error: null,
    };
  } catch (e) {
    return {
      error: e,
      response: null,
    };
  }
}
