using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Homework.Server.Controllers
{
    //We might add the versioning in the route path for better compatibilities
    [ApiController]
    [Route("[controller]")]     
    public class PersonController : ControllerBase
    {
        private readonly ILogger<PersonController> _logger;
        private IWebHostEnvironment _hostEnvironment;
        private const string _fileName = "person.json";
        public PersonController(ILogger<PersonController> logger, IWebHostEnvironment hostEnvironment)
        {
            _logger = logger;
            _hostEnvironment = hostEnvironment;
        }

        //Better as async to be more scalable if file access gets very slow.
        [HttpPost(Name = "SavetoFile")]        
        public async Task<IActionResult> Save(Person person)
        {
            if (person == null)
                return BadRequest("Null object to save!");

            //convert and save it in Json
            string json = JsonSerializer.Serialize(person);
            System.IO.File.WriteAllText(Path.Combine(_hostEnvironment.WebRootPath, @$"Files/{_fileName}"), json);

            _logger.LogInformation($"save the info, first name: {person.FirstName}, last name: {person.LastName}");
            return Ok();
        }
    }
}