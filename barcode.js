function reset(){
  location.reload();
}
function makeCode(){
  $('#barcode1').barcode(inpCd.bar1.value,'code128');
  $('#barcode2').barcode(inpCd.bar2.value,'code128');
}