using System.ComponentModel.DataAnnotations.Schema;

namespace _00012928.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int PhoneNumber { get; set; }
        public int? CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        public Category? Category { get; set; }
    }
}
