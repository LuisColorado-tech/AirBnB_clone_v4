$(() => {
  const amenitieIds = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      amenitieIds[($(this).attr('data-id'))] = $(this).attr('data-name');
      console.log('Checkbox is checked...');
    } else if (!$(this).prop('checked')) {
      delete amenitieIds[($(this).attr('data-id'))];
    }
    if (Object.keys(amenitieIds).length === 0) {
      $('div.amenities h4').html('');
    } else {
      $('div.amenities h4').text(Object.values(amenitieIds).join(', '));
    }
  });
});
$.get('http://192.168.10.14:5001/api/v1/status/', function (data) {
  if (data.status === 'OK') {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});
