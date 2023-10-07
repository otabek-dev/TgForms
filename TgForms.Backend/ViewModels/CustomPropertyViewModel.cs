using TgForms.Backend.Models;

namespace TgForms.Backend.ViewModels
{
    public class CustomPropertyViewModel
    {
        public required Guid Id { get; set; }
        public required string Name { get; set; }
        public required string TypeProperty { get; set; }

        public List<CustomPropertyValueViewModel> CustomPropertyValues { get; set; } = new();
    }
}
