const teamObj = require('./team.js');

test('Check to see that the constructor works correctly', () => {
    let team = new teamObj('Optimus Prime', 10);
    let result = [team['teamName'], team['level'], team['points']];

    expect(result).toStrictEqual(['Optimus Prime', 10, 0])
});

test('If the points weren\'t assigned, return 0', () =>{
    let team = new teamObj('Optimus Prime', 10);
    let result = team['points'];

    expect(result).toBe(0);
});

test('Adding another argument to the constructor allows the object to be created without changes to points', () =>{
    let team = new teamObj('Optimus Prime', 10, 1);
    let result = team['teamName'];

    expect(result).toBe('Optimus Prime')
});

test('Adding another argument to the constructor does not change the points', () =>{
    let team = new teamObj('Optimus Prime', 10, 1);
    let result = team['points'];

    expect(result).toBe(1)
});