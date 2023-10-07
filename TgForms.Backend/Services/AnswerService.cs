using TgForms.Backend.DB;
using TgForms.Backend.DTOs;
using TgForms.Backend.Models;
using TgForms.Backend.Results;

namespace TgForms.Backend.Services
{
    public class AnswerService
    {
        private readonly AppDbContext _context;

        public AnswerService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Result> CreateAnswerAsync(AnswerDTO answerDTO)
        {
            var answer = new Answer
            {
                Id = Guid.NewGuid(),
                FormId = answerDTO.FormId,
                Username = answerDTO.Username,
            };

            if (answerDTO.CustomPropertyValues != null)
            {
                foreach (var cpv in answerDTO.CustomPropertyValues)
                    answer.CustomPropertyValues.Add(new CustomPropertyValue
                    {
                        Id = Guid.NewGuid(),
                        Value = cpv.Value,
                        CustomPropertyId = cpv.CustomPropertyId,
                        AnswerId = answer.Id
                    });
            }

            await _context.Answers.AddAsync(answer);
            await _context.SaveChangesAsync();

            return new Result(true, "Answer created!");
        }
    }
}
