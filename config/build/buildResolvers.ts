import { Configuration } from 'mini-css-extract-plugin';
import { BuildOptions } from './types';

export const buildResolvers = (options: BuildOptions): Configuration['resolve'] => {
    console.log('options.paths.src: ', options.paths.src);

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': options.paths.src,
        },
    };
};
