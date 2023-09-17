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
        //? é para dizer que o campo aceita nulo
        public DateTime? DataConclusao { get; set; }
        public Prioridade Prioridade { get; set; }

        //public Atividade() => DataCriacao = DateTime.Now;
        public Atividade(){
            DataCriacao = DateTime.Now;
            DataConclusao = null;
            
        }

        //o :this() quer dizer que se passar parametros o construtor de baixo ira chamar o construtor sem parametros (principal), para carregar a data de hoje
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
                //não pode converter string de um campo nulo, por isso usamos o ? para somente converter se não for nulo
                throw new Exception($"Atividade ja concluida em: {DataConclusao?.ToString("dd/MM/yyyy hh:mm")}");
        }
        
    }
}