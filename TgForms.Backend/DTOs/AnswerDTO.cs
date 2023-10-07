namespace TgForms.Backend.DTOs
{
    public class AnswerDTO
    {
        public string? Username { get; set; }
        public Guid FormId { get; set; }

        public List<CustomPropertyValueDTO>? CustomPropertyValues { get; set; }
    }
}
