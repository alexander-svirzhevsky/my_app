export type BuildPaths = {
  entry: string;
  html: string;
  output: string;
  src: string;
};

export type BuildMode = 'production' | 'development';

export type EnvVariables = {
  mode: BuildMode;
  port: number;
  analyzer: boolean;
  apiUrl: string;
};

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer?: boolean;
  apiUrl: string;
}
