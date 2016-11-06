webpackJsonp([146,197],{909:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var d=o(1),a=(n(d),o(2));n(a);t.exports={content:["section",["p","Modal dialogs."],["h2","When To Use"],["p","When requiring users to interact with application, but without jumping to a new page to interrupt\nthe user's workflow, you can use ",["code","Modal"]," to create a new floating layer over the current page for user\ngetting feedback or information purposes.\nAdditionally, if you need show a simple confirmation dialog, you can use ",["code","ant.Modal.confirm()"],",\nand so on."]],meta:{type:"Views",category:"Components",title:"Modal",filename:"components/modal/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","visible"],["td","Determine whether a modal dialog is visible or not"],["td","Boolean"],["td","no"]],["tr",["td","confirmLoading"],["td","Determine whether to apply loading visual effect for OK button or not"],["td","Boolean"],["td","no"]],["tr",["td","title"],["td","The modal dialog's title"],["td","React.Element"],["td","no"]],["tr",["td","closable"],["td","Determine whether a close (x) button is visible on top right of the modal dialog or not"],["td","Boolean"],["td","true"]],["tr",["td","onOk"],["td","Specify a function that will be called when a user clicked OK button"],["td","function"],["td","no"]],["tr",["td","onCancel"],["td","Specify a function that will be called when a user clicked mask, close button on top right or cancel button"],["td","function(e)"],["td","no"]],["tr",["td","width"],["td","Width of a modal dialog"],["td","String or Number"],["td","520"]],["tr",["td","footer"],["td","Footer content"],["td","React.Element"],["td","OK and cancel button"]],["tr",["td","okText"],["td","Text of the OK button"],["td","String"],["td","OK"]],["tr",["td","cancelText"],["td","Text of the Cancel button"],["td","String"],["td","Cancel"]],["tr",["td","maskClosable"],["td","Determine whether to close the modal dialog when clicked mask of it."],["td","Boolean"],["td","true"]],["tr",["td","style"],["td","Style of floating layer, typically used at least for adjusting the position."],["td","Object"],["td","-"]],["tr",["td","wrapClassName"],["td","The class name of the container of the modal dialog"],["td","String"],["td","-"]]]],["h3","Modal.xxx()"],["p","There are five ways to display the information based on the content's nature:"],["ul",["li",["p",["code","Modal.info"]]],["li",["p",["code","Modal.success"]]],["li",["p",["code","Modal.error"]]],["li",["p",["code","Modal.warning"]]],["li",["p",["code","Modal.confirm"]]]],["p","The item listd above are all functions, expecting a settings object as parameter.\nThe properties of the object are follows:"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","title"],["td","Title"],["td","React.Element or String"],["td","no"]],["tr",["td","content"],["td","Content"],["td","React.Element or String"],["td","no"]],["tr",["td","onOk"],["td","Specify a function that will be called when a user clicked OK button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed"],["td","function"],["td","no"]],["tr",["td","onCancel"],["td","Specify a function that will be called when a user clicked Cancel button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed"],["td","function"],["td","no"]],["tr",["td","width"],["td","Width of dialog"],["td","String or Number"],["td","416"]],["tr",["td","iconType"],["td","Type of Icon component"],["td","String"],["td","question-circle"]],["tr",["td","okText"],["td","Text of OK button"],["td","String"],["td","OK"]],["tr",["td","cancelText"],["td","Text of cancel button"],["td","String"],["td","Cancel"]]]],["style","\n.code-box-demo .ant-btn {\n  margin-right: 8px;\n}\n"]]}}});