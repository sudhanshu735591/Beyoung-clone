const OrderHistoryApi = async (props)=>{
    
    const {productID,quantity,street,city,state,zipCode} = props;

    let data = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order",{
        method:"POST",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("Token")}`,
            'projectID': 'zx5u429ht9oj',
            "Content-Type": "application/json",
        },
        body:{
            "productId" : `{${productID}}`,
            "quantity" : {quantity},
            "addressType": "HOME",
            "address": {
              "street": {street},
              "city": {city},
              "state": {state},
              "country": "",
              "zipCode": {zipCode}
            }
        }
    })

    const res = await data.json();
    console.log("orderhistory",res);
}


export default OrderHistoryApi;