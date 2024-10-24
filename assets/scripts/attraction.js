const items = Array.from(document.querySelectorAll('.item'));
let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;
const itemsPerPage = 6;
let filteredItems = [...items];
const savedSearchInput = localStorage.getItem('searchInput') || '';
const savedCategory = localStorage.getItem('category') || 'all';
document.getElementById('searchInput').value = savedSearchInput;
function applyFilters() {
    const searchInput = localStorage.getItem('searchInput').toLowerCase();
    const category = localStorage.getItem('category');
    filteredItems = items.filter(item =>
        (category === 'all' || item.getAttribute('data-category') === category) &&
        item.textContent.toLowerCase().includes(searchInput)
    );
    currentPage = 1;
    localStorage.setItem('currentPage', currentPage);
    renderItems();
}
function renderItems() {
    const itemContainer = document.getElementById('itemContainer');
    itemContainer.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);
    paginatedItems.forEach(item => {
        itemContainer.appendChild(item);
    });
    renderPagination();
}
function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => {
            currentPage = i;
            localStorage.setItem('currentPage', currentPage);
            renderItems();
        };
        pagination.appendChild(button);
    }
}
function filterItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    localStorage.setItem('searchInput', searchInput);
    applyFilters();
}
function filterByCategory(category) {
    localStorage.setItem('category', category);
    applyFilters();
}
applyFilters();