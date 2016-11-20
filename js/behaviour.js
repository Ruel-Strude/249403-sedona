(function() {
    var om_btn = document.getElementById('open-modal-btn');
    var modal = document.getElementById('modal');

    if (om_btn) {
        om_btn.addEventListener('click', function () {
            if (modal && modal.hasAttribute('hidden')) {
                modal.removeAttribute('hidden')
            } else if (modal && !modal.hasAttribute('hidden')) {
                modal.setAttribute('hidden', '');
            }
        });
    }
}());