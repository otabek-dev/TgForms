using TgForms.Backend.Models;

namespace TgForms.Backend.ViewModels
{
    public class FormToCreateAnswerViewModel
    {
        public required Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }

        public List<CustomPropertyViewModel> CustomProperties { get; set; } = new();
    }
}
