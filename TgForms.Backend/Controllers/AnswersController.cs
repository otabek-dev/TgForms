using Microsoft.AspNetCore.Mvc;
using TgForms.Backend.DTOs;
using TgForms.Backend.Results;
using TgForms.Backend.Services;

namespace TgForms.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswersController : ControllerBase
    {
        private readonly AnswerService _answerService;

        public AnswersController(AnswerService answerService)
        {
            _answerService = answerService;
        }

        [HttpPost]
        public async Task<Result> Post([FromBody] AnswerDTO answerDTO)
        {
            var result = await _answerService.CreateAnswerAsync(answerDTO);
            return result;
        }
    }
}
