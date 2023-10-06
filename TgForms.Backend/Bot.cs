using Telegram.Bot;

namespace TgForms.Backend
{
    public static class Bot
    {
        private static TelegramBotClient client { get; set; }
        private static IConfiguration _configuration { get; set; }
        private static string botToken { get; }
        public static string WebAppUrl { get; }
        public static string BotUrlWithStartApp { get; }

        static Bot()
        {
            var configurationBuilder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json");

            _configuration = configurationBuilder.Build();
            botToken = _configuration["BotToken"];
            WebAppUrl = _configuration["WebAppUrl"];
            BotUrlWithStartApp = _configuration["BotUrlWithStartApp"];
        }

        public static TelegramBotClient GetTelegramBot()
        {
            if (client != null)
            {
                return client;
            }

            client = new TelegramBotClient(botToken);
            return client;
        }
    }
}
