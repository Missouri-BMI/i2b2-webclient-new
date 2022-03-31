/**
 * @projectDescription	View controller for PM module's login form(s).
 * @inherits 	i2b2
 * @namespace	i2b2.PM
 * @author		Nick Benik, Griffin Weber MD PhD
 * @version 	1.3
 * ----------------------------------------------------------------------------------------
 * updated 9-15-08: RC4 launch [Nick Benik] 
 */
console.group('Load & Execute component file: cells > PM > view');
console.time('execute time');

var myDataTable = {};
var mySubDataTable = {};
var callerid = "";
var parentid = "";


i2b2.PM.ShowParameter = function(origin, index) {
    // TODO: Reimplement
    alert("REIMPLEMENT ME!");
};

i2b2.PM.ShowRole = function(index) {
    // TODO: Reimplement
    alert("REIMPLEMENT ME!");
};

i2b2.PM.setUserAccountInfo = function(elem){
    let userInfo = $("#userInfo");
    userInfo.find(".user").text(i2b2.PM.model.login_username);
    userInfo.find(".project").text(i2b2.PM.model.login_projectname);
};

// login screen
// ================================================================================================== //
i2b2.PM.removeLoginDialog = function() {
    // delete the modal login form's HTML/CSS
    try {$("#PM-login-modal").remove(); } catch(e) {}
    try {$("#PM-login-html-css").remove(); } catch(e) {}
};
// ================================================================================================== //
i2b2.PM.doLoginDialog = function() {
    // this displays the login dialogue box (auto generated popup)

    // shows the modal login form and its supporting CSS file
    $('<link>')
        .appendTo('head')
        .attr({
            id: 'PM-login-html-css',
            type: 'text/css',
            rel: 'stylesheet',
            href: this.cfg.baseDir+"/assets/login-html.css"
        });

    $("body").load(this.cfg.baseDir+"assets/login.html #PM-login-modal", null, (function(){
        // execute this after the external HTML/CSS load
        $('loginusr').focus();
        // load info from the i2b2.UI.cfg data that may exist
        var t = i2b2.UI.cfg.loginDefaultUsername;
        if (t !== undefined) { $("#PM-login-modal input[name='loginusr']").val(t); }
        var t = i2b2.UI.cfg.loginDefaultPassword;
        if (t !== undefined) { $("#PM-login-modal input[name='loginpass']").val(t); }
        // clear any domains
        $('#logindomain option').remove();
        // load the domains into dropdown
        $.each(i2b2.PM.model.Domains, function(i, domain){
            $('#logindomain').append($('<option>', {
                value: i,
                text: domain.name
            }));
        })
        // attach the onSubmitt handler
        $("#PM-login-modal form").submit(function(event) {
            event.preventDefault();
            i2b2.PM.doLogin();
        });
    }));
};


console.timeEnd('execute time');
console.groupEnd();