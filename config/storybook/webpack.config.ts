import path from 'path';
import { BuildPaths } from '../build/types';
import { Configuration } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        html: '',
        output: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    // config.module.rules.push(buildCssLoader(true));
    config.resolve.alias = {
        '@': paths.src,
    };

    return config;
};
