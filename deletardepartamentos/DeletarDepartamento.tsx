import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import type Departamento from "../../../models/Departamento"
import { deletar, listar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarDepartamento() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [departamento, setDepartamento] = useState<Departamento>({} as Departamento)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/departamentos/${id}`, setDepartamento)
        } catch (error: any) {
            ToastAlerta('Departamento não encontrado!', 'erro')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarDepartamento() {
        setIsLoading(true)

        try {
            await deletar(`/departamentos/${id}`)

            ToastAlerta('Departamento apagado com sucesso', 'sucesso')

        } catch (error) {
            ToastAlerta('Erro ao apagar o departamento', 'erro')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/departamentos")
    }

    return (
        <div className='container w-full max-w-md px-4 pt-4 mx-auto md:pt-6'>
            <h1 className='text-3xl md:text-4xl text-center py-4 text-fuchsia-700'>Deletar Departamento</h1>
            <p className='text-center font-semibold mb-4 text-base md:text-lg text-fuchsia-700'>
                Você tem certeza de que deseja apagar o departamento a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-indigo-100'>
                <header
                    className='py-2 px-4 md:px-6 bg-indigo-700 text-white font-bold text-lg md:text-2xl'>
                    Departamento
                </header>
                <p className='h-full p-4 text-xl md:p-8 md:text-3xl'>{departamento.nome}</p>
                <p className='h-full p-4 text-xl md:p-8 md:text-3xl'>{departamento.descricao}</p>
                <div className="flex flex-row">
                    <button
                        className='text-slate-100  bg-fuchsia-500 hover:bg-fuchsia-700 w-full py-2 text-base md:text-lg'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-indigo-500 hover:bg-indigo-700 flex items-center justify-center text-base md:text-lg'
                        onClick={deletarDepartamento}
                    >
                        {isLoading ?
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            />
                            :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarDepartamento