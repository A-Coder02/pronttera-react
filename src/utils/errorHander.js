export const errorHandler = (error) => {
  console.log(error.stack);
  console.log(error.message);
  console.log(error.name);
  alert(error.message);
};
