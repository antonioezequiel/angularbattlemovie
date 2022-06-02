import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validarSenhasIguais(senha: string, confirmSenha: string) { 
    return (cadastroForm: AbstractControl): ValidationErrors | null  => {
    const senha1 = cadastroForm.get(senha)?.value;
    const confirmaSenha = cadastroForm.get(confirmSenha)?.value;
   // console.log(senha1 != confirmaSenha);
    return senha1 != confirmaSenha
            ? {
                   senhasDiferentesError:{
                       message: "senhas são diferentes"
                   }
            }
            : null;
        };
}