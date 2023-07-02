using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS.Core;
using Microsoft.EntityFrameworkCore.Metadata;
using ProAtividade.Data.Context;
using ProAtividade.Domain.Entities;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        /*public IEnumerable<Atividade> Atividades = new List<Atividade>(){
                new Atividade(1),
                new Atividade(2),
                new Atividade(3)
        };*/
        private readonly DataContext _context;
        
        public AtividadeController(DataContext context)
        {
            _context = context;
            
        }

        /*
        [HttpGet]
        public string Get(){
            return "Teste Get pelo controller";
        }

        [HttpGet("{id}")]
        public string Get(int id){
            return $"Teste Get pelo controller, parametro: {id}";
        }*/

        [HttpGet]
        public IEnumerable<Atividade> Get(){
            return _context.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id){
            // => isso é uma lambda expression
            return _context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
        }

        [HttpPost]
        public Atividade Post (Atividade atividade)
        {
            _context.Atividades.Add(atividade);
            if (_context.SaveChanges() > 0)
                return _context.Atividades.FirstOrDefault(ativ => ativ.Id == atividade.Id);
            else
                throw new Exception("Não inseriu");

            //return Atividades.Append<Atividade>(Atividade);
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade){
            if (atividade.Id != id)
                throw new Exception("Erro ao atualizar atividade");
            
            _context.Update(atividade);
            if (_context.SaveChanges() > 0)
                return _context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            else
                return new Atividade();

            //return atividade;
        }

        [HttpDelete("{id}")]
        public bool Delete(int id){
            var atividade = _context.Atividades.FirstOrDefault(ativ => ativ.Id==id);
            if (atividade == null)
                throw new Exception("Erro ao deletar");

            _context.Remove(atividade);

            return _context.SaveChanges() > 0;    
            //return "deletando";
        }
    }
}