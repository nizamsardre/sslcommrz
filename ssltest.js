
const got = require('got');
const fetch = require('node-fetch');
var FormData = require('form-data');
//module.exports.request =  async (method, url, urlParams, post_body) => {
 
  let post_body = {};
  post_body['store_id'] = 'abc5ee5f6e3c9c73';
  post_body['store_passwd'] = 'abc5ee5f6e3c9c73@ssl';
  post_body['total_amount'] = 100.26;
  post_body['currency'] = "BDT";
  post_body['tran_id'] = "12345";
  post_body['success_url'] = "your success url";
  post_body['fail_url'] = "your fail url";
  post_body['cancel_url'] = "your cancel url";
  post_body['emi_option'] = 0;
  post_body['cus_name'] = "test";
  post_body['cus_email'] = "test@test.com";
  post_body['cus_phone'] = "01700000000";
  post_body['cus_add1'] = "customer address";
  post_body['cus_city'] = "Dhaka";
  post_body['cus_country'] = "Bangladesh";
  post_body['shipping_method'] = "NO";
  post_body['multi_card_name'] = ""
  post_body['num_of_item'] = 1;
  post_body['product_name'] = "Test";
  post_body['product_category'] = "Test Category";
  post_body['product_profile'] = "general";

 
//fetch
let fdata = new FormData();
for(const a  in post_body) {
    fdata.append(a, post_body[a] ? post_body[a] : '');
}


  const urlParams = null;

  const url = 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php';

  async function start() {
    try{
        let params = {
          method: 'POST',
          form:  post_body ,
          responseType: 'json'
        };
       // params.searchParams = urlParams ? urlParams : undefined;
        params.form = post_body ? post_body : undefined;
        //const response = await got(url, params);

        //fetch
         fetch(url, {method: 'POST', body: fdata})
          .then(function(u){ 
              return u.json();
          })
          .then(function(j) { 
              console.log(1,j); 
          });
        
        //console.log(1,response.body);
      } catch(error){
        console.log(error) ;
    }
  }
  
  start();

