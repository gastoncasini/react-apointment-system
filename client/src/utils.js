export const formatDay = (DateObj, format) => {
  const stringDate = DateObj.toString();

  let weekday = stringDate.slice(0, 3);
  let writtenMonth = stringDate.slice(4, 7);
  const day = stringDate.slice(8, 10);
  const month = DateObj.getMonth() + 1;
  const year = stringDate.slice(11, 15);

  if (format === 'array') {
    return [year, weekday, writtenMonth, day];
  }
  if (format === 'input') {
    return `${day}/${month}/${year}`;
  }

  switch (weekday) {
    case 'Mon':
      weekday = 'Lunes';
      break;
    case 'Tue':
      weekday = 'Martes';
      break;
    case 'Wed':
      weekday = 'Miercoles';
      break;
    case 'Thu':
      weekday = 'Jueves';
      break;
    case 'Fri':
      weekday = 'Viernes';
      break;
    case 'Sat':
      weekday = 'Sabado';
      break;
    case 'Sun':
      weekday = 'Domingo';
      break;
    default:
      break;
  }

  switch (writtenMonth) {
    case 'Jan':
      writtenMonth = 'Enero';
      break;
    case 'Feb':
      writtenMonth = 'Febrero';
      break;
    case 'Mar':
      writtenMonth = 'Marzo';
      break;
    case 'Apr':
      writtenMonth = 'Abril';
      break;
    case 'May':
      writtenMonth = 'Mayo';
      break;
    case 'Jun':
      writtenMonth = 'Junio';
      break;
    case 'Jul':
      writtenMonth = 'Julio';
      break;
    case 'Aug':
      writtenMonth = 'Agosto';
      break;
    case 'Sep':
      writtenMonth = 'Septiembre';
      break;
    case 'Oct':
      writtenMonth = 'Octubre';
      break;
    case 'Nov':
      writtenMonth = 'Noviembre';
      break;
    case 'Dec':
      writtenMonth = 'Diciembre';
      break;
    default:
      break;
  }

  return `${weekday} ${day} de ${writtenMonth}`;
};

export const replaceArrayElement = (array, obj) => {
  const updatedArray = array.map((value, index) => {
    if (index === obj.position) {
      return obj.value;
    }
    return value;
  });

  return updatedArray;
};

export const fillSchedule = (start, end) => {
  let schedule = [];
  for (let i = start; i <= end + 1; i++) {
    const current = i < 10 ? `0${i}:00` : `${i}:00`;

    schedule.push(current);
  }
  return schedule;
};
