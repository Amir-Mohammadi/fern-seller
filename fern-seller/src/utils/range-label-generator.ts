export enum TimeRangeType {
  'day',
  'week',
  'month',
  'year',
}

const index = (range: TimeRangeType) => {
  return ranges[range];
};

export default index;

const ranges = [
  hourCounter(),
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  dayCounter(),
  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
];

function dayCounter() {
  const days: Array<string> = [];
  while (days.length < 30) {
    days.push((1 + days.length).toString());
  }

  return days;
}

function hourCounter() {
  const hours: Array<string> = [];
  while (hours.length < 24) {
    hours.push((1 + hours.length).toString());
  }

  return hours;
}
