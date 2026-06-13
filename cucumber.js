module.exports = {
    default: {
        require: ["./steps/**/*.ts"],
        requireModule: ["ts-node/register"],
        format: ["progress"],
    },
};
