
<!DOCTYPE html>
<html>
<body>
<input type='text' id='input' />
Some text related to logo ka data 
rows 
columns
etc
etc

<script>
var t = '';
function gText(e) {
    t = (document.all) ? document.selection.createRange().text : document.getSelection();
    if(document.getSelection()){
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
