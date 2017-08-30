define(function(){
	var doc = $(document);
	console.log(111);
	var App = {
		init: function() {
			this.initStatus();
			this.render();
			this.bindEvent();		
		},
		initStatus: function() {
			$('.grid-item').append('<span class="edit-name" onClick="editName(this)"><i class="iconfont">&#xe604;</i></span>');
			var confirm1 = new JDUI.instance.Toast({
			    hook: '.confirm-twobtn-wrap',
			    type: 'two',
			    teplMap: {
			        title: '修改名称',
			        content: '<p>可修改自定义名称</p>'
			    },
			    letBtnFn: function(e) {
			        confirm1.closeConfirm();
			    },
			    rightBtnFn: function(e) {
			        confirm1.closeConfirm();
			    }
			});
		},
		render: function() {

		},
		bindEvent: function() {

		},
	};
	function editName(bg) {

	}
	return App;
});
