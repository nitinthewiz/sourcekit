dojo.provide("dijit.base.FormElement");

dojo.require("dojo.html.style");

dojo.require("dijit.base.Widget");

dojo.declare("dijit.base.FormElement", dijit.base.Widget,
{
	/*
	Summary:
		FormElement widgets correspond to native HTML elements such as <input> or <button> or <select>.
		Each FormElement represents a single input value, and has a (possibly hidden) <input> element,
		to which it serializes its input value, so that form submission (either normal submission or via FormBind?)
		works as expected.
		
		All these widgets should have these attributes just like native HTML input elements.
		You can set them during widget construction, but after that they are read only.
		
		They also share some common methods.
		
	TODO:
		should this be a mixin or a base class?
		automatically add CSS tags for hover and focus like *class*Hover and *class*Focus (or maybe in FormElement)
	*/

	// value: String
	//		Corresponds to the native HTML <input> element's attribute.
	value: "", 

	// name: String
	//		Corresponds to the native HTML <input> element's attribute.
	name: "",

	// id: String
	//		Corresponds to the native HTML <input> element's attribute.
	//		Also becomes the id for the widget.
	id: "",

	// alt: String
	//		Corresponds to the native HTML <input> element's attribute.
	alt: "",

	// type: String
	//		Corresponds to the native HTML <input> element's attribute.
	type: "input",

	// tabIndex: Integer
	//		Corresponds to the native HTML <input> element's attribute.
	tabIndex: -1,

	// disabled: Boolean
	//		Should this widget respond to user input?
	//		In markup, this is specified as "disabled='disabled'", or just "disabled".
	disabled: false,

	enable: function(){
		// summary:
		//		enables the widget, usually involving unmasking inputs and
		//		turning on event handlers. Not implemented here.
		this._setDisabled(false);
	},

	disable: function(){
		// summary:
		//		disables the widget, usually involves masking inputs and
		//		unsetting event handlers. Not implemented here.
		this._setDisabled(true);
	},
	
	_setDisabled: function(/*Boolean*/ disabled){
		// summary:
		//		Set disabled state of widget.
		// TODO:
		//		not sure which parts of disabling a widget should be here;
		//		not sure which code is common to many widgets and which is specific to a particular widget.
		if (disabled){
			if (!dojo.html.hasClass(this.domNode, this["class"]+"Disabled"){
				dojo.html.prependClass(this.domNode, this["class"]+"Disabled");
			}
			// TODO: if the widget is disabled do we need to do this?
			this.containerNode.removeAttribute("tabIndex");
		}else{
			dojo.html.removeClass(this.domNode, this["class"]+"Disabled");
			this.containerNode.setAttribute("tabIndex", this.tabIndex);
		}
		this.domNode.disabled = this.disabled = disabled;
		dojo.widget.wai.setAttr(this.domNode, "waiState", "disabled", disabled);
	},

	onValueChanged: function(newValue){
		// summary: callback when value is changed
	},
	
	setValue: function(newValue){
		// summary: set the value of the widget.
	}
});
