import { Link } from "react-router-dom";
import type Departamento from "../../../models/Departamento";

interface CardDepartamentoProps {
    departamento: Departamento
}

function CardDepartamentos({ departamento }: Readonly<CardDepartamentoProps>) {
    return (
        <div
            className="
                bg-linear-to-bl from-grey-300 via-indigo-200 to-indigo-300 rounded-lg border-gray-300 shadow-md 
                flex flex-col not-[]:overflow-hidden 
                p-4 gap-3
                hover:shadow-lg transition-all duration-300
            "
        >
            <header className='py-2 px-6 text-indigo-700 font-bold text-2xl'>Departamento</header>
            <div className="flex flex-col gap-2 text-indigo-900">
                <p className='p-8 text-3xl bg-linear-to-bl from-grey-300 via-indigo-200 to-indigo-300 h-full'>{departamento.nome}</p>
                <p className='p-8 text-3xl bg-linear-to-bl from-grey-300 via-indigo-200 to-indigo-300 h-full'>{departamento.descricao}</p>
                <div className="flex">
                    <Link to={`/editardepartamento/${departamento.id}`}
                        className=' w-1/2 text-white bg-indigo-500 hover:bg-indigo-700 
                        flex items-center justify-center py-2 
                        rounded-lg font-medium transition'>
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletardepartamento/${departamento.id}`}
                        className=' w-1/2 text-white bg-fuchsia-500 hover:bg-fuchsia-700 
                        flex items-center justify-center py-2 
                        rounded-lg font-medium transition'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardDepartamentos;