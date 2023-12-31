﻿using Microsoft.EntityFrameworkCore;
using TgForms.Backend.DB;
using TgForms.Backend.DTOs;
using TgForms.Backend.Models;
using TgForms.Backend.Results;
using TgForms.Backend.ViewModels;

namespace TgForms.Backend.Services
{
    public class FormService
    {
        private readonly AppDbContext _context;
        private readonly UserService _userService;

        public FormService(AppDbContext context, UserService userService)
        {
            _context = context;
            _userService = userService;
        }

        public async Task<Result> CreateFormAsync(FormDTO model, UserDTO user)
        {
            if (!await _userService.HasUserAsync(user.Id))
                if (!await _userService.CreateUserByIdAsync(user))
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

            return new Result(true, "New form created!");
        }

        public async Task<Result> GetFormDetailsByIdAsync(Guid formId)
        {
            var form = await _context.Forms
                .Where(x => x.Id == formId)
                .Include(x => x.Answers)
                    .ThenInclude(x => x.CustomPropertyValues)
                        .ThenInclude(x => x.CustomProperty)
                .Select(f => new FormDetailsViewModel()
                {
                    Id = f.Id,
                    Name = f.Name,
                    AnswersCount = f.Answers.Count,
                    Answers = f.Answers.Select(a => new AnswerViewModel()
                    {
                        UserId = a.Username,
                        CustomPropertyValues = a.CustomPropertyValues.Select(cpv => new CustomPropertyValueViewModel()
                        {
                            Value = cpv.Value,
                            CustomPropertyName = cpv.CustomProperty.Name,
                            CustomPropertyType = cpv.CustomProperty.TypeProperty,
                        }).ToList(),
                    }).ToList()
                }).FirstOrDefaultAsync();

            if (form is null)
                return new Result(false, "Form not found!");

            return new DataResult<FormDetailsViewModel>(form, true);
        }

        public async Task<DataResult<FormToCreateAnswerViewModel>> GetFormByIdToCreateAnswerAsync(Guid formId)
        {
            var form = await _context.Forms
                .Where(f => f.Id == formId)
                .Select(x => new FormToCreateAnswerViewModel()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Description = x.Description,
                    CustomProperties = x.CustomProperties.Select(cpv => new CustomPropertyViewModel()
                    {
                        Id = cpv.Id,
                        Name = cpv.Name,
                        TypeProperty = cpv.TypeProperty,
                        CustomPropertyValues = new()
                    }).ToList(),
                }).FirstOrDefaultAsync();

            if (form is null) return new DataResult<FormToCreateAnswerViewModel>(null, false, "Form not found!"); ;

            return new DataResult<FormToCreateAnswerViewModel>(form, true);
        }
    }
}
