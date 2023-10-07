using Microsoft.EntityFrameworkCore;
using TgForms.Backend.DB;
using TgForms.Backend.DTOs;
using TgForms.Backend.Models;
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

        public async Task<Result> GetFormsByUserIdAsync(long userId)
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
                return new Result(false, "Forms not found");

            return new DataResult<List<FormViewModel>>(form, true);
        }

        public async Task<bool> HasUserAsync(long userId)
        {
            return await _context.Users.AnyAsync(u => u.Id == userId);
        }

        public async Task<bool> CreateUserByIdAsync(UserDTO tgUser)
        {
            try
            {
                var user = new User
                {
                    Id = tgUser.Id,
                    Name = tgUser.Name,
                    Username = tgUser.Username,
                    Forms = new()
                };
                await _context.Users.AddAsync(user);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }

            return true;
        }
    }
}
