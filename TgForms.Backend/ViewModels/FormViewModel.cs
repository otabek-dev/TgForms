using TgForms.Backend.Models;

namespace TgForms.Backend.ViewModels
{
    public class FormViewModel
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int AnswersCount { get; set; }
    }
}
