export function navigateWithParams(
  navigate: any,
  path: string,
  params: Record<string, string>,
  state?: any
) {
  let url = path;

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      url = url.replace(`:${key}`, params[key]);
    }
  }

  navigate(url, { state });
}
