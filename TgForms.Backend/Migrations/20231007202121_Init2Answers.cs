using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TgForms.Backend.Migrations
{
    /// <inheritdoc />
    public partial class Init2Answers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Answers",
                newName: "Username");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Answers",
                newName: "Name");
        }
    }
}
