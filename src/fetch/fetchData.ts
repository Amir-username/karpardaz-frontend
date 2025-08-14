export async function fetchData<T>(fetchFunc: () => Promise<T>) {
  let data: T | undefined = undefined;
  let loading = true;
  let errorMessage = "";

  try {
    const res = await fetchFunc();
    if (res) {
      loading = false;
      data = res;
    }
  } catch (error) {
    if (error instanceof Error) {
      errorMessage = error.message;
    }
  } finally {
    return { data, errorMessage, loading };
  }
}
