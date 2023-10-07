using Microsoft.EntityFrameworkCore;
using TgForms.Backend.Models;

namespace TgForms.Backend.DB
{
    public class AppDbContext : DbContext
    {
        private IConfiguration _configuration;
        public AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Form> Forms { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<CustomProperty> CustomProperties { get; set; }
        public DbSet<CustomPropertyValue> CustomPropertyValues { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration["DbConnDigitalOcean"]);
        }
    }
}
