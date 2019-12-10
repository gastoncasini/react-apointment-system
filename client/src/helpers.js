const formatDay = string => {
  let weekday = string.slice(0, 3);
  let month = string.slice(4, 7);
  const number = string.slice(8, 10);

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

  switch (month) {
    case 'Jan':
      month = 'Enero';
      break;
    case 'Feb':
      month = 'Febrero';
      break;
    case 'Mar':
      month = 'Marzo';
      break;
    case 'Apr':
      month = 'Abril';
      break;
    case 'May':
      month = 'Mayo';
      break;
    case 'Jun':
      month = 'Junio';
      break;
    case 'Jul':
      month = 'Julio';
      break;
    case 'Aug':
      month = 'Agosto';
      break;
    case 'Sep':
      month = 'Septiembre';
      break;
    case 'Oct':
      month = 'Octubre';
      break;
    case 'Nov':
      month = 'Noviembre';
      break;
    case 'Dec':
      month = 'Diciembre';
      break;
    default:
      break;
  }

  return `${weekday} ${number} de ${month}`;
};

export default formatDay;
