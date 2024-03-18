using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _00012928.Models
{
    public class Contact
    {
        private string _name;
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string Name
        {
            get => _name;
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                }

                _name = value;
            }
        }

        [Required(ErrorMessage = "Phone Number is required")]
        public int PhoneNumber { get; set; }
        [Required(ErrorMessage = "Category is required")]
        public int? CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        public Category? Category { get; set; }
    }
}
