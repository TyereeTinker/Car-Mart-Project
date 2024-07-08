using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace cart_mart.server.Models
{
    public class Car
    {
        public int Id { get; set; }
        public required string Manufactorer { get; set; }
        public required string Model { get; set; }
        public required string Gearbox { get; set; }
        public required int Year { get; set; }
        public required float Milage { get; set; }
        public required string BodyType { get; set; }
    }
}
