

//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal= `{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 15ACF7BE-FE84-4942-A264-38E37215AACB)","token":"74c2c64a804b4d75a4b03768ccdb70f0","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 15ACF7BE-FE84-4942-A264-38E37215AACB)","traceid":"3000000000000000000016124031946312bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}
{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 2E356D5F-7887-42D9-AE56-7DC20ACBA27D)","token":"5572805408a1467aaa04ac9038128616","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 2E356D5F-7887-42D9-AE56-7DC20ACBA27D)","traceid":"3134853883737767116816124032101162bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}
{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 5531A4ED-B909-4426-96BE-BA06EFB4509A)","token":"83f1e6eaad1646939535031f59e43280","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 5531A4ED-B909-4426-96BE-BA06EFB4509A)","traceid":"313485215348376780801612403708440a4b888dea4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}`
let refreshtokenVal= `5069f51beac844cdad0385bd31ee086e
2cd3960ff16c44f6b0218827147bdf5e
92d0adc4ef4b4e9493b32063f5a36af1`


let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,  
  refreshtokenVal: refreshtokenVal,  
  
}

module.exports =  iboxpaycookie
  

