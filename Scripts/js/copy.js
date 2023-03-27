// For all copy buttons
$('.copyBtn').each(function () {
    let $this = $(this),
        $card = $this.parent().prev('.card'),
        $text = $card.find('.response-text');
    $this.click(function () {
        navigator.clipboard.writeText($text.text());
        $text.addClass('selected');
        $this.text('Copied!');
        setTimeout(function () {
            $text.removeClass('selected');
            $this.text('Copy');
        }, 3000);
    });
    $card.click(function () {
        navigator.clipboard.writeText($text.text());
        $text.addClass('selected');
        $this.text('Copied!');
        setTimeout(function () {
            $text.removeClass('selected');
            $this.text('Copy');
        }, 3000);
    });
});