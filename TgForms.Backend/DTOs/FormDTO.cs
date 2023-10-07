using TgForms.Backend.Models;

namespace TgForms.Backend.DTOs
{
    public class FormDTO
    {
        public required string Name { get; set; }
        public required string Description { get; set; }
        public List<CustomPropertyDTO> CustomProperties { get; set; } = new();
    }
}
