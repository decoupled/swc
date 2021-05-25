var obj = {
    bar: async (x) => (await x, 2),
    *gen(x) {
        return yield x.toUpperCase(), 2;
    },
};
console.log(obj.gen("pass").next().value);
