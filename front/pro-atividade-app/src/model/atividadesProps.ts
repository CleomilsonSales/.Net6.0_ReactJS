import { IAtividade } from "./IAtividade";

//lembrando que essa interface é para atender a typagem do typescript
export interface AtividadeListaProps {
    atividades: IAtividade[];
    pegarAtividade: (id: number) => void; //void pq não retorna valor
    handleConfirmModal: (id: number) => void;
}

export interface AtividadeItemProps {
    ativ: IAtividade;
    pegarAtividade: (id: number) => void; //void pq não retorna valor
    handleConfirmModal: (id: number) => void;
}

export interface AtividadeFormProps {
    ativSelecionada: IAtividade;
    atualizarAtividade: (atividade: IAtividade) => void;
    addAtividade: (atividade: IAtividade) => void;
    cancelarAtividade: () => void;
}