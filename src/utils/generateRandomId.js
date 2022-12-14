const generateRandomId = () =>
  Math.random().toString(36).substring(2, 8) +
  Date.now().toString().substring(9);
// toString(36) чтобы сгенерировались и буквы


// ф-ция автоматически будет добавлять ID
export const assighId = (obj) => ({...obj, id: generateRandomId()});
