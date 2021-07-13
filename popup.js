// 新标签打开网页
$('#open_tmall_new_tab').click(() => {
	chrome.tabs.create({url: 'https://cart.tmall.com/cart.htm'});
});
