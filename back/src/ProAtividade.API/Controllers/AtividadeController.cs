using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<Atividade> Atividades = new List<Atividade>(){
                new Atividade(1),
                new Atividade(2),
                new Atividade(3)
        };
        
        /*
        [HttpGet]
        public string Get(){
            return "Teste Get pelo controller";
        }

        [HttpGet("{id}")]
        public string Get(int id){
            return $"Teste Get pelo controller, parametro: {id}";
        }*/

        [HttpGet("{id}")]
        public Atividade Get(int id){
            // => isso é uma lambda expression
            return Atividades.FirstOrDefault(ativ => ativ.Id == id);
        }

        [HttpGet]
        public IEnumerable<Atividade> Get(){
            return Atividades;
        }
    }
}