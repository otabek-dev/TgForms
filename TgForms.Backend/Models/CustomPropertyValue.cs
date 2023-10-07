using Newtonsoft.Json;

namespace TgForms.Backend.Models
{
    public class CustomPropertyValue
    {
        public Guid Id { get; set; }
        public required string Value { get; set; }

        public Guid? CustomPropertyId { get; set; }
        [JsonIgnore]
        public CustomProperty? CustomProperty { get; set; }

        public Guid? AnswerId { get; set; }
        [JsonIgnore]
        public Answer? Answer { get; set; }
    }
}
