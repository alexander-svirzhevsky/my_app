type Mode = Record<string, string | boolean>;

export const classNames = (cls: string, mods: Mode, additional: string[]): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
};

classNames('remove-btn', { hovered: true, red: false }, ['additional']);
