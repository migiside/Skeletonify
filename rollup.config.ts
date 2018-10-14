import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'


export default {
    input: `src/Skeletonify.ts`,
    output: [
        {file: "dist/skeletonify.js", name: 'skeletonify', format: 'umd', sourcemap: true},
    ],
    external: [],
    watch: {
        include: 'src/**',
    },
    plugins: [
        typescript({useTsconfigDeclarationDir: true}),
        sourceMaps(),
    ],
}
