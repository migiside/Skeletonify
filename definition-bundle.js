var dts = require('dts-bundle');

dts.bundle({
    name: 'skeletonify',
    main: 'build/**/*.d.ts',
    out: '../dist/skeletonify.d.ts', 
    outputAsModuleFolder: true
});