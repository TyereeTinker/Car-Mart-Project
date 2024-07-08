using cart_mart.server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cart_mart.server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly CarDbContext _context;

        public CarController(CarDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Car>> AddCar(Car car)
        {
            if (car == null)
            {
                return BadRequest();
            }
            else
            {
                _context.Cars.Add(car);
                await _context.SaveChangesAsync();

                return Ok();
            }
        }

        [HttpGet]
        public async Task<ActionResult<Car>> GetCar()
        {


            return Ok();
        }

        [HttpDelete]
        public async Task<ActionResult<Car>> DeleteCar(int id)
        {

            return Ok();
        }
    }
}
