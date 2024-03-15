using _00012928.Models;

namespace _00012928.Repositories
{
    public interface ICategoriesRepository
    {
        Task<IEnumerable<Category>> GetAllCategories();
        Task<Category> GetCategoryById(int id);
        Task CreateCategory(Category category);
        Task UpdateCategory(Category category);
        Task DeleteCategory(int id);
    }
}
