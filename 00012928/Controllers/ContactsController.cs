using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using _00012928.Data;
using _00012928.Models;
using _00012928.Repositories;
using NuGet.Protocol.Core.Types;

namespace _00012928.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IContactsRepository _contactsRepository;

        public ContactsController(IContactsRepository contactsRepository)
        {
            _contactsRepository = contactsRepository;
        }

        // All controllers were edited accordingly by following seminars
        // GET: api/Contacts
        [HttpGet]
        public async Task<IEnumerable<Contact>> GetContacts()
        {
          return await _contactsRepository.GetAllContacts();
        }

        // GET: api/Contacts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContact(int id)
        {
            var contact = await _contactsRepository.GetContactById(id);

            if (contact == null)
            {
                return NotFound();
            }

            return Ok(contact);
        }

        // This project is created by 00012928
        // PUT: api/Contacts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContact(int id, Contact contact)
        {
            if (id != contact.Id)
            {
                return BadRequest();
            }

            await _contactsRepository.UpdateContact(contact);
            return NoContent();
        }

        // POST: api/Contacts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Contact>> PostContact(Contact contact)
        {
            await _contactsRepository.CreateContact(contact);
            return CreatedAtAction(nameof(GetContact), new { id = contact.Id }, contact);
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact(int id)
        {
            await _contactsRepository.DeleteContact(id);
            return NoContent();
        }
    }
}
