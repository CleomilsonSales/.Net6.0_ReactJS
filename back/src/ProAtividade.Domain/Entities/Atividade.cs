using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.Domain.Entities
{
    public class Atividade
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataConclusao { get; set; }
        public Prioridade Prioridade { get; set; }

        public Atividade() => DataCriacao = DateTime.Now;

        //o :this() quer dizer que se passar parametros o construtor de baixo ira chamar o construtor sem parametros, para carregar a data de hoje
        public Atividade(int id, string titulo, string descricao) : this()
        {
            Id = id;
            Titulo = titulo;
            Descricao = descricao;
        }

        public void Concluir(){
            if (DataConclusao == null)
                DataConclusao = DateTime.Now;
            else
                throw new Exception($"Atividade ja concluida em: {DataConclusao.ToString("dd/MM/yyyy hh:mm")}");
        }
        
    }
}