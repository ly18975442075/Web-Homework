$(document).ready(function(){
	$(".weixin").click(function(){
		window.open("https://open.weixin.qq.com/connect/qrconnect?appid=wxafc256bf83583323&redirect_uri=https%3A%2F%2Fpassport.bilibili.com%2Flogin%2Fsnsback%3Fsns%3Dwechat%26state%3D11513c40dcc411eca35f16e54851a03d%26source%3Dmain_web&response_type=code&scope=snsapi_login&state=authorize#wechat_redirect","_self")
	})
	$(".qq").click(function(){
		window.open("https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&state=authorize&client_id=101135748&redirect_uri=https%3A%2F%2Fpassport.bilibili.com%2Flogin%2Fsnsback%3Fsns%3Dqq%26state%3D11513c40dcc411eca35f16e54851a03d%26source%3Dmain_web&scope=do_like,get_user_info,get_simple_userinfo,get_vip_info,get_vip_rich_info,add_one_blog,list_album,upload_pic,add_album,list_photo,get_info,add_t,del_t,add_pic_t,get_repost_list,get_other_info,get_fanslist,get_idollist,add_idol,del_idol,get_tenpay_addr","_self")
	})
	$(".weibo").click(function(){
		window.open("https://api.weibo.com/oauth2/authorize?client_id=2841902482&redirect_uri=https%3A%2F%2Fpassport.bilibili.com%2Flogin%2Fsnsback%3Fsns%3Dweibo%26state%3D11513c40dcc411eca35f16e54851a03d%26source%3Dmain_web&scope=email###","_self")
	})
});