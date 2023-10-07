using Newtonsoft.Json;

namespace TgForms.Backend.Models
{
    public class Answer
    {
        public Guid Id { get; set; }
        public required string Username { get; set; }
        public Guid FormId { get; set; }

        [JsonIgnore]
        public Form? Form { get; set; }

        public List<CustomPropertyValue> CustomPropertyValues { get; set; } = new();
    }
}
