

//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal= `{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, D567D71B-FCDF-482C-AE94-A1C78DD92A54)","token":"53662d869b144ce486a2ea13f63d9569","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, D567D71B-FCDF-482C-AE94-A1C78DD92A54)","traceid":"3134852153483767808016117166257522bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}
{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 90B887BB-CF3C-4B24-A7B2-1F4A5DCB5084)","token":"eab4076b0bb94274954a2b1ee3647f72","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 90B887BB-CF3C-4B24-A7B2-1F4A5DCB5084)","traceid":"313485388373776711681611716646039a4b888dea4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}
{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 8D2A9063-7DE0-4856-82E6-8DD7AA84260D)","token":"abf885efc3824bf0a4deec5776b9cf46","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 8D2A9063-7DE0-4856-82E6-8DD7AA84260D)","traceid":"3134853050107683635216117166590162bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}`



let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,  
  
}

module.exports =  iboxpaycookie
  


