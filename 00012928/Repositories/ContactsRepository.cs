using _00012928.Data;
using _00012928.Models;
using Microsoft.EntityFrameworkCore;

namespace _00012928.Repositories
{
    public class ContactsRepository : IContactsRepository
    {
        private readonly ContactManagerDbContext _dbContext;

        public ContactsRepository(ContactManagerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Contact>> GetAllContacts() => await _dbContext.Contacts.Include(c => c.Category).ToArrayAsync();

        public async Task<Contact> GetContactById(int id)
        {
            return await _dbContext.Contacts.Include(c => c.Category).FirstOrDefaultAsync(c => c.Id == id);
        }

        // This project is created by 00012928
        public async Task CreateContact(Contact contact)
        {
            await _dbContext.Contacts.AddAsync(contact);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateContact(Contact contact)
        {
            _dbContext.Entry(contact).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteContact(int id)
        {
            var contact = await _dbContext.Contacts.FirstOrDefaultAsync(c => c.Id == id);
            if (contact != null)
            {
                _dbContext.Contacts.Remove(contact);
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}
