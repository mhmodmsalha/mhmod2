
let greating = "صباح الخير";
document.getElementById('greating').innerHTML = greating;


async function deleteCategory(id) {
    
    if (confirm("Are you sure you want to delete this category and all its tasks?")) {
        try {
            const res = await fetch(`/categories/delete/${id}`, {
                method: 'DELETE'
            });

            if (res.ok) {
                alert("Deleted successfully!");
                location.reload(); 
            } else {
                alert("Error deleting category");
            }
        } catch (err) {
            console.error("Failed to delete:", err);
        }
    }
}