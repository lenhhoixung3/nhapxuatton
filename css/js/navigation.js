function showPage(page){

// ẩn tất cả
document.getElementById("dashboardPage").style.display="none"
document.getElementById("inventoryPage").style.display="none"
document.getElementById("scannerPage").style.display="none"

// hiện trang cần
document.getElementById(page+"Page").style.display="block"

}
