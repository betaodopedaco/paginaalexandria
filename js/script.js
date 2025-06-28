document.addEventListener('DOMContentLoaded', () => {
    // Gallery item hover effect enhancement (already in your original code)
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // Filtering functionality for gallery items
    const categoryButtons = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from the currently active button
            document.querySelector('.category-btn.active').classList.remove('active');
            // Add 'active' class to the clicked button
            this.classList.add('active');
            
            const selectedCategory = this.textContent.toLowerCase(); // Get the category text

            galleryItems.forEach(item => {
                const itemCategories = item.dataset.category ? item.dataset.category.split(' ') : ['todos'];
                
                // Show all items if "Todos" is selected, otherwise filter
                if (selectedCategory === 'todos' || itemCategories.includes(selectedCategory)) {
                    item.style.display = 'block'; // Show the item
                } else {
                    item.style.display = 'none'; // Hide the item
                }
            });
        });
    });
});
