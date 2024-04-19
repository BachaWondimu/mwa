type Params = {
  first: number,
  second:number
}
const addTwoNumbers = (params:Params) => {
  return params.first + params.second;
};