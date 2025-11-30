import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deletar, listar } from "../../../services/Service"
import type Colaborador from "../../../models/Colaborador"
import { ClipLoader } from "react-spinners"
import { ToastAlerta } from "../../../utils/ToastAlerta"


function DeletarColaborador() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [colaborador, setColaborador] = useState<Colaborador>({} as Colaborador)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/colaboradores/${id}`, setColaborador)
        } catch (error: any) {
            ToastAlerta('Colaborador não encontrado!', 'erro')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarColaborador() {
        setIsLoading(true)

        try {
            await deletar(`/colaboradores/${id}`)

            ToastAlerta('Colaborador apagado!', 'sucesso')

        } catch (error) {
            ToastAlerta('Erro ao apagar o Colaborador', 'erro')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/colaboradores")
    }

    return (
        <div className='container w-full max-w-md mx-auto px-4 pt-20 md:pt-6'>
            <h1 className='text-3xl md:text-4xl text-center py-4 text-fuchsia-700'>Deletar Colaborador</h1>
            <p className='text-center font-semibold mb-4 text-base md:text-lg text-fuchsia-700'>
                Você tem certeza de que deseja apagar o colaborador a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-indigo-100'>
                <header
                    className='py-2 px-4 md:px-6 bg-indigo-700 text-white font-bold text-lg md:text-2xl'>
                    Colaborador
                </header>

                <p><strong>Nome:</strong> {colaborador.nome}</p>
                <p><strong>Data Nascimento:</strong> {colaborador.dataNascimento}</p>
                <p><strong>Valor Hora:</strong> R$ {colaborador.valorHora}</p>
                <p><strong>Horas Trabalhadas:</strong> {colaborador.horasTrabalhadas}</p>
                <p><strong>Bônus:</strong> R$ {colaborador.bonus}</p>
                <p><strong>Descontos:</strong> R$ {colaborador.descontos}</p>
                <p><strong>Departamento:</strong> {colaborador.departamento?.nome}</p>
                <div className="flex flex-row">
                    <button
                        className='text-slate-100  bg-fuchsia-500 hover:bg-fuchsia-700 w-full py-2 text-base md:text-lg'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-indigo-500 hover:bg-indigo-700 flex items-center justify-center text-base md:text-lg'
                        onClick={deletarColaborador}
                    >
                        {isLoading ?
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>

        </div>
    )
}
export default DeletarColaborador