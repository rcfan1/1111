

//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal= `{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 2E356D5F-7887-42D9-AE56-7DC20ACBA27D)","token":"5572805408a1467aaa04ac9038128616","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 2E356D5F-7887-42D9-AE56-7DC20ACBA27D)","traceid":"300000000000000000001612394173915000000000000","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}
{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 90B887BB-CF3C-4B24-A7B2-1F4A5DCB5084)","token":"d0e8cc6ca31f4617a041b7d7e197463c","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 90B887BB-CF3C-4B24-A7B2-1F4A5DCB5084)","traceid":"300000000000000000001612008931194000000000000","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}
{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 5531A4ED-B909-4426-96BE-BA06EFB4509A)","token":"02b57b57399c4353b9c1ea8bc5405d0c","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3, zh_CN, Apple, iPhone, 5531A4ED-B909-4426-96BE-BA06EFB4509A)","traceid":"3134852153483767808016123915572392bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8, ja-CN;q=0.7","Accept":"*/*"}`
let refreshtokenVal= `5069f51beac844cdad0385bd31ee086e
2cd3960ff16c44f6b0218827147bdf5e
ea394fae2add4c15b509176fbbdb45b7`


let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,  
  refreshtokenVal: refreshtokenVal,  
  
}

module.exports =  iboxpaycookie
  

