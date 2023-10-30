const { Circle } = require('./shapes.js');

test('Circle class instantiation', () => {
    const circle = new Circle('blue');
    expect(circle.color).toEqual('blue');
});
