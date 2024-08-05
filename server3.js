var url=require('url');
var adr='http://www.youtube.com?year=2022&month=auguest';
var q=url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdate=q.query;
console.log(qdate.month);