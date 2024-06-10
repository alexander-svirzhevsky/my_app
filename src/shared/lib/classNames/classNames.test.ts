import { classNames } from './classNames';

describe('classNames', () => {
  test('with only one param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional params', () => {
    const expected = 'someClass class2 class3';
    expect(classNames('someClass', {}, ['class2', 'class3'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class2 class3 hovered scrollable';
    expect(
      classNames(
        'someClass',
        {
          hovered: true,
          scrollable: true,
        },
        ['class2', 'class3'],
      ),
    ).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass class2 class3 hovered';
    expect(
      classNames(
        'someClass',
        {
          hovered: true,
          scrollable: undefined,
        },
        ['class2', 'class3'],
      ),
    ).toBe(expected);
  });
});
