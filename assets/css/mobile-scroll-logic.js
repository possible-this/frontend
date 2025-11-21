<script>
document.addEventListener('DOMContentLoaded', function() {
    // 1. Find the button
    const fab = document.querySelector('.floating-btn');
    let lastScrollTop = 0;

    // If the button exists on this page...
    if (fab) {
        window.addEventListener('scroll', function() {
            // 2. Check where we are on the page
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            // 3. THE LOGIC
            if (currentScroll > lastScrollTop && currentScroll > 100) {
                // SCROLLING DOWN (and past the top 100px):
                // Add the class that triggers the CSS hide animation
                fab.classList.add('scroll-hide');
            } else {
                // SCROLLING UP:
                // Remove the class so the CSS brings it back
                fab.classList.remove('scroll-hide');
            }

            // Reset the tracker for the next movement
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }, { passive: true });
    }
});
</script>
