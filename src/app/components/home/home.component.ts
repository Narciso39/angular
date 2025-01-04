import { Component, inject } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  name = "luis felipe";
  showTitle = true;
  renderLoop = ["algo", "algo2", "algo3"];
  // meuBooleano = false;

  // atualizarBooleano(valor: boolean) {
  //   this.meuBooleano = valor;
  // }

  button() {
    this.enviaFormularioService.enviandoTextoDeAtualizacao();
  }
  eventClick(event: any) {
    this.enviaFormularioService.enviaInformacaoParaOBackend(event);
  }
}
