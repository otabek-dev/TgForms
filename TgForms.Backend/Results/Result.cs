namespace TgForms.Backend.Results
{
    public class Result
    {
        public bool Success { get; init; }
        public string Message { get; init; }

        public Result(bool success, string message = "")
        {
            Success = success;
            Message = message;
        }
    }
}
