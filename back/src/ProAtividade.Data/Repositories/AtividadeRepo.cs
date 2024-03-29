using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProAtividade.Data.Context;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
    //GeralRepo é herança e implementando o IAtividadeRepo
    public class AtividadeRepo : GeralRepo, IAtividadeRepo
    {
        private readonly DataContext _context;

        //base é para enviar o contexto para o contrutor da minha herança, no caso GeralRepo
        public AtividadeRepo(DataContext context) : base(context)
        {
            _context = context;
        }
        
        public async Task<Atividade> PegaPorIdAsync(int id)
        {
            IQueryable<Atividade> query = _context.Atividades;
            //quer dizer que não vai travar o banco por essa requisição 
            query = query.AsNoTracking()
                        .OrderBy(ativ => ativ.Id)
                        .Where(a => a.Id == id);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Atividade> PegaPorTituloAsync(string titulo)
        {
            IQueryable<Atividade> query = _context.Atividades;
            query = query.AsNoTracking()
                        .OrderBy(ativ => ativ.Id);

            //a => a.Titulo == titulo pode ser no Where igual a função acima, são duas opções
            return await query.FirstOrDefaultAsync(a => a.Titulo == titulo);
        }

        public async Task<Atividade[]> PegaTodasAsync()
        {
            IQueryable<Atividade> query = _context.Atividades;
            query = query.AsNoTracking()
                        .OrderBy(ativ => ativ.Id);

            return await query.ToArrayAsync();
        }

    }
}