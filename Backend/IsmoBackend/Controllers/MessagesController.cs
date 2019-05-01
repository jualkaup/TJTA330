using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IsmoBackend.Data;
using IsmoBackend.Models;

namespace IsmoBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly IsmoDbContext _context;

        public MessagesController(IsmoDbContext context)
        {
            _context = context;
        }

        // GET: api/Messages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Message>>> GetMessages()
        {
            var messages = await  _context.Messages.Include(m => m.Sender).ToListAsync();
            foreach (var msg in messages)
            {
                msg.LikeAmount = await _context.MessageLikes.Where(ml => ml.MessageId == msg.Id).CountAsync();
            }

            return messages;
        }

        [HttpGet("LikeState/{userId}/{msgId}")]
        public IActionResult GetLikeState(int msgId, int userId)
        {
            var row = _context.MessageLikes.FirstOrDefault(ml => ml.MessageId == msgId && ml.UserId == userId);
            if (row == null) return Ok(false);
            return Ok(true);
        }

        // GET: api/Messages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Message>> GetMessage(int id)
        {
            var message = await _context.Messages.Include(m => m.Sender).Where(m => m.Id == id).FirstOrDefaultAsync();


            if (message == null)
            {
                return NotFound();
            }

            var likeAmount = await _context.MessageLikes.Where(ml => ml.MessageId == message.Id).CountAsync();
            message.LikeAmount = likeAmount;
            return message;
        }


        [HttpGet("LikeMessage/{messageId}")]
        public async Task<IActionResult> LikeMessage(int messageId)
        {
            var message = await _context.Messages.Where(m => m.Id == messageId).FirstOrDefaultAsync();

            if (message == null)
            {
                return NotFound();
            }

            var newMsgLike = new MessageLike() { MessageId = messageId, UserId = 3 };


            var msgLike = _context.MessageLikes.FirstOrDefault(ml => ml.MessageId == newMsgLike.MessageId && ml.UserId == 3);
            if (msgLike == null)
            {
                await _context.MessageLikes.AddAsync(newMsgLike);
            }
            else
            {
                _context.MessageLikes.Remove(msgLike);
            }
            
            await _context.SaveChangesAsync();
            return Ok();
        }



        // PUT: api/Messages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMessage(int id, Message message)
        {
            if (id != message.Id)
            {
                return BadRequest();
            }

            _context.Entry(message).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MessageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Messages
        [HttpPost]
        public async Task<ActionResult<Message>> PostMessage(NewMessage message)
        {
            var sender = _context.Users.FirstOrDefault(u => u.Id == 3);

            var msg = new Message
            {
                Content = message.Content,
                Date = DateTime.Now,
                Platform = Platform.ISMO,
                Sender = sender
            };

            _context.Messages.Add(msg);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMessage", new { id = msg.Id }, msg);
        }

        public class NewMessage
        {
            public string Content { get; set; }
            public int UserId { get; set; }
        }

        // DELETE: api/Messages/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Message>> DeleteMessage(int id)
        {
            var message = await _context.Messages.FindAsync(id);
            if (message == null)
            {
                return NotFound();
            }

            _context.Messages.Remove(message);
            await _context.SaveChangesAsync();

            return message;
        }

        private bool MessageExists(int id)
        {
            return _context.Messages.Any(e => e.Id == id);
        }
    }
}
