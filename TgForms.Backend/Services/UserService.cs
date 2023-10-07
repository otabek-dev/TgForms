using Microsoft.EntityFrameworkCore;
using TgForms.Backend.DB;
using TgForms.Backend.Results;
using TgForms.Backend.ViewModels;

namespace TgForms.Backend.Services
{
    public class UserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result> GetFormsByUserId(long userId)
        {
            var form = await _context.Forms
                .Where(x => x.UserId == userId)
                .Include(x => x.Answers)
                .Select(c => new FormViewModel
                {
                    Id = c.Id,
                    Name = c.Name,
                    Description = c.Description,
                    AnswersCount = c.Answers.Count,
                })
                .ToListAsync();

            if (form.Count == 0)
                return new Result(false, "Collections not found");

            return new DataResult<List<FormViewModel>>(form, true);
        }
    }
}
