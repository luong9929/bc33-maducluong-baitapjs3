// tính lương nhân viên
var btntinhluong = document.getElementById('btntinhluong').onclick = function () {
    var luong1ngay = document.getElementById('luong1ngay').value;
    var songaylam  = document.getElementById('songaylam').value;

    var tongluong = 0 ;
    tongluong = luong1ngay * songaylam ;

    document.getElementById('tongluong').innerHTML = ('TỔNG TIỀN LƯƠNG : ') + tongluong.toLocaleString() ;
}

// <!-- TÍNH GIÁ TRỊ TRUNG BÌNH -->
var  btntinhtrungbinh = document.getElementById('btntinhtrungbinh').onclick = function () {
    
    var sothunhat = parseInt  (document.getElementById("sothunhat").value);
    var sothuhai = parseInt (document.getElementById("sothuhai").value);
    var sothuba =  parseInt   (  document.getElementById("sothuba").value);
    var sothutu =  parseInt   (document.getElementById("sothutu").value);
    var sothunam = parseInt (document.getElementById('sothunam').value);

    var tongtrungbinh = (sothunhat  + sothuhai+ sothuba +  sothutu + sothunam) / 5 ;

   

    document.getElementById('hienthiketqua').innerHTML = tongtrungbinh ;



}
// đổi tiền
var btndoitien = document.getElementById('btndoitien').onclick = function () {

    var sotienusd = document.getElementById('tienusd').value;
    var usdmacdinh1usd = 23500 ;

    var tienquydoi = sotienusd * usdmacdinh1usd ;

    document.getElementById('tongtienquydoi').innerHTML = tienquydoi.toLocaleString() + (' VND') ;
  
}

// TÍNH CHU VI DIỆN TÍCH
var btntinh = document.getElementById('btntinh').onclick = function (){

    var chieudai =  parseInt (document.getElementById('chieudai').value);
    var chieurong = parseInt (document.getElementById('chieurong').value);

    var chuvi =  (chieudai + chieurong ) * 2 ;
    var dientich = chieudai * chieurong ;

    document.getElementById('tongchuvi').innerHTML =   ('Chu Vi = ')    +    chuvi ; 
    document.getElementById('tongdientich').innerHTML =  ('Diện Tích = ') +  dientich ;
}
//Tính tổng 2 ký số
document.getElementById('btntinhtong').onclick = function (){
    var num = +document.getElementById('iso').value;
    var dozens = Math.floor(num %10)
    var units  = Math.floor (num / 10)
    var total = dozens + units

    document.getElementById('tonghaikyso').innerHTML = ('Tổng hai ký số : ') +  total
}
