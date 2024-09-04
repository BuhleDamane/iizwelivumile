// JavaScript for Search Functionality
document.querySelector('.search-icon').addEventListener('click', function() {
    const searchForm = document.querySelector('.search-form');
    searchForm.style.display = searchForm.style.display === 'block' ? 'none' : 'block';
});
