var currentdayel = document.getElementById("currentDay");
var today = moment();
console.log(today);
$("#currentDay").text(today.format("llll"));




var saveButton = $(".saveBtn")
saveButton.on("click", function (event) {
    event.preventDefault()
    localStorage.setItem("text", $(".text").val());

});

var save = localStorage.getItem("text");
$(".text").val(save)


var crthr= moment().format("HH")
var hour= parseInt($("#10clk").attr("data-time"))
if (crthr===hour) {
    $("#10clk").addClass("present")

}else if (crthr>hour){
    $("#10clk").addClass("past")


}else {
    $("#10clk").addClass("future")

}
if (crthr===hour) {
    $("#9clk").addClass("present")

}else if (crthr>hour){
    $("#9clk").addClass("past")


}else {
    $("#9clk").addClass("future")
}
if (crthr===hour) {
    $("#11clk").addClass("present")

}else if (crthr>hour){
    $("#11clk").addClass("past")


}else {
    $("#11clk").addClass("future")

}
if (crthr===hour) {
    $("#12clk").addClass("present")

}else if (crthr>hour){
    $("#12clk").addClass("past")


}else {
    $("#12clk").addClass("future")
}
if (crthr===hour) {
    $("#1clk").addClass("present")

}else if (crthr>hour){
    $("#1clk").addClass("past")


}else {
    $("#1clk").addClass("future")

}
if (crthr===hour) {
    $("#2clk").addClass("present")

}else if (crthr>hour){
    $("#2clk").addClass("past")


}else {
    $("#2clk").addClass("future")
}
if (crthr===hour) {
    $("#3clk").addClass("present")

}else if (crthr>hour){
    $("#3clk").addClass("past")


}else {
    $("#3clk").addClass("future")

}
if (crthr===hour) {
    $("#4clk").addClass("present")

}else if (crthr>hour){
    $("#4clk").addClass("past")


}else {
    $("#4clk").addClass("future")

}
if (crthr===hour) {
    $("#5clk").addClass("present")

}else if (crthr>hour){
    $("#5clk").addClass("past")


}else {
    $("#5clk").addClass("future")
}