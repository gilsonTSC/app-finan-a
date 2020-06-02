import React from 'react';

import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'

import {withRouter} from 'react-router-dom'
import * as messagens from '../../components/toastr'

import LancamentoService from '../../app/service/lancamentoService'
import LocalStorageService from '../../app/service/localStorageService'

class CadastroLancamentos extends React.Component {

    state = {
        id: null,
        descricao: '',
        valor: '',
        mes: '',
        ano: '',
        tipo: '',
        status: '',
        usuario: ''
    }

    constructor(){
        super();
        this.service = new LancamentoService();
    }

    submit = () => {
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')
        const {descricao, valor, mes, ano, tipo} = this.state;
        const lancamento = {descricao, valor, mes, ano, tipo, usuario: usuarioLogado.id};

        this.service.salvar(lancamento)
            .then(response => {
                this.props.history.push('/consulta-lancamentos')
                messagens.mensagemSucesso('Lançamento cadastrado com sucesso!')
            }).catch(error => {
                messagens.mensagemErro(error.response.data)
            })
    }

    cancelar = () => {
        this.props.history.push('/consulta-lancamentos')
    }

    hendleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name] : value})
    }

    render(){
        const tipos = this.service.obterListaTipos();
        const meses = this.service.obterListaMeses();

        return (
            <Card title="Cadastro de Lançamento">
                 <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *">
                            <input id="inputDescricao" 
                                   type="text"
                                   name="descricao"
                                   value={this.state.descricao}
                                   onChange={this.hendleChange}
                                   className="form-control"/>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputAno" label="Ano: *">
                            <input id="inputAno" 
                                   type="text"
                                   name="ano"
                                   value={this.state.ano}
                                   onChange={this.hendleChange}
                                   className="form-control"/>
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup id="inputMes" label="Mês: *">
                            <SelectMenu id="inputMes"
                                        name="mes"
                                        value={this.state.mes}
                                        onChange={this.hendleChange}
                                        className="form-control" 
                                        lista={meses}/>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <FormGroup id="inputValor" label="Valaor: *">
                            <input id="inputValor" 
                                   type="text"
                                   name="valor"
                                   value={this.state.valor}
                                   onChange={this.hendleChange}
                                   className="form-control"/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputTipo" label="Tipo: *">
                            <SelectMenu id="inputTipo"
                                        name="tipo"
                                        value={this.state.tipo}
                                        onChange={this.hendleChange}
                                        className="form-control" 
                                        lista={tipos}/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputStatus" label="Status: ">
                            <input id="inputStatus" 
                                   type="text"
                                   name="status"
                                   value={this.state.status}
                                   className="form-control" 
                                   disabled/>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button onClick={this.submit} type="button" className="btn btn-success">Salvar</button>
                        <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </Card>
        )
    }

}

export default withRouter(CadastroLancamentos)