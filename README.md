# TgForms
[Ru doc](https://otabek-dev.notion.site/TgForms-doc-65ad5c07cfff400799fb5d743af2ea40)
## About the Bot
This bot is designed for creating surveys within Telegram. It can be considered as an equivalent to Google Forms but integrated within Telegram. Users can respond to surveys without leaving the Telegram platform. The problem is that often bloggers and individuals working with audiences need information from users, and the built-in Telegram poll feature may not always suit their needs. My bot is intended to address this issue with a user-friendly interface and a convenient format, thanks to Telegram Bot Web Apps.
https://t.me/minitgforms_bot

<hr/>

## User Guide

To create a survey from scratch, start by launching the bot. Then, click on the `Create form` button.

<img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/1-create.png" alt="Описание 1" width="200"/>  

Then, fill in the fields. You can also add new fields of different types (string, number, and bool).

After completing all the fields, `click` the Create button.

<img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/2-viewCreatePage.png" alt="Описание 1" width="200"/> <img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/3-addCustomFields.png" alt="Описание 1" width="200"/> <img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/4-formCreated.png" alt="Описание 1" width="200"/>  

At the bottom, you will find a `My forms` button to view the forms you've created. To see responses to your forms, click the `View answers` button.

<img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/5-viewMyForms.png" alt="Описание 1" width="200"/> <img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/6-viewCountForms.png" alt="Описание 1" width="200"/> <img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/7-viewAnswers.png" alt="Описание 1" width="200"/>  

How to share? It's simple! Click the `How to publish?` button, and you will see instructions on how to publish your forms. Click the `Publish` button and select the chat with whom you want to share. Then, wait until your forms are loaded. Afterward, you can choose any form you've created and share it.

Next, the recipient of your message can click on the `Form` button and complete the survey without leaving Telegram. Afterward, you will be able to see the responses to your forms within the bot.

<img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/8-inlineModeViewForms.png" alt="Описание 1" width="200"/> <img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/9-sendForm.png" alt="Описание 1" width="200"/> <img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/10-createAnswer.png" alt="Описание 1" width="200"/> <img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/11-createdAnswer.png" alt="Описание 1" width="200"/> 

## Project Structure

```
├── LICENSE.txt
├── README.md
├── TgForms.Backend
│   ├── Bot.cs
│   ├── Controllers
│   │   ├── AnswersController.cs
│   │   ├── BotController.cs
│   │   ├── FormsController.cs
│   │   └── UsersController.cs
│   ├── DB
│   │   └── AppDbContext.cs
│   ├── DTOs
│   │   ├── AnswerDTO.cs
│   │   ├── CreateFormDTO.cs
│   │   ├── CustomPropertyDTO.cs
│   │   ├── CustomPropertyValueDTO.cs
│   │   ├── FormDTO.cs
│   │   └── UserDTO.cs
│   ├── Migrations
│   ├── Models
│   │   ├── Answer.cs
│   │   ├── CustomProperty.cs
│   │   ├── CustomPropertyValue.cs
│   │   ├── Form.cs
│   │   └── User.cs
│   ├── Program.cs
│   ├── Properties
│   │   └── launchSettings.json
│   ├── Results
│   │   ├── DataResult.cs
│   │   └── Result.cs
│   ├── Services
│   │   ├── AnswerService.cs
│   │   ├── FormService.cs
│   │   ├── UpdateHandlers.cs
│   │   └── UserService.cs
│   ├── TgForms.Backend.csproj
│   ├── ViewModels
│   │   ├── AnswerViewModel.cs
│   │   ├── CustomPropertyValueViewModel.cs
│   │   ├── CustomPropertyViewModel.cs
│   │   ├── FormDetailsViewModel.cs
│   │   ├── FormToCreateAnswerViewModel.cs
│   │   └── FormViewModel.cs
│   ├── appsettings.Development.json
│   ├── appsettings.json
│   ├── bin
│   │   ├── Debug
│   │   └── Release
├── TgForms.Frontend
│   ├── README.md
│   ├── index.html
│   ├── netlify.toml
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── API
│   │   │   ├── Config.js
│   │   │   └── Form.service.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── Components
│   │   │   ├── Answers
│   │   │   │   ├── Answers.jsx
│   │   │   │   └── answers.module.css
│   │   │   ├── CreateCustomFields
│   │   │   │   ├── CreateCustomFields.jsx
│   │   │   │   └── createCustomFields.module.css
│   │   │   ├── MyForms
│   │   │   │   ├── MyForms.jsx
│   │   │   │   └── myForms.module.css
│   │   │   └── UI
│   │   │       ├── Button
│   │   │       │   ├── Button.jsx
│   │   │       │   └── button.module.css
│   │   │       ├── ErrorModal
│   │   │       │   ├── ErrorModal.jsx
│   │   │       │   └── errorModal.module.css
│   │   │       ├── Input
│   │   │       │   ├── Input.jsx
│   │   │       │   └── input.module.css
│   │   │       ├── Loader
│   │   │       │   ├── Loader.jsx
│   │   │       │   └── loader.module.css
│   │   │       ├── MyLink
│   │   │       │   ├── MyLink.jsx
│   │   │       │   └── myLink.module.css
│   │   │       └── Textarea
│   │   │           ├── Textarea.jsx
│   │   │           └── textarea.module.css
│   │   ├── Hooks
│   │   │   ├── useFetching.js
│   │   │   └── useTelegram.js
│   │   ├── Pages
│   │   │   ├── CreateAnswerPage
│   │   │   │   ├── CreateAnswerPage.jsx
│   │   │   │   └── createAnswerPage.module.css
│   │   │   ├── CreateFormPage
│   │   │   │   ├── CreateFormPage.jsx
│   │   │   │   └── createFromPage.module.css
│   │   │   ├── MsgPage
│   │   │   │   └── MessagePage.jsx
│   │   │   ├── MyFormDetailPage
│   │   │   │   ├── MyFormDetailPage.jsx
│   │   │   │   └── myFormDetailPage.module.css
│   │   │   ├── MyFormsPage
│   │   │   │   ├── MyFormsPage.jsx
│   │   │   │   └── myFormsPage.module.css
│   │   │   └── RouteToCreateAnswerPage
│   │   │       └── RouteToCreateAnswerPage.jsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   └── main.jsx
│   ├── vite.config.js
│   └── yarn.lock
└── TgForms.sln
```
Database schema

<img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/DB.jpg" alt="db" width="700"/>  

<hr/>

# Developer's Guide

**Required Tools:**
- Visual Studio 2022
- .NET 7
- PostgreSQL 15
- Node.js 18 LTS + Yarn + Vite
- ngrok
- WebStorm or Visual Studio Code

Download and install all the required tools.

<hr/>

To get started, clone the project from GitHub. You should see the following files:

<img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/projectFiles.png" alt="db" width="700"/> 

## Frontend

To run the frontend, navigate to the "TgForms.Frontend" directory in your console using the `cd /path/to/your/project` command. Then, run the `yarn` command in the console to install all the necessary dependencies. Once all the dependencies have been installed, you can run the project.

However, running the project locally is not enough because the frontend is designed to work in conjunction with the backend and Telegram data. Therefore, the next step is deploying the project. You can use any hosting service for this purpose, but I recommend using [Netlify](https://www.netlify.com/) because it's free and relatively straightforward.

Follow the deployment instructions provided by Netlify [here](https://docs.netlify.com/get-started/), and apply my settings for the build process.

<img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/deploySettingsNetlify.png" alt="db" width="700"/> 

At this stage, you should obtain a public link to the frontend resembling something like `vergergerg-stroopwafel-fff02a.netlify.app.` You will need this link for the next step.

## Backend

1. Open the `TgForms.sln` file and wait for all the dependencies to be installed. In Visual Studio 2022, dependencies are downloaded automatically.

2. Create a file named `appsettings.json` inside the `TgForms.Backend` folder. Inside the file, configure the following settings:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "BotToken": "{Your Bot Token}",
  "WebAppUrl": "{Link to WebApp}", // For example, https://mywebapp.netlify.app
  "BotUrlWithStartApp": "https://t.me/minitgforms_bot/tgforms?startapp=",
  "DbConnDigitalOcean": "Host=localhost; Port=5432; Database=TgForms; Username=postgres; Password={Your Database Password}"
}
```

To obtain a token for your bot, follow this guide: [From BotFather to 'Hello World' (telegram.org)](https://core.telegram.org/bots/tutorial)

### Configuring Bot for Inline Mode

1. In your bot's settings, enable "Inline Mode."

2. To set up the "Create form" button, send the `/setmenubutton` command to [https://t.me/BotFather](https://t.me/BotFather). In response to the bot, send the following link: `https://{your web app link}/create-form`. The bot will ask you to provide a name for the button. Enter `Create form` as the button's name.

3. Create a WebApp link for your bot using the `/newapp` command in @BotFather. Follow the instructions provided by BotFather. Place the received link in the `"BotUrlWithStartApp"` field in the following format: `"{your received link}?startapp="`.

4. Ensure that there are no trailing slashes `/` at the end of the links, as this can lead to routing errors.

5. Finally, configure the connection string to your database. If you are using PostgreSQL, simply append your database password at the end of the connection string.

6. Run the project, and if there are no errors during startup, stop the project and apply the database migration. To migrate the database, open the Package Manager Console and run the following command: `Update-Database`.

### ngrok

Next, we will set up `ngrok` to allow our locally running bot to communicate with Telegram.

First, make sure your project is running. By default, the project should be accessible at

<img src="https://github.com/otabek-dev/TgForms/blob/master/TgForms.Screens/viewNgrok.png" alt="db" width="700"/> 

If it's running on a different address, that's okay.

To start an `ngrok` server, open your terminal and run the following command:

```
ngrok http http://localhost:5000/
```

You should see output similar to the screenshot you provided.

### Telegram WebHook

After running `ngrok` and exposing your local server, you need to set up a Telegram WebHook to connect your bot to the Telegram API.

Use the following URL to set the WebHook:

```
https://api.telegram.org/bot{your_bot_token}/setWebhook?url={your_web_app_url}
```

Replace `{your_bot_token}` with your actual bot token and `{your_https_ngrok_url}` with the public URL provided by `ngrok`.

You should receive a response like the following:

```
{"ok":true,"result":true,"description":"Webhook was set"}
```

Now your bot should be fully functional and ready to use.

# Deployment

To deploy your bot, you can use any operating system. I will be using Ubuntu 22 LTS for this example. You can find a detailed guide on how to deploy an ASP.NET Core application to Digital Ocean Droplets in this [link](https://juldhais.net/how-to-deploy-asp-net-core-application-to-digital-ocean-droplets-40861be83db7). This guide covers everything except migrating the database.

Before proceeding with the deployment, you need to install and configure the database on your server.

Start by installing PostgreSQL:

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

Now set a password for the PostgreSQL user:

```bash
sudo -u postgres psql
\password postgres
```

Next, download `dotnet ef`:

```bash
dotnet tool install --global dotnet-ef
```

After installation, add the directory containing the .NET Core SDK tools to your **`~/.bash_profile`**:

```bash
cat << \EOF >> ~/.bash_profile
# Add .NET Core SDK tools
export PATH="$PATH:/root/.dotnet/tools"
EOF
```

Then, update your current session to apply the changes:

```bash
source ~/.bash_profile
```

Now you can use **`dotnet-ef`** by running commands in your shell.

Proceed with the deployment guide I provided earlier. When building the project, don't forget to migrate the database:

```bash
cd /path/to/your/project
dotnet ef database update
```

Ensure that you configure the `appsettings.json` as I described in the developer's guide.

That's it! Good luck with your deployment!

# References

Here are the resources and references used in the development of this project:

- [Telegram Bots Web Apps](https://core.telegram.org/bots/webapps)
- [From BotFather to 'Hello World' (telegram.org)](https://core.telegram.org/bots/tutorial)
- [Telegram Bot API Documentation](https://telegrambots.github.io/book/index.html)
- [Entity Framework Core CLI](https://learn.microsoft.com/en-us/ef/core/cli/dotnet)
- [How To Install and Use PostgreSQL on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-22-04)
- [How to Deploy an ASP.NET Core Application to Digital Ocean Droplets](https://juldhais.net/how-to-deploy-asp-net-core-application-to-digital-ocean-droplets-40861be83db7)
- [Netlify](https://app.netlify.com/)
