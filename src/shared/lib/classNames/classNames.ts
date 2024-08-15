export type Mode = Record<string, string | boolean | undefined>;

export const classNames = (
  cls: string,
  mods: Mode = {},
  additional: Array<string | undefined> = [],
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};
