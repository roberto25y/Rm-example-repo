
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


function toggleDetails(detailId) {
    const details = document.getElementById(detailId);
    details.style.display = (details.style.display === "block") ? "none" : "block";
}
<script>
        document.getElementById('summaryButton').addEventListener('click', function() {
            const summary = document.getElementById('skillsSummary');
            summary.style.display = summary.style.display === 'none' ? 'block' : 'none';
        });
    </script>