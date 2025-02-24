import { z } from "zod"

export const registerFormSchema = z.object({
    email: z.string().nonempty('Email requerido.'),
    nome: z.string().nonempty('Digite seu nome'),
    sobrenome: z.string().nonempty('Digite seu sobrenome'),
    tipo: z.number(),
    especialidade: z.string().nonempty('Qual especialidade médica você trabalha.'),
    CRM: z.string().nonempty('Digite o CRM caso seja médico.'),
    descricao: z.string().nonempty('Digite uma descrição de suas atividades.'),
    cidade: z.string().nonempty('Digite sua cidade'),
    estado: z.string().nonempty('Digite sua cidade'),
    genero: z.string().nonempty('Preencha o campo.'),
    senha: z.string().nonempty('senha requerida').min(7),
    confirmaSenha: z.string().nonempty('Confirme a senha').min(7),
}).refine((data) => data.senha === data.confirmaSenha, {
    message: 'senhas não se coicidem.',
    path: ['confirmar']
})

export type RegisterSchema = z.infer<typeof registerFormSchema>