export const getFieldTypes = () => {
  let options = [];
  options.push(
    <option value="Text">Text</option>,
    <option value="Number">Number</option>,
    <option value="Date">Date</option>
  );

  return options;
};
