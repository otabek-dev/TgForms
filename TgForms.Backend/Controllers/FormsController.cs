﻿using Microsoft.AspNetCore.Mvc;
using TgForms.Backend.DTOs;
using TgForms.Backend.Results;
using TgForms.Backend.Services;

namespace TgForms.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormsController : ControllerBase
    {
        private FormService _formService;

        public FormsController(FormService formService)
        {
            _formService = formService;
        }

        [HttpGet("detailsById/{formId}")]
        public async Task<Result> GetFormDetailsById(Guid formId)
        {
            var result = await _formService.GetFormDetailsByIdAsync(formId);
            return result;
        }

        [HttpGet("{formId}")]
        public async Task<Result> GetFormById(Guid formId)
        {
            var result = await _formService.GetFormByIdToCreateAnswerAsync(formId);
            return result;
        }

        [HttpPost]
        public async Task<Result> CreateForm([FromBody] CreateFormDTO createFormDTO)
        {
            var result = await _formService.CreateFormAsync(createFormDTO.FormDTO, createFormDTO.UserDTO);
            return result;
        }
    }
}
