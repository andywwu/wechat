	var doc = $(document);
	console.log(111);
	var modeName = '';
	var App = {
		init: function() {
			this.initStatus();
			this.render();
			this.bindEvent();		
		},
		initStatus: function() {
			var power = new JDUI.instance.SwitchCell({
		        title: '电源',
		        type: JDUI.type.SwitchCell.switch, //JD、jd标准样式、 Ali、阿里标准样式
		        value: '1', //和正常一样，开1，关0
		        hook: '.switch-cell',
		        map: {
		            on: '1',
		            off: '0'
		        },
		        onTapBefore: function() {
		            //console.log('before');
		        },
		        onTap: function(index) {
		            console.log('click ali', index);
		        },
		        onTapAfter: function() {
		            //console.log('after');
		        }
		    });
		    var gridItem = new JDUI.instance.GridItem({
		        title: "",
		        hook: ".grid-item-wrap",
		        gridNum: '3',
		        value: '0',
		        map: [{
		            icon: "&#xe603;",
		            text: "模式1",
		            value: "0"
		        }, {
		            icon: "&#xe603;",
		            text: "模式2",
		            value: "1"
		        }, {
		            icon: "&#xe603;",
		            text: "模式3",
		            value: "2"
		        }, {
		            icon: "&#xe603;",
		            text: "模式4",
		            value: "3"
		        }, {
		            icon: "&#xe603;",
		            text: "模式5",
		            value: "4"
		        }, {
		            icon: "&#xe603;",
		            text: "模式6",
		            value: "5"
		        }],

		        beforeTap: function() {
		            console.log("before");
		        },
		        onTap: function(item, index, content) {
		            console.log('下发的值: ' + index);
		        },
		        afterTap: function() {
		            console.log("after");

		        }
		    });
		    var stitem = new JDUI.instance.ListItem({
		        title: "",
		        hook: ".list-item-settime",
		        map: [{
		            icon: "",
		            title: "定时",
		            subTitle: '',
		            rightTitle: ""
		        }],
		        beforeTap: function() {

		        },
		        onTap: function(item, context) {
		            console.log(item, context);
		            window.location.href = "settime/index.html";
		        },
		        afterTap: function() {

		        }
		    });
			JDUI.style.themeColor = '#6bc800';
			$('.grid-item').append('<span class="edit-name" onClick="editName(this)"><i class="iconfont">&#xe604;</i></span>');
		},
		render: function() {
			// App.editNameStatus();
			// confirm1.openConfirm();
		},
		bindEvent: function() {

		},
		editNameStatus: function(bg) {
			window.confirm1 = new JDUI.instance.Toast({
			    hook: '.confirm-twobtn-wrap',
			    type: 'two',
			    teplMap: {
			        title: '修改名称',
			        content: '<p>可修改自定义名称</p><input type="text" class="inp" id="update_name" />'
			    },
			    letBtnFn: function(e) {
			    	modeName = $('#update_name').val();
			    	console.log(modeName);
			    	$(bg).prev().html(modeName);
			        confirm1.closeConfirm();
			    },
			    rightBtnFn: function(e) {
			        confirm1.closeConfirm();
			    }
			});
		},
	};
	App.init();
	function editName(bg) {
		App.editNameStatus(bg);
		confirm1.openConfirm();
	}