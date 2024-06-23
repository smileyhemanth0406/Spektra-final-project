using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectSpecktrafinal.Models;

namespace ProjectSpecktrafinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly UsersinfoContext context;

        public ValuesController(UsersinfoContext context)
        {
            this.context = context;
        }

        [HttpGet("userdetails")]
        public IActionResult Get()
        {
            var data = context.Data.ToList();
            return Ok(data);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Datum newData)
        {
            context.Data.Add(newData);
            context.SaveChanges();
            return Ok();
        }

        [HttpGet("totalUsers")]
        public IActionResult TotalUsers()
        {
            var totalCount = context.Data.Count();
            return Ok(totalCount);
        }

        [HttpGet("usersRegisteredPerDay")]
        public IActionResult UsersRegisteredPerDay()
        {
            try
            {
                var usersPerDay = context.Data
                    .Where(d => d.RegisteredDate != null) 
                    .GroupBy(d => d.RegisteredDate.Value.Date) 
                    .Select(group => new
                    {
                        Date = group.Key,
                        Count = group.Count()
                    })
                    .OrderByDescending(x => x.Date) 
                    .ToList();

                return Ok(usersPerDay);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error retrieving users registered per day: {ex.Message}");
            }
        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] Admin loginModel)
        {
            if (loginModel == null || string.IsNullOrEmpty(loginModel.Username) || string.IsNullOrEmpty(loginModel.Password))
            {
                return BadRequest("Invalid client request");
            }

            var admin = context.Admins
                .FirstOrDefault(a => a.Username == loginModel.Username && a.Password == loginModel.Password);

            if (admin != null)
            {
                return Ok(new { success = true });
            }
            else
            {
                return Ok(new { success = false });
            }
        }

    }

    //public class LoginModel
    //{
    //    public string Username { get; set; }
    //    public string Password { get; set; }
    //}
}
  