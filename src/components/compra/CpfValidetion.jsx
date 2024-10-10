export const insertMaskConfig = (cpfItem) => {
  return cpfItem.replace(/(\{3})(\{3})(\{3})(\{2})/g, "$1.$2.$3.$4");
};
