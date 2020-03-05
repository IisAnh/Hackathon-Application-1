var buildcartcontent;
var buildsearchcontent;
var buildpresearchcontent;

function buildcartpage() {
    $( "#cartpage" ).addClass("active");
    $( "#analysispage" ).removeClass("active");
    $( "#main-body" ).empty();
    $("#main-body").append(buildpresearchcontent);
    $("#main-body").append("<div id=\"content\"></div>");
    $("#main-body").append("<div id=\"employee_table\"></div>");
}

function analysis() {
    $( "#main-body" ).empty();
    $( "#cartpage" ).removeClass("active");
    $( "#analysispage" ).addClass("active");
}

function buildcartsearch() {
    $("#content").empty();
    $("#content").append(buildsearchcontent);
}

function savebody() {
    buildpresearchcontent = $("#presearch").html();
    buildcartcontent = $("#main-body").html();
    buildsearchcontent = $("#content").html();
    $("#content").empty();
}

function search() {
    var tempselectprovince = $( "#inputGroupSelect01" ).val();
    var tempselectcity = $( "#inputGroupSelect02" ).val();
    var tempselectfood = $( "#inputGroupSelect03" ).val();
    var tempinput = $( "#inputGroupSelect04input" ).val();
    $( "#employee_table" ).empty();
    $( "#employee_table" ).append("<i class=\"fas fa-arrow-circle-right\"></i>&nbsp;Results");
    $( "#employee_table" ).append("<p>" + tempselectprovince + " " +  tempselectcity + " " + tempselectfood + " " + tempinput + "</p>");
}