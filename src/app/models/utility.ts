export class Utility
{
  static getTotalOfKey(stats,keyName):number
  {
    let total=0;
    for (const stat of stats) {
      total += Number(stat.statistics[0][keyName])
    }
    return total;
  }
  static getAllOfKey(stats,keyName):Array<any>
  {
    let arr=[];
    for (const stat of stats) {
      arr.push( Number(stat.statistics[0][keyName]));
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
    let avg = Utility.average(data);
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
}
