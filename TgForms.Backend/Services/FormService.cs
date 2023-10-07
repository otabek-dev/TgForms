using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;
using TgForms.Backend.DB;
using TgForms.Backend.DTOs;
using TgForms.Backend.Models;
using TgForms.Backend.Results;

namespace TgForms.Backend.Services
{
    public class FormService
    {
        private readonly AppDbContext _context;

        public FormService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result> CreateCollectionAsync(FormDTO model, UserDTO user)
        {
            if (!await HasUser(user.Id))
                if (!await CreateUserById(user))
                    return new Result(false, "Form not created / User not found");

            var form = new Form
            {
                Id = Guid.NewGuid(),
                Name = model.Name,
                Description = model.Description,
                UserId = user.Id
            };

            if (model.CustomProperties != null)
                foreach (var customProperty in model.CustomProperties)
                    form.CustomProperties.Add(new CustomProperty
                    {
                        Id = Guid.NewGuid(),
                        Name = customProperty.Name,
                        TypeProperty = customProperty.TypeProperty,
                        FormId = form.Id
                    });

            await _context.Forms.AddAsync(form);
            await _context.SaveChangesAsync();

            return new Result(true);
        }

        private async Task<bool> HasUser(long userId)
        {
            return await _context.Users.AnyAsync(u => u.Id == userId);
        }

        private async Task<bool> CreateUserById(UserDTO tgUser)
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
