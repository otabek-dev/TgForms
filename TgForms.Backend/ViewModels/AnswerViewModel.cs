using TgForms.Backend.Models;

namespace TgForms.Backend.ViewModels
{
    public class AnswerViewModel
    {
        public required string UserId { get; set; }
        public List<CustomPropertyValueViewModel>? CustomPropertyValues { get; set; }
    }
}
