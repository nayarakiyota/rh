import { Link } from 'react-router-dom'
import type Colaborador from '../../../models/Colaborador';
import ModalHolerite from "../modalholerite/ModalHolerite";

interface CardColaboradorProps {
    colaborador: Colaborador
}

function CardColaboradores({ colaborador }: Readonly<CardColaboradorProps>) {

    const formatarValor = (valor: number) =>
        valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    const formatarData = (data: string) =>
        new Date(data).toLocaleDateString("pt-BR");

    return (
        <div
            className="
                bg-linear-to-bl from-grey-300 via-indigo-200 to-indigo-300 rounded-lg border-gray-300 shadow-md 
                flex flex-col not-[]:overflow-hidden 
                p-4 gap-3
                hover:shadow-lg transition-all duration-300
            "
        >

            {/* FOTO (opcional) */}
            {/* <div className="flex flex-col items-center">
                <img
                    src={colaborador.foto}
                    className="w-24 h-24 rounded-full object-cover border-2 border-indigo-400 shadow"
                />
            </div> */}
            <header className='py-2 px-6 text-indigo-700 font-bold text-2xl'>Colaborador</header>
            <div className="flex flex-col gap-2 text-black-700">
                <p className="text-sm text-center uppercase">
                    <span className="font-bold text-indigo-700">Nome: </span>{colaborador.nome}
                </p>

                <p className="text-sm text-center uppercase">
                    <span className="font-bold text-indigo-700">Data de Nascimento: </span>
                    {formatarData(colaborador.dataNascimento)}
                </p>

                <p className="text-sm text-center uppercase">
                    <span className="font-bold text-indigo-700">Valor Hora: </span>
                    {formatarValor(colaborador.valorHora)}
                </p>

                <p className="text-sm text-center uppercase">
                    <span className="font-bold text-indigo-700">Horas Trabalhadas: </span>
                    {colaborador.horasTrabalhadas}
                </p>

                <p className="text-sm text-center uppercase">
                    <span className="font-bold text-indigo-700">Bônus: </span>
                    {formatarValor(colaborador.bonus)}
                </p>

                <p className="text-sm text-center uppercase">
                    <span className="font-bold text-indigo-700">Descontos: </span>
                    {formatarValor(colaborador.descontos)}
                </p>

                <p className="text-sm italic text-center">
                    <span className="font-bold text-fuchsia-700">Departamento: </span>
                    {colaborador.departamento?.nome}
                </p>

                {/* BOTÃO DO HOLERITE */}
                <div className="flex justify-center mt-2">
                    <ModalHolerite colaborador={colaborador} />
                </div>
            </div>

            {/* BOTÕES */}
            <div className="flex gap-2 mt-3">

                <Link
                    to={`/editarcolaborador/${colaborador.id}`}
                    className="
                        w-1/2 text-white bg-indigo-500 hover:bg-indigo-700 
                        flex items-center justify-center py-2 
                        rounded-lg font-medium transition
                    "
                >
                    Editar
                </Link>

                <Link
                    to={`/deletarcolaborador/${colaborador.id}`}
                    className="
                        w-1/2 text-white bg-fuchsia-500 hover:bg-fuchsia-700 
                        flex items-center justify-center py-2 
                        rounded-lg font-medium transition
                    "
                >
                    Deletar
                </Link>
            </div>

        </div>
    )
}

export default CardColaboradores
