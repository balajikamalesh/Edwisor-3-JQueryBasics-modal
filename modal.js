		$(function(){

			$("#btnClick").click(function(){
				$("#modal").dialog({
					title: "Modal Title",
					hide: 'fold',
        			show: 'blind',
					width: 400,
					height: 300,
					resizable: true,
					modal: true,
					buttons: {
						Close: 
							function(){
								$(this).dialog('close')
							},
						SaveChanges:
							function(){
								$(this).dialog('close')
							}

					}
				})
			})

		})