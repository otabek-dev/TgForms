using Microsoft.AspNetCore.Mvc;
using TgForms.Backend.Results;
using TgForms.Backend.Services;
using TgForms.Backend.ViewModels;

namespace TgForms.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet("GetMyForms/{userId}")]
        public async Task<Result> Get(long userId)
        {
            var result = await _userService.GetFormsByUserId(userId);
            return result;
        }
    }
}
