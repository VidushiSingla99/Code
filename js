<!DOCTYPE html>
<html>
<body>
<input type='text' id='input' />
Some text related to logo ka data 
rows 
columns
etc
etc

<div style="display: none" id="456">
     <button type="submit" onclick= "submit()">put value here</button>
</div>

<script>

Submit() { 
Input. Value = " " // empty input value
gText() ;  // call 
}

var t = '';
function gText(e) {
    t = (document.all) ? document.selection.createRange().text : document.getSelection();
    if(t){
        // Selecting the input element and get its value 
        var i = document.createElement("input"); //input element, text
        alert(i);
        });
}
document.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);

</script>

</body>
</html>
