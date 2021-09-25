$(() =>{
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      console.log("Checkbox is checked...")
    } else {
      console.log("Checkbox is not checked..")
    }
  });
})
