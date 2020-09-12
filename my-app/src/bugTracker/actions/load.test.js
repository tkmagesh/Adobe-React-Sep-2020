import load from './load';
import bugApi from '../services/bugApi';

jest.mock('../services/bugApi');

test('load dispatches the action', async () => {
     //Arrange
    const mockDispatch = jest.fn();
    bugApi.getAll.mockResolvedValue('Dummy Data');
    await load()(mockDispatch);
    expect(mockDispatch.mock.calls.length).toBe(1);
})

test("load dispatches the action with the data from bugApi", async () => {
  //Arrange
  const mockDispatch = jest.fn();
  bugApi.getAll.mockResolvedValue("Dummy Data");
  await load()(mockDispatch);
  expect(mockDispatch.mock.calls[0][0].type).toBe('LOAD_BUGS');
});

test("load dispatches the action with the data from bugApi", async () => {
  //Arrange
  const mockDispatch = jest.fn();
  const bugApiGetAllResult = "Dummy Data";
  bugApi.getAll.mockResolvedValue(bugApiGetAllResult);
  await load()(mockDispatch);
  expect(mockDispatch.mock.calls[0][0].payload).toBe(bugApiGetAllResult);
});

/* function fn(callback){
    callback(100);
}

test('dummy test', () => {
    const mockFn = jest.fn();

    fn(mockFn);

    expect(mockFn.mock.calls.length).toBe(1);
})

test("dummy test with argument", () => {
  const mockFn = jest.fn();

  fn(mockFn);

  expect(mockFn.mock.calls[0][0]).toBe(100);
}); */