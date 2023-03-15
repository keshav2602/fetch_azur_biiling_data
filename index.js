import fetch from "node-fetch"
import request from "request";

// const billingAccountName = "7d603717-49f5-46fd-af1f-c65aebae6ed0";
// // const url = `https://management.azure.com/subscriptions/${subscriptionID}/providers/Microsoft.Billing/billingPeriods/${billingPeriod}/providers/Microsoft.Consumption/usageDetails?$filter=properties/usageEnd ge '${startDate}' AND properties/usageEnd le '${endDate}'`;
// const url = `https://management.azure.com/providers/Microsoft.Billing/billingAccounts/${billingAccountName}?api-version=2019-10-01-preview`;

// fetch(url, {
  
//   method: "GET",
//   headers: {
    
// }
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data,"this is data")
//   // handle the response data here
// })
// .catch(error => {
//     console.log(error,"err")
// });
const billingAccountName = "7d603717-49f5-46fd-af1f-c65aebae6ed0";

var options = {
  'method': 'GET',
  'url': `https://management.azure.com/providers/Microsoft.Billing/billingAccounts/${billingAccountName}?api-version=2019-10-01-preview`,
//   'url': `https://management.azure.com/providers/Microsoft.Billing/billingAccounts/${billingAccountName}/invoices/${invoiceName}?api-version=2019-10-01-preview`,
  'headers': {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82MGQ4ZWU3My0xNzMxLTRhNmEtYjM2NS00YjUzOWIyOWE5N2YvIiwiaWF0IjoxNjc4ODg1NDY1LCJuYmYiOjE2Nzg4ODU0NjUsImV4cCI6MTY3ODg5MDY3NywiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQWNKaVJTV2RQRktQY3FPcDFrcGlrQUlQYmFOVk05WTgvcXdodVhxQ2VmV0VENjA3VE50MUFGSE9sNjdrdTdQYVB1NEt2TWVLOURqVW50bkZsRHdqRTdFbHVHY2VmZmJaOGFQL3RGWXpYd3RrPSIsImFsdHNlY2lkIjoiMTpsaXZlLmNvbTowMDAzN0ZGRTYyNjAzMjMyIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6ImM0NGI0MDgzLTNiYjAtNDljMS1iNDdkLTk3NGU1M2NiZGYzYyIsImFwcGlkYWNyIjoiMiIsImVtYWlsIjoia2VzaGF2czYzN0BvdXRsb29rLmNvbSIsImZhbWlseV9uYW1lIjoic2hhcm1hIiwiZ2l2ZW5fbmFtZSI6Imtlc2hhdiIsImdyb3VwcyI6WyI4MDQxYTA0Yy00NjM1LTRiZjAtYWEzYi01OWVhYWY5NjI5YmMiXSwiaWRwIjoibGl2ZS5jb20iLCJpcGFkZHIiOiIxMDMuMTg0Ljc0LjIyOSIsIm5hbWUiOiJrZXNoYXYgc2hhcm1hIiwib2lkIjoiZGFjMzI2ZWUtNjJhZS00NmMyLWFiZDktMzI5MDlkNzNiYWVlIiwicHVpZCI6IjEwMDMyMDAyODU2MkQ1ODgiLCJyaCI6IjAuQVVvQWMtN1lZREVYYWtxelpVdFRteW1wZjBaSWYza0F1dGRQdWtQYXdmajJNQk9KQUJFLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkhGclNnd0NoYkplV0Fzd3d3RFk4TXctYkJIamIwSzB6SlFtNnc0a1RwckEiLCJ0aWQiOiI2MGQ4ZWU3My0xNzMxLTRhNmEtYjM2NS00YjUzOWIyOWE5N2YiLCJ1bmlxdWVfbmFtZSI6ImxpdmUuY29tI2tlc2hhdnM2MzdAb3V0bG9vay5jb20iLCJ1dGkiOiJLOHhnS2VHcWlFV0FOSzR5NDlrOEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiXSwieG1zX3RjZHQiOjE2Nzg4NTY1MTl9.VXcagsq_NmAxQCP4eBIXrnPvmYNE-tuPXN4KdXC8EBgnQCNpBkwvyn3m8XYdqQpiIlnJ03B12c95Ckf_RONcbdt7YF01iVxb7jAWwdx7nxzi01LzOc6zqGqSNs8TAUbXYYs6GGxBF7hraDGzjgS9b0wp4HlWz7rnE0lEG7kmKntjX1zvM5HUtg6_Xq4GBttcjVjbAXxfBfVnrmRUx8ybB9oAwugxi0elESvFtWYY4Q07XtaBaC_BaGedTio1gC_XE7BWZUqpaHnBg6VR5888j0S6MOg_Zjr6vkHijFZccsVzO5ZVHMPFJYq3L97dTBDbIML005jJI8w5u32NeqLYUw'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
