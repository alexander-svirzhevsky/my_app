import { Configuration } from 'mini-css-extract-plugin';
import { BuildOptions } from './types';

export const buildResolvers = (options: BuildOptions): Configuration['resolve'] => {
  console.log('options.paths.src: ', options.paths.src);

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    mainFiles: ['index'],
    alias: {
      '@': options.paths.src,
    },
  };
};
