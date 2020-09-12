import up from './up';

test('Spinner - up action returns an action object with type "UP"', () => {
    //Arrange
    const expectedType = 'UP';

    //Act
    const actionObj = up();

    //Assert
    expect(actionObj.type).toBe(expectedType);
});

test('Spinner - up action returns an action object with the given payload', () => {
  //Arrange
  const expectedPayload = 10,
    delta = 10;

  //Act
  const actionObj = up(delta);

  //Assert
  expect(actionObj.payload).toBe(expectedPayload);
});