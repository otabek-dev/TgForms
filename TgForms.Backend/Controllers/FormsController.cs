using Microsoft.AspNetCore.Mvc;
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

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public async Task<Result> CreateForm([FromBody] CreateFormDTO createFormDTO)
        {
            var result = await _formService.CreateCollectionAsync(createFormDTO.FormDTO, createFormDTO.UserDTO);
            return result;
        }
    }
}
