const formatDate = date => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit', // чтобы отображался 0 впереди
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('ru', options).format(new Date(date));
};

export default formatDate;
