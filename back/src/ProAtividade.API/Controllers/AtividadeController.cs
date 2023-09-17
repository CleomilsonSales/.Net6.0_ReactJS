using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS.Core;
using Microsoft.EntityFrameworkCore.Metadata;
using ProAtividade.Data.Context;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Services;


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
        //private readonly DataContext _context;
        private readonly IAtividadeService _atividadeService;

        public AtividadeController(IAtividadeService atividadeService /*DataContext context*/)
        {
            _atividadeService = atividadeService;
            //_context = context;
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
        public async Task<IActionResult> Get(){
            //return _context.Atividades;

            try{
                var atividades = await _atividadeService.PegarTodasAtividadesAsync();
                if (atividades == null) return NoContent();

                return Ok(atividades);

            }catch(System.Exception ex){
                
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar Atividades. Erro: { ex.Message }" );
            }

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id){
            // => isso é uma lambda expression
            //return _context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            //do IActionResult

            try{
                var atividade = await _atividadeService.PegarAtividadePorIdAsync(id);
                if (atividade == null) return NoContent();

                return Ok(atividade);

            }catch(System.Exception ex){
                
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar Atividade com id: ${ id }. Erro: { ex.Message }" );
            }

        }

        [HttpPost]
        public async Task<IActionResult> Post (Atividade model)
        {
            /*_context.Atividades.Add(atividade);
            if (_context.SaveChanges() > 0)
                return _context.Atividades.FirstOrDefault(ativ => ativ.Id == atividade.Id);
            else
                throw new Exception("Não inseriu");*/

            //return Atividades.Append<Atividade>(Atividade);


            try{
                var atividade = await _atividadeService.AdicionarAtividade(model);
                if (atividade == null) return NoContent();

                return Ok(atividade);

            }catch(System.Exception ex){
                
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar adicionar Atividade. Erro: { ex.Message }" );
            }

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Atividade model){
            /*if (atividade.Id != id)
                throw new Exception("Erro ao atualizar atividade");
            
            _context.Update(atividade);
            if (_context.SaveChanges() > 0)
                return _context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            else
                return new Atividade();*/

            //return atividade;

            try{

                if (model.Id != id)
                    this.StatusCode(StatusCodes.Status409Conflict, "Você esta tetando atualizar a atividade errada");

                var atividade = await _atividadeService.AtualizarAtividade(model);
                if (atividade == null) return NoContent();

                return Ok(atividade);

            }catch(System.Exception ex){
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar Atividade com id: ${ id }. Erro: { ex.Message }" );
            }

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id){
            /*var atividade = _context.Atividades.FirstOrDefault(ativ => ativ.Id==id);
            if (atividade == null)
                throw new Exception("Erro ao deletar");

            _context.Remove(atividade);

            return _context.SaveChanges() > 0;   */ 
            //return "deletando";

            try{

                var atividade = await _atividadeService.PegarAtividadePorIdAsync(id);
                if (atividade == null) 
                    this.StatusCode(StatusCodes.Status409Conflict, "Você esta tetando deletar a atividade que não existe");

                if (await _atividadeService.DeletarAtividade(id)){
                    return Ok(new { message = "Deletado" });
                }else{
                    return BadRequest("Erro ao deletar registro");
                }

                

            }catch(System.Exception ex){
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar deletar Atividade com id: ${ id }. Erro: { ex.Message }" );
            }

        }
    }
}