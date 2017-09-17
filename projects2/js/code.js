$(function(){
	var url = 'http://www.bbmar.com/'
    $('.qr_code').qrcode({
        text: url,
        height: 190,
        width: 190
    })
})