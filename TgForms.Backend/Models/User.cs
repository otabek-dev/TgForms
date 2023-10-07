namespace TgForms.Backend.Models
{
    public class User
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? Username { get; set; }

        public List<Form> Forms { get; set; } = new();
    }
}
