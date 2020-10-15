let money = 10;
let cokes = 0;
let chips = 0;

$('.add_1_dollar').click(function() {
    money += 1;
    $('.money').text(`I have $${money}`);
});

$('.subtract_1_dollar').click(function() {
    money -= 1;
    $('.money').text(`I have $${money}`);
});

$('.add_25_cents').click(function() {
    money += 0.25;
    $('.money').text(`I have $${money}`);
});

$('.subtract_25_cents').click(function() {
    money -= 0.25;
    $('.money').text(`I have $${money}`);
});

$('.set_money').click(function() {
    money = $('.new_money').val();
    money = parseInt(money);
    $('.money').text(`I have $${money}`);
});

$('.refund').click(function() {
    let refundCoke = parseInt(cokes) * 1.5;
    cokes = 0;
    money += refundCoke;
    
    let refundChips = parseInt(chips) * 1.25;
    console.log(refundChips);
    chips = 0;
    money += refundChips;
    
    $('.receipt').text('');
    
    $('.money').text(`I have $${money}`);
});

$('.buy').click(function() {
    let buy = $('.vending_machine').val().toLowerCase();
    if (money > 1.5 && buy === 'coke') {
            money -= 1.5;
            cokes += 1;
            $('.money').text(`I have $${money}`);
            $('.receipt').append(`<p>I have bought a coke for $1.5</p>`);
            $('.purchases').text(`I bought ${cokes} cokes and ${chips} chips`);
    } else if(money > 1.25 && buy === 'chips') {
        money -= 1.25;
        chips += 1;
        $('.money').text(`I have $${money}`);
        $('.receipt').append(`<p>I have bought chips for $1.25</p>`);
        $('.purchases').text(`I bought ${cokes} cokes and ${chips} chips`);
    }
});