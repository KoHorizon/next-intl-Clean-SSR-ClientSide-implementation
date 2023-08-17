import { getRequestConfig } from 'next-intl/server';

type AnyObject = { [key: string]: any };

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
} & AnyObject;


// Create a context for the translations directory
// @ts-ignore
const context = require.context('./translations', true, /\.json$/);

export default getRequestConfig(async ({ locale }) => {
  const keys: string[] = context.keys();
  const localeKeys: string[] = keys.filter((key: string) => key.startsWith(`./${locale}/`));

  let messages: { [key: string]: any } = {};

  for (const key of localeKeys) {
    const fileContent: { [key: string]: any } = context(key);
    
    const keySegments: string = key
      .replace(`./${locale}/`, '')
      .replace('.json', '')
      .split('/')
      .join('.');

    const nestedMessages: { [key: string]: any } = keySegments.split('.').reverse().reduce((acc: { [key: string]: any }, segment: string) => {
      return { [segment]: acc };
    }, fileContent);

    messages = deepMerge(messages, nestedMessages);
  }

  return {
    messages,
  };
});

// Helper function to deep merge objects
function deepMerge(target: AnyObject, source: AnyObject): AnyObject {
  const isObject = (obj: any): obj is object => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach((key: string) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge(targetValue, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}
