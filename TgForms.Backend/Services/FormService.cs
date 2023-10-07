using TgForms.Backend.DB;

namespace TgForms.Backend.Services
{
    public class FormService
    {
        private readonly AppDbContext _context;

        public FormService(AppDbContext context)
        {
            _context = context;
        }


    }
}
