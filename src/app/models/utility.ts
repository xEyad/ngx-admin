
export class Utility
{
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
    let end = data.length-1;
    let last = [];
    let beforeLast = [];
    for (let i = end; i >= end-7 ; i--)
    {
      const stat = data[i];
      last.push(stat);
    }

    end = end-7;
    for (let i = end-7; i >= end-7 ; i--)
    {
      const stat = data[i];
      beforeLast.push(stat);
    }


    let difference =  Utility.average(beforeLast)-Utility.average(last);

    return (difference*100)/Utility.average(last);
  }
  static getDifferenceFromLastMonth(data)
  {
    if(data.length < 60)
      return 0;
    let end = data.length-1;
    let last = [];
    let beforeLast = [];
    for (let i = end; i >= end-30 ; i--)
    {
      const stat = data[i];
      last.push(stat);
    }

    end = end-30;
    for (let i = end-30; i >= end-30 ; i--)
    {
      const stat = data[i];
      beforeLast.push(stat);
    }


    let difference =  Utility.average(beforeLast)-Utility.average(last);

    return (difference*100)/Utility.average(last);
  }
}
