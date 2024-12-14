import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'; 
import typescript from 'rollup-plugin-typescript2';

const devMode = process.env.NODE_ENV === 'development';
console.log(`${devMode ? 'development' : 'production'} mode bundle`);

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'es',
        sourcemap: devMode ? 'inline' : false,
      },
      {
        file: 'dist/index.d.ts',  // Ensure declaration file is output
        format: 'es',
      },
    ],
    plugins: [
        resolve({
            extensions: ['.js', '.jsx','.ts','.tsx'],  // Make sure Rollup resolves .js and .jsx files
          }),
          babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ],
          }),
          
      commonjs(),
      terser({
        ecma: 2020,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: !devMode,
          drop_debugger: !devMode,
        },
        output: { quote_style: 1 },
      }),
      typescript({
        tsconfig: './tsconfig.json',
        check:false // Path to your tsconfig.json
      })
    ],
    external: ['react', 'react-dom' , 'lucide-react' ,'tailwind-merge'],
  },
];
