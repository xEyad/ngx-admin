const e2a = s => s.replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
export class Utility
{
  static minutesToHHMM(mins)
  {
    try{
      let date = new Date(0);
      date.setMinutes(mins); // specify value for minutes here
      let timeString = date.toISOString().substr(11, 5);
      timeString = e2a(timeString);
      // timeString = timeString.split(':').reverse().join(':');
      return timeString;
    }
    catch(e)
    {
      return 'error'
    }
  }
  static getTotalOfKey(stats,keyName):number
  {
    let total=0;
    for (const stat of stats) {
      total += Number(stat[keyName])
    }
    return total;
  }
  static getAllOfKey(stats,keyName):Array<any>
  {
    let arr=[];
    for (const stat of stats) {
      arr.push( Number(stat[keyName]));
    }
    return arr;
  }
  static getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  static average(data:any[])
  {
    let total = 0;
    for(let i = 0; i < data.length; i++) {
        total += data[i];
    }
    let avg = total / data.length;
    return avg;
  }
  static calculateDailyRate(data:any[])
  {
    const deltas = [];
    const end = data.length-1;
    for (let i = end; i > 0; i--) {
      const d = data[i] - data[i-1];
      deltas.push(d);
    }
    const avg = Utility.average(deltas);
    return Math.floor(avg);
  }
  static calculateWeeklyRate(data:any[])
  {
    let nums = data;
    let weeks = Math.floor(nums.length/7);
    if(weeks==0)
      return 0;
    let weeklyAvg = (Utility.calculateDailyRate(data)*7) / weeks;
    return Math.floor(weeklyAvg);
  }
  static calculateMonthlyRate(data:any[])
  {
    let nums = data;
    let months = Math.floor(nums.length/30);
    if(months==0)
      return 0;
    let monthlyAvg = (this.calculateDailyRate(data)*30) / months;
    return Math.floor(monthlyAvg);
  }
  static getDifferenceFromLastWeek(data:any[])
  {
    if(data.length < 14)
      return 0;
    let last = data.slice(data.length-7);
    let beforeLast = data.slice(data.length-14,data.length-7);

    let difference =  Utility.average(last) - Utility.average(beforeLast);

    return (difference*100)/Utility.average(last);
  }
  static getDifferenceFromLastMonth(data)
  {
    if(data.length < 60)
      return 0;
      if(data.length < 14)
      return 0;
    let last = data.slice(data.length-30);
    let beforeLast = data.slice(data.length-60,data.length-30);

    let difference =  Utility.average(last) - Utility.average(beforeLast);

    return (difference*100)/Utility.average(last);
  }
}
