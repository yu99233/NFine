﻿/*
Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("textarea",
function (b) {
    return {
        title: b.lang.forms.textarea.title,
        minWidth: 350,
        minHeight: 220,
        onShow: function () {
            delete this.textarea;
            var a = this.getParentEditor().getSelection().getSelectedElement();
            a && "textarea" == a.getName() && (this.textarea = a, this.setupContent(a))
        },
        onOk: function () {
            var a, b = this.textarea,
            c = !b;
            c && (a = this.getParentEditor(), b = a.document.createElement("textarea"));
            this.commitContent(b);
            c && a.insertElement(b)
        },
        contents: [{
            id: "info",
            label: b.lang.forms.textarea.title,
            title: b.lang.forms.textarea.title,
            elements: [{
                id: "_cke_saved_name",
                type: "text",
                label: b.lang.common.name,
                "default": "",
                accessKey: "N",
                setup: function (a) {
                    this.setValue(a.data("cke-saved-name") || a.getAttribute("name") || "")
                },
                commit: function (a) {
                    this.getValue() ? a.data("cke-saved-name", this.getValue()) : (a.data("cke-saved-name", !1), a.removeAttribute("name"))
                }
            },
            {
                type: "hbox",
                widths: ["50%", "50%"],
                children: [{
                    id: "cols",
                    type: "text",
                    label: b.lang.forms.textarea.cols,
                    "default": "",
                    accessKey: "C",
                    style: "width:50px",
                    validate: CKEDITOR.dialog.validate.integer(b.lang.common.validateNumberFailed),
                    setup: function (a) {
                        a = a.hasAttribute("cols") && a.getAttribute("cols");
                        this.setValue(a || "")
                    },
                    commit: function (a) {
                        this.getValue() ? a.setAttribute("cols", this.getValue()) : a.removeAttribute("cols")
                    }
                },
                {
                    id: "rows",
                    type: "text",
                    label: b.lang.forms.textarea.rows,
                    "default": "",
                    accessKey: "R",
                    style: "width:50px",
                    validate: CKEDITOR.dialog.validate.integer(b.lang.common.validateNumberFailed),
                    setup: function (a) {
                        a = a.hasAttribute("rows") && a.getAttribute("rows");
                        this.setValue(a || "")
                    },
                    commit: function (a) {
                        this.getValue() ? a.setAttribute("rows", this.getValue()) : a.removeAttribute("rows")
                    }
                }]
            },
            {
                id: "value",
                type: "textarea",
                label: b.lang.forms.textfield.value,
                "default": "",
                setup: function (a) {
                    this.setValue(a.$.defaultValue)
                },
                commit: function (a) {
                    a.$.value = a.$.defaultValue = this.getValue()
                    this.getValue() ? a.setAttribute("value", this.getValue()) : a.removeAttribute("value")
                }
            },
            {
                id: "required",
                type: "checkbox",
                label: b.lang.forms.textfield.required,
                "default": "",
                accessKey: "Q",
                value: "required",
                setup: function (a) {
                    this.setValue(a.getAttribute("required"))
                },
                commit: function (a) {
                    this.getValue() ? a.setAttribute("required", "required") : a.removeAttribute("required")
                }
            }]
        }]
    }
});