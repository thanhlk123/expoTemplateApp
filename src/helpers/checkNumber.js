export default str => {
  const numberStr01 = (str + '').replace(/\./g, '');
  const numberStr02 = numberStr01.replace(/,/g, '');

  if (+numberStr02) {
    return true;
  }

  return false;
};
