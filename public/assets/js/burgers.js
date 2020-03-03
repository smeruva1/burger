//what ever goes in script tag in html file goes here, onclick events..etc

//Creating a burger
// listen for form submission

$('#burger-form').on('submit', function(event) {
    event.preventDefault();
  
    // collect burger data as an object
    const burgerData = {
      burger_name: $('[name=burger-name]')
        .val()
        .trim()
    };
  
    $.ajax({
      url: '/api/burgers',
      method: 'POST',
      data: burgerData
    }).then(response => {
      console.log(response);
      location.reload();
    });
  });
  
  //Updating a burger

  $('.devourBurger').on('click', function() {
    // get id of burger we are devouring
    const burgerId = $(this).attr('data-burgerid');
  
    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: 'PUT',
      data: {
        adopted: 1
      }
    }).then(response => {
      console.log(response);
      location.reload();
    });
  });
  
  //Deleting a burger

  $('.deleteBurger').on('click', function() {
    // get burger id
    const burgerId = $(this).attr('data-burgerid');
  
    console.log("inside delete burger onclick event " + burgerId);

    // delete burger
    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: 'DELETE'
    }).then(response => {
        console.log("Successful delete response here...");
        console.log(response);
      location.reload();
    });
  });
  