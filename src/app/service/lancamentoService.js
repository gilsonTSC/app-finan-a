import ApiService from '../apiservice'

export default class LancamentoService extends ApiService {

    constructor(){
        super('/api/lancamentos');
    }

    obterListaMeses(){
        return [
            {label: 'Selecione...', value: ''},
            {label: 'Janeiro', value: 1},
            {label: 'Fevereiro', value: 2},
            {label: 'Março', value: 3},
            {label: 'Abril', value: 4},
            {label: 'Maio', value: 5},
            {label: 'Junho', value: 6},
            {label: 'Julho', value: 7},
            {label: 'Agosto', value: 8},
            {label: 'Setembro', value: 9},
            {label: 'Outubro', value: 10},
            {label: 'Novembro', value: 11},
            {label: 'Dezembro', value: 12}
        ]
    }

    obterListaTipos(){
        return [
            {label: 'Selecione...', value: ''},
            {label: 'Dispesa', value: 'DISPESA'},
            {label: 'Receita', value: 'RECEITA'}
        ]
    }

    salvar(Lancamento){
        return this.post('/', Lancamento);
    }

    buscar(LancamentoFiltro) {
        let parans = `?ano=${LancamentoFiltro.ano}`

        if(LancamentoFiltro.mes){
            parans = `${parans}&mes=${LancamentoFiltro.mes}`
        }
        if(LancamentoFiltro.tipo){
            parans = `${parans}&tipo=${LancamentoFiltro.tipo}`
        }
        if(LancamentoFiltro.status){
            parans = `${parans}&status=${LancamentoFiltro.status}`
        }
        if(LancamentoFiltro.usuario){
            parans = `${parans}&usuario=${LancamentoFiltro.usuario}`
        }

        if(LancamentoFiltro.descricao){
            parans = `${parans}&descricao=${LancamentoFiltro.descricao}`
        }

        return this.get(parans);
    }

    deletar(id){
        return this.delete(`/${id}`);
    }

}