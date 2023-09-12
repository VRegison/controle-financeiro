import toast from 'react-hot-toast';

export function validaInput(input, msg) {
   if (!input) {
      toast.error(`Preencha o campo ${msg} `);
      return false;
   }

   return true;
}