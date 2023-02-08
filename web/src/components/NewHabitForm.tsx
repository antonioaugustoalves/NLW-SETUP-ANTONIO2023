import { Check } from "phosphor-react";

export function NewHabitForm() {
    return (
        <form className="w-full flex flex-col mt-6">
            <label htmlFor="Title" className="font-semibold leading-tight">
                Qual o seu comprometimento
            </label>
            <input
                type="text" id="title"
                placeholder="ex: Exercicios, dormir bem, leitura, etc..."
                autoFocus
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder: text-zinc-400"
            />
            <label
                htmlFor=""
                className="font-semibold leading-tight mt-4">
                Qual a recorrência ?
            </label>
            <button
                type="submit"
                className="mt-6 rounded-lg p-4 flex place-items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-400 border-green-900"
            >
                <Check size={20} weight="bold" />
                Confirmar 
            </button>
        </form>
    )
}

// video 03: 1h 03m 00s