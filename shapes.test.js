const { Shape } = require('./shapes.js');

test('Shape class instantiation', () => {
    const shape = new Shape('blue');
    expect(shape.color).toEqual('blue');
});