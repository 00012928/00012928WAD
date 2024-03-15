using _00012928.Models;

namespace _00012928.Repositories
{
    public interface IContactsRepository
    {
        Task<IEnumerable<Contact>> GetAllContacts();
        Task<Contact> GetContactById(int id);
        Task CreateContact(Contact contact);
        Task UpdateContact(Contact contact);
        Task DeleteContact(int id);
    }
}
