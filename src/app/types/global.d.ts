declare module '*.module.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

declare type DeepPartial<T> = unknown extends T
  ? T
  : T extends object
    ? {
        [P in keyof T]?: T[P] extends Array<infer U>
          ? Array<DeepPartial<U>>
          : T[P] extends ReadonlyArray<infer U>
            ? ReadonlyArray<DeepPartial<U>>
            : DeepPartial<T[P]>;
      }
    : T;
