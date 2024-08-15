import path from 'path';
import { BuildPaths } from '../build/types';
import { Configuration, RuleSetRule } from 'webpack';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    html: '',
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');
  config!.resolve!.alias = {
    '@': paths.src,
  };
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/ };
    }
    return rule;
  });
  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};
