using Newtonsoft.Json;

namespace TgForms.Backend.Models
{
    public class Form
    {
        public required Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public long UserId { get; set; }

        [JsonIgnore]
        public User? User { get; set; }

        public List<Answer> Answers { get; set; } = new();
        public List<CustomProperty> CustomProperties { get; set; } = new();
    }
}
