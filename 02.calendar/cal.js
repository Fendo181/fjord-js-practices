#!/usr/bin/env node

import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const month = args["m"] ?? new Date().getMonth() + 1;
const year = args["y"] ?? new Date().getFullYear();

console.log(`      ${month}月 ${year}    `);
console.log("日 月 火 水 木 金 土");
// 指定した月の1日の曜日を取得
const firstDay = new Date(year, month - 1, 1);
const firstDayOfWeek = firstDay.getDay();
// 月末日を取得
const lastDate = new Date(year, month, 0);
const lastDay = lastDate.getDate();

// 最初に1日の曜日までスペースを追加
let day = 1;
let dayOfWeek = firstDayOfWeek;
let calendar = "";
for (let i = 0; i < firstDayOfWeek; i++) {
  calendar += "   ";
}
// 1日から月末日まで日付を追加
while (day <= lastDay) {
  calendar += day.toString().padStart(2, " ") + " ";
  day++;
  dayOfWeek++;
  // 土曜日まで表示したら改行
  if (dayOfWeek > 6) {
    calendar += "\n";
    dayOfWeek = 0;
  }
}
console.log(calendar);
