$(() =>{
  $('input[name=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      amenityId.push("Checkbox is checked...")
    } else {
      console.log("Checkbox is not checked..")
    }
  });
})
