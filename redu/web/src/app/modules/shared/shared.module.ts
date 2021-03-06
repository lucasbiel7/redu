import { UsuarioNaoAutenticadoGuard } from './services/usuario-nao-autenticado.guard';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {
    MatTabsModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatCardModule, MatStepperModule, MatExpansionModule, MatIconModule,
    MatMenuModule, MatTooltipModule, MatRadioModule, MatSnackBarModule, MatTableModule,
    MatPaginatorModule, MatProgressBarModule, MatPaginatorIntl, MatDividerModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import { CadastroColaboradorComponent } from './components/cadastro-colaborador/cadastro-colaborador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CepService } from './services/cep.service';
import { FormularioDoadorComponent } from './components/formulario-doador/formulario-doador.component';
import { HttpClientModule } from '@angular/common/http';
import { CepDirective } from './directive/cep.directive';
import { UsuarioAutenticadoGuard } from './services/usuario-autenticado.guard';
import { ColaboradorService } from './services/colaborador.service';
import { CpfDirective } from './directive/cpf.directive';
import { CnpjDirective } from './directive/cnpj.directive';
import { ConfirmarSenhaDirective } from './directive/confirmar-senha.directive';
import { TraducaoPaginacao } from './resource/intl/traducao-paginacao.class';

@NgModule({
    exports: [
        // Modulos básicos
        CommonModule,
        RouterModule,
        HttpModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule,
        // Modulos de componentes externos
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatIconModule,
        MatTooltipModule,
        MatRadioModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatDividerModule,
        // Componentes internos
        EnderecoComponent,
        MenuComponent,
        RodapeComponent,
        CadastroColaboradorComponent,
        FormularioDoadorComponent,
        MensagemComponent,
    ],
    imports: [
        AngularFontAwesomeModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule,
        // Materials components
        MatTabsModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatStepperModule,
        MatRadioModule,
        MatMenuModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatDividerModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatSnackBarModule
    ],
    declarations: [
        // Componentes generalizados
        MenuComponent,
        RodapeComponent,
        EnderecoComponent,
        CadastroColaboradorComponent,
        FormularioDoadorComponent,
        // Diretivas
        CepDirective,
        MensagemComponent,
        CpfDirective,
        CnpjDirective,
        ConfirmarSenhaDirective
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                CepService,
                ColaboradorService,
                UsuarioAutenticadoGuard,
                UsuarioNaoAutenticadoGuard,
                {
                    provide: MatPaginatorIntl,
                    useClass: TraducaoPaginacao
                }
            ]
        };
    }
}
