const formatDate = date => {
  const d = date * 1000;
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit', // чтобы отображался 0 впереди
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('ru', options).format(new Date(d));
};

export default formatDate;
