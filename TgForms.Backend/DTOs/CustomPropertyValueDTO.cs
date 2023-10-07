namespace TgForms.Backend.DTOs
{
    public class CustomPropertyValueDTO
    {
        public required string Value { get; set; }
        public Guid CustomPropertyId { get; set; }
    }
}
