const changeObjectProperties = require('./task-03');

let style;

beforeEach(()=>{
    style = {
    top: 20,
    bottom: 10,
    margin: { top: 30, bottom: 40 }
  };
})

test('should set positionTop double values' , () => {  
  expect(changeObjectProperties(style).positionTop).toBe(40);
});
test('should properties positionBottom double values' , () => {
    expect(changeObjectProperties(style).positionBottom).toBe(20);
  });
test('should properties marginTop double values' , () => {
    expect(changeObjectProperties(style).marginTop).toBe(30);
});
test('should set marginTop like zero by default' , () => {
  delete style.margin.top;
  expect(changeObjectProperties(style).marginTop).toBe(0);
});
test('should properties marginBottom double values' , () => {
    expect(changeObjectProperties(style).marginBottom).toBe(40);
});
test('should set marginBottom like zero by default' , () => {
  delete style.margin.bottom;
  expect(changeObjectProperties(style).marginBottom).toBe(0);
});