// передаем ф-цию которая слишком часто запускается и возвращаем
// ф-цию которая будет оптимально запускать переданную ф-цию
export const debounceRaf = fn => {
  let raf = 0;

  return (...args) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      fn(...args);
      raf = 0;
    });
  };
};
