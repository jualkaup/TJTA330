using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IsmoBackend.Models
{
    public class Message
    {
        public int Id { get; set; }
        public User Sender { get; set; }
        public DateTime Date { get; set; }
        public string Content { get; set; }
        public Platform Platform { get; set; }
        [NotMapped]
        public int LikeAmount { get; set; }
    }

    public enum Platform
    {
        FACEBOOK, TWITTER, LINKEDIN, INSTAGRAM, ISMO
    }
}
