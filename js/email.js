$('#contact-form').submit((e) => {
  e.preventDefault();
        $.ajax({
            url: "https://formspree.io/diarra.t.oumar@gmail.com",
            method: "POST",
            data: $('#contact-form').serialize(),
            dataType: "json"
            });

        e.preventDefault();
        $('#contact-form')[0].reset();
        alert("Message sent");
});
