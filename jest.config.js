module.exports = {
    // set jest configuration path
    "bail": 1,
    verbose: true,

    "roots": [
      "<rootDir>/test"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },

    // Setup Enzyme
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
  }
