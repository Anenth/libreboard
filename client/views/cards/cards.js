Template.addCardForm.helpers({});
Template.addCardForm.events({
    'click .js-cancel': function(event, t) {
        var composer = t.$('.card-composer');

        // add composer hide class
        composer.addClass('hide');
        composer.find('.js-card-title').val('');

        // remove hide open link class
        $('.js-open-card-composer').removeClass('hide');
    },
    'keypress .js-card-title': function(event, t) {
        if (event.charCode == 13) { 
            t.$('#AddCardForm').submit();
            event.preventDefault();
        }
    },
    'submit #AddCardForm': function(event, t) {
        var title = t.$('.js-card-title');
            
        // title trim if not empty then
        if ($.trim(title.val())) {
            Cards.insert({ 
                title: title.val(),
                listId: this.listId,
                boardId: this.board._id
            });

            // empty and focus.
            title.val('').focus();
        }
        event.preventDefault();
    }
});
