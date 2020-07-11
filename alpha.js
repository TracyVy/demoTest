// // Alpha Vantage - API
// $(document).ready(function () {

//     console.log("Hello");
//     const divTest = $("#test");
//     secondAPICall().then(res => console.log(res));
//     firstAPICall().then(res => console.log(res));

// });
// const api_key = "FQJSY871UTA3P2BK";
// const firstAPICall = () => {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             type: "GET",
//             url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=${api_key}`,
//             dataType: "json"
//         }).then((res) => {

//             resolve(res);
//         }).catch(err => reject(err));
//     });
// }

// const secondAPICall = () => {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             type: "GET",
//             url: `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=microsoft&apikey&apikey=${api_key}`,
//             dataType: "json"
//         }).then((res) => {

//             resolve(res);
//         }).catch(err => reject(err));
//     });
// }

// // name symbol price Evolution on day

// // https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo

// Scroll Shadow
