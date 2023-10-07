namespace TgForms.Backend.DTOs
{
    public class CreateFormDTO
    {
        public required FormDTO FormDTO { get; set; }
        public required UserDTO UserDTO { get; set; }
    }
}
