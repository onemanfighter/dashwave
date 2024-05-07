module.exports = {
    preset: 'ts-jest',
    verbose: true,
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    roots: ['./'],
    testEnvironment: 'jsdom',
    collectCoverageFrom: ['src/*.tsx', 'src/**/*.tsx'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '@store/slice': '<rootDir>/src/store/slice',
        '@store': '<rootDir>/src/store',
        '@components': '<rootDir>/src/components',
        '@selectors': '<rootDir>/src/store/selectors',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
    // coverageThreshold: {
    //   global: {
    //     branches: 80,
    //     functions: 80,
    //     lines: 80,
    //     statements: -10,
    //   },
    // },
};
