import { Configuration } from 'mini-css-extract-plugin';
import { BuildOptions } from './types';

export const buildResolvers = (options: BuildOptions): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    mainFiles: ['inndex'],
    alias: {
      '@': options.paths.src,
    },
  };
};
