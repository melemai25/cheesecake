//Alexander Melemai
$(document).ready(function () {

			//dropdown
			var dpDn = $('.dropdown'),
				button1 = dpDn.find($('.dropbtn')),
				list = dpDn.find($('.dropdown-content').children());

			//on click sets text of dropdown's button to value of button selected in dropdown (if that makes sense)
			$(list).on('click', function (e) {
				var btn = e.target;
				button1.text(btn.text).val(btn.text);

			});

		});

