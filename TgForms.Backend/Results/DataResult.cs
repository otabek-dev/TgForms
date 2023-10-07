namespace TgForms.Backend.Results
{
    public class DataResult<T> : Result
    {
        public T Data { get; init; }

        public DataResult(T data, bool success = true, string message = "") 
            : base(success, message)
        {
            Data = data;
        }
    }
}
