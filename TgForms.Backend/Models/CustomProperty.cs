using Newtonsoft.Json;

namespace TgForms.Backend.Models
{
    public class CustomProperty
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string TypeProperty { get; set; }

        public Guid FormId { get; set; }
        [JsonIgnore]
        public Form? Form { get; set; }

        public List<CustomPropertyValue> CustomPropertyValues { get; set; } = new();
    }
}
