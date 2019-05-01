using IsmoBackend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IsmoBackend.Data
{
    public class IsmoDbContext : DbContext
    {
        public IsmoDbContext(DbContextOptions opts): base(opts)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<MessageLike>().HasKey(c => new { c.MessageId, c.UserId });
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<MessageLike> MessageLikes { get; set; }



    }
}
