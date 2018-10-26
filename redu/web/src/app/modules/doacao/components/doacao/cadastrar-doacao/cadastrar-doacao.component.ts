import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Doacao } from '../../../../shared/resource/class/doacao.class';
import { FormularioDoadorComponent } from '../../../../shared/components/formulario-doador/formulario-doador.component';
import { DoacaoService } from '../../../../core/services/doacao.service';

@Component({
    selector: 'redu-cadastrar-doacao',
    templateUrl: './cadastrar-doacao.component.html',
    styleUrls: ['./cadastrar-doacao.component.scss']
})
export class CadastrarDoacaoComponent implements OnInit {


    @ViewChild('formularioDoacao')
    public formularioDoador: FormularioDoadorComponent;

    public doacao: Doacao;
    public formulario: FormGroup;

    constructor(private doacaoService: DoacaoService) {

    }

    ngOnInit() {
        if (this.doacaoService.doacao) {
            this.doacao = this.doacaoService.doacao;
        } else {
            this.doacao = new Doacao();
        }
        this.formulario = new FormGroup({
        });
    }

    public utilizarMeuEndereco() {
        console.log('Não implementado');
    }
}