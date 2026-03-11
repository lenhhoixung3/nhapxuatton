const API_URL="https://docs.google.com/spreadsheets/d/1-MSYrLwDPONENoRfm2gvXpv0M7NIlpm8IkdOZclBZPw/edit?gid=0#gid=0"

class InventoryApp {

constructor(){
this.scanner=null
this.products=[]
this.currentView='dashboard'
this.init()
}

async updateStock(barcode,change){

const url=
API_URL+
"?action=updateQuantity"+
"&barcode="+barcode+
"&change="+change

const res=await fetch(url)

const data=await res.json()

if(data.success){

alert("Stock updated: "+data.data.quantity)

}else{

alert("Error")

}

}
