

//独立COOKIE文件     ck在``里面填写，多账号换行
let flwurlVal= ``
let flwheaderVal= ``
let flwspbodyVal= ``
let flwqwbodyVal= ``
let flwydbodyVal= ``

flwurlVal = process.env.FL_flwURL;
flwheaderVal = process.env.FL_flwHEADER;
flwspbodyVal = process.env.FL_flwspBODY;
flwqwbodyVal = process.env.FL_flwqwBODY;
flwydbodyVal = process.env.FL_flwydBODY;
/*
if (
  process.env.FL_flwURL &&
  process.env.FL_flwURL.indexOf('\n') > -1
) {
  flwurlVal = process.env.FL_flwURL.split('\n');
} else {
  flwurlVal = process.env.FL_flwURL.split();
}
if (
  process.env.FL_flwHEADER &&
  process.env.FL_flwHEADER.indexOf('\n') > -1
) {
  flwheaderVal = process.env.FL_flwHEADER.split('\n');
} else {
  flwheaderVal = process.env.FL_flwHEADER.split();
}
if (
  process.env.FL_flwspBODY &&
  process.env.FL_flwspBODY.indexOf('\n') > -1
) {
  flwspbodyVal = process.env.FL_flwspBODY.split('\n');
} else {
  flwspbodyVal = process.env.FL_flwspBODY.split();
}
if (
  process.env.FL_flwqwBODY &&
  process.env.FL_flwqwBODY.indexOf('\n') > -1
) {
  flwqwbodyVal = process.env.FL_flwqwBODY.split('\n');
} else {
  flwqwbodyVal = process.env.FL_flwqwBODY.split();
}
if (
  process.env.FL_flwydBODY &&
  process.env.FL_flwydBODY.indexOf('\n') > -1
) {
  flwydbodyVal = process.env.FL_flwydBODY.split('\n');
}
*/

let flwcookie = {
  flwurlVal: flwurlVal,
  flwheaderVal: flwheaderVal,
  flwspbodyVal: flwspbodyVal,
  flwqwbodyVal: flwqwbodyVal,
  flwydbodyVal: flwydbodyVal,

}

module.exports =  flwcookie
