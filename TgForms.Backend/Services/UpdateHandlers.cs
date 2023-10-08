using Telegram.Bot.Types.Enums;
using Telegram.Bot.Types.InlineQueryResults;
using Telegram.Bot.Types.ReplyMarkups;
using Telegram.Bot.Types;
using Telegram.Bot;

namespace TgForms.Backend.Services
{
    public class UpdateHandlers
    {
        private TelegramBotClient _botClient = Bot.GetTelegramBot();

        public async Task HandleUpdateAsync(Update update)
        {
            var handler = update switch
            {
                { Message: { } message } => BotOnMessageReceived(message),
                { InlineQuery: { } inlineQuery } => BotOnInlineQueryReceived(inlineQuery),
                _ => UnknownUpdateHandlerAsync(update)
            };

            await handler;
        }

        private async Task BotOnMessageReceived(Message message)
        {
            if (message.Text is not { } messageText)
                return;

            if (message.ViaBot is not null)
                return;

            var action = messageText switch
            {
                "/start" => StartAction(_botClient, message),
                "How to publich?" => SendInlineKeyboardWithPublishButton(_botClient, message),
                _ => SendInlineKeyboardWithPublishButton(_botClient, message)
            };

            Message sentMessage = await action;

            static async Task<Message> StartAction(ITelegramBotClient botClient, Message message)
            {
                await botClient.SendChatActionAsync(
                    chatId: message.Chat.Id,
                    chatAction: ChatAction.Typing,
                    cancellationToken: default);

                var webAppInfo = new WebAppInfo() { Url = $"{Bot.WebAppUrl}/my-forms" };

                ReplyKeyboardMarkup replyKeyboardMarkup = new(new[]
                {
                    KeyboardButton.WithWebApp("My forms", webAppInfo),
                    new KeyboardButton("How to publish?")
                })
                {
                    ResizeKeyboard = true
                };

                return await botClient.SendTextMessageAsync(
                    chatId: message.Chat.Id,
                    text: "Welcome to TgForms bot.",
                    replyMarkup: replyKeyboardMarkup,
                    cancellationToken: default);
            }

            static async Task<Message> SendInlineKeyboardWithPublishButton(ITelegramBotClient botClient, Message message)
            {
                await botClient.SendChatActionAsync(
                    chatId: message.Chat.Id,
                    chatAction: ChatAction.Typing,
                    cancellationToken: default);

                InlineKeyboardMarkup inlineKeyboard = new(
                    InlineKeyboardButton.WithSwitchInlineQuery("Publish"));

                var text = "1) Click on the \"Publish\" button to publish your form. \r\n" +
                    "2) Next, select chat. \r\n" +
                    "3) Then wait until your forms appear in the popup window. \r\n" +
                    "4) Now you can choose any of the suggested forms to share.";

                return await botClient.SendTextMessageAsync(
                    chatId: message.Chat.Id,
                    text: text,
                    replyMarkup: inlineKeyboard,
                    cancellationToken: default);
            }
        }

        private async Task BotOnInlineQueryReceived(InlineQuery inlineQuery)
        {
            try
            {
                //List<DrugViewModel> drugs;
                //if (inlineQuery.Query is "")
                //    drugs = _drugSearchService.GetAllDrugs();
                //else
                //    drugs = _drugSearchService.SearchDrugs(inlineQuery.Query);

                var results = InlineQueryResult(new() { "text1", "text2", "text3", "text4" });

                await _botClient.AnswerInlineQueryAsync(
                    inlineQueryId: inlineQuery.Id,
                    results: results,
                    cacheTime: 0,
                    isPersonal: true,
                    cancellationToken: default);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        private List<InlineQueryResult> InlineQueryResult(List<string> forms)
        {
            List<InlineQueryResult> results = new();
            foreach (var form in forms)
            {
                var resultTextMarkdown = $"{form}";

                var article = new InlineQueryResultArticle(
                id: Guid.NewGuid().ToString(),
                title: form,
                inputMessageContent: new InputTextMessageContent(resultTextMarkdown) { ParseMode = ParseMode.Markdown });

                article.Description = form;
                article.ThumbnailUrl = "https://loremflickr.com/300/300/medicament";
                article.ThumbnailWidth = 300;
                article.ThumbnailHeight = 300;

                var webAppUrlToForm = $"{Bot.BotUrlWithStartApp}";

                article.ReplyMarkup = new InlineKeyboardMarkup(InlineKeyboardButton.WithUrl("Form", webAppUrlToForm));

                results.Add(article);
            }

            return results;
        }

        private Task UnknownUpdateHandlerAsync(Update update)
        {
            return Task.CompletedTask;
        }
    }
}
