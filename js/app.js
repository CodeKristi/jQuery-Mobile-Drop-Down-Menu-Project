// Problem: Menu looks bad on small devices
//Solution: Hide text links and replace with better navigation

// CREATE A SELECT VAR AND APPEND
var $select = $("<select></select>");
$("#menu").append($select);

// CYCLE OVER ALL MENU LINKS
$("#menu").each(function(){
  var $anchor = $(this);
 
  // CREATE AN OPTION VAR
   var $option = $("<option></option>");
  
  // DEAL WITH SELECTED OPTIONS DEPENDING ON CURRENT PAGE
  if($anchor.parent().hasClass("selected")) {
  $option.prop("selected", true);
  }
  
  // OPTION'S VALUE IS THE href
  $option.val($anchor.attr("href"));
  
  // OPTION'S TEXT IS TEXT OF LINK
  $option.text($anchor.text());
  
  // APPEND OPTION TO SELECT VAR
  $select.append($option);
});
  
  
// CREATE BUTTON (change it to 'change listener')
//var $button = $("<button>Go</button>");
//$("#menu").append($button);

// BIND CHANGE LISTENER TO THE SELECT
//$button.click(function() {
$select.change(function() {

  // GO TO SELECT'S LOCATION
  window.location = $select.val();
});







