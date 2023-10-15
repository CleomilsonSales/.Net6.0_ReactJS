//a conversão de enum em texto foi definido no program.cs
export enum Prioridade{
    NaoDefinido = 'NaoDefinido',
    Baixa = 'Baixa',
    Normal = 'Normal',
    Alta = 'Alta'
}

export interface IAtividade{
    id: number;
    prioridade: string;
    titulo: string;
    descricao: string;
}