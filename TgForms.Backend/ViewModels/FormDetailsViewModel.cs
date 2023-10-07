using TgForms.Backend.Models;

namespace TgForms.Backend.ViewModels
{
    public class FormDetailsViewModel
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public int AnswersCount { get; set; }
        public List<AnswerViewModel>? Answers { get; set; } = new();
    }
}
