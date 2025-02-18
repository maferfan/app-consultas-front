import { z } from "zod"

export const loginFormSchema = z.object({
    email: z.string().nonempty('Email requerido.'),
    senha: z.string().nonempty('Senha necessária.')
})

export type LoginSchema = z.infer<typeof loginFormSchema>