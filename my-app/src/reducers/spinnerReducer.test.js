import spinnerReducer from './spinnerReducer';

test('spinnerReducer - up action increments the state', ()=> {
    const intialState = 10,
        delta = 1, 
        expectedState = 11,
        action = { type : 'UP', payload : delta };

    const newState = spinnerReducer(intialState, action);

    expect(newState).toBe(expectedState);
})