import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFormularioService {
  constructor() {}

  enviaInformacaoParaOBackend(event: any) {
    console.log(event);
  }

  enviandoTextoDeAtualizacao() {
    console.log("deu certo");
  }
}
