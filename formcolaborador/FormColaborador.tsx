import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { atualizar, cadastrar, listar } from "../../../services/Service";

import type Departamento from "../../../models/Departamento";
import type Colaborador from "../../../models/Colaborador";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormColaborador({ close }: { close?: () => void }) {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [departamentos, setDepartamentos] = useState<Departamento[]>([]);

    const [departamento, setDepartamento] = useState<Departamento>({
        id: 0,
        nome: "",
        descricao: ""
    });

    const [colaborador, setColaborador] = useState<Colaborador>({
        id: 0,
        nome: "",
        dataNascimento: "",
        valorHora: 0,
        horasTrabalhadas: 0,
        bonus: 0,
        descontos: 0,
        departamento: { id: 0 }
    });

    const { id } = useParams<{ id: string }>();


    useEffect(() => {
        buscarDepartamentos();
    }, []);


    useEffect(() => {
        if (id) {
            buscarColaboradorPorId(id);
        }
    }, [id]);


    async function buscarColaboradorPorId(id: string) {
        try {
            await listar(`/colaboradores/${id}`, setColaborador);
        } catch (error: any) {
            ToastAlerta("Erro ao Buscar Colaborador", "erro");
            console.error(error);
        }
    }


    async function buscarDepartamentoPorId(id: number) {
        try {
            await listar(`/departamentos/${id}`, setDepartamento);
        } catch (error: any) {
            ToastAlerta("Erro ao Buscar Departamento", "erro");
            console.error(error);
        }
    }


    async function buscarDepartamentos() {
        try {
            await listar(`/departamentos`, setDepartamentos);
        } catch (error: any) {
            ToastAlerta("Erro ao Buscar Departamentos", "erro");
            console.error(error);
        }
    }



    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        const { type, value, name } = e.target;

        let valor: any = value;

        if (type === "number") {
            valor = Number(value);
        }

        setColaborador((prev) => ({
            ...prev,
            [name]: valor,
            departamento: { id: departamento.id }
        }));
    }


    function retornar() {
        if (close) {
            close();
        } else {
            navigate("/colaboradores");
        }
    }


    async function gerarNovoColaborador(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const colaboradorParaEnviar = {
            ...colaborador,
            id: id ? Number(id) : 0,
            departamento: { id: departamento.id }
        };

        console.log("ENVIANDO PARA API:", JSON.stringify(colaboradorParaEnviar, null, 2));

        if (id !== undefined) {

            try {
                await atualizar(`/colaboradores`, colaboradorParaEnviar, setColaborador);
                ToastAlerta("Colaborador atualizado com sucesso", "sucesso");
            } catch (error: any) {
                ToastAlerta("Erro ao atualizar o Colaborador!", "erro");
                console.error(error);
            }
        } else {
            try {
                await cadastrar(`/colaboradores`, colaboradorParaEnviar, setColaborador);
                ToastAlerta("Colaborador cadastrado com sucesso", "sucesso");
            } catch (error: any) {
                ToastAlerta("Erro ao cadastrar o Colaborador!", "erro");
                console.error(error);
            }
        }

        setIsLoading(false);
        retornar();
    }


    return (
        <div className="container flex flex-col items-center justify-center mx-auto my-4 md:my-0 px-4 py-12 ">

            <h1 className="text-3xl md:text-4xl text-center mb-6 text-indigo-700">
                {id !== undefined ? "Editar Colaborador" : "Cadastrar Colaborador"}
            </h1>

            <form className="w-full max-w-lg flex flex-col gap-4 text-indigo-700" onSubmit={gerarNovoColaborador}>

                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="font-medium">Nome do Colaborador</label>
                    <input
                        value={colaborador.nome || ""}
                        onChange={atualizarEstado}
                        type="text"
                        placeholder="Insira o nome"
                        name="nome"
                        id="nome"
                        required
                        className="border-2 border-indigo-900 rounded p-2 bg-indigo-100 text-base"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="dataNascimento">Data de nascimento</label>
                    <input
                        type="text"
                        name="dataNascimento"
                        placeholder="AAAA-MM-DD"
                        className="border-2 border-indigo-900 bg-indigo-100 rounded p-2"
                        value={colaborador.dataNascimento || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="valorHora">Valor da hora</label>
                    <input
                        type="number"
                        name="valorHora"
                        placeholder="Valor por hora"
                        className="border-2 border-indigo-900 bg-indigo-100  rounded p-2"
                        value={colaborador.valorHora || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="horasTrabalhadas">Horas trabalhadas</label>
                    <input
                        type="number"
                        name="horasTrabalhadas"
                        placeholder="Quantidade de horas"
                        className="border-2 border-indigo-900 bg-indigo-100  rounded p-2"
                        value={colaborador.horasTrabalhadas || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="bonus">Bônus</label>
                    <input
                        type="number"
                        name="bonus"
                        placeholder="Valor do bônus"
                        className="border-2 border-indigo-900 bg-indigo-100  rounded p-2"
                        value={colaborador.bonus || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descontos">Descontos</label>
                    <input
                        type="number"
                        name="descontos"
                        placeholder="Valor dos descontos"
                        className="border-2 border-indigo-900 bg-indigo-100 rounded p-2"
                        value={colaborador.descontos || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="foto" className="font-medium">URL da Foto</label>
                    <input
                        type="text"
                        name="foto"
                        id="foto"
                        placeholder="https://exemplo.com/imagem.jpg"
                        value={colaborador.foto || ""}
                        onChange={atualizarEstado}
                        className="border-2 border-indigo-900 rounded p-2 bg-indigo-100  text-base"
                    />
                </div>

                {colaborador.foto && (
                    <div className="flex justify-center mt-2">
                        <img
                            src={colaborador.foto}
                            alt="Foto do colaborador"
                            className="w-28 h-28 rounded-full object-cover border"
                        />
                    </div>
                )}


                <div className="flex flex-col gap-2">
                    <label htmlFor="departamento">Departamento</label>

                    <select
                        name="departamento"
                        id="departamento"
                        className="border p-2 border-indigo-900 bg-indigo-100  rounded"
                        value={departamento.id !== 0 ? departamento.id : ""}
                        onChange={(e) => buscarDepartamentoPorId(Number(e.currentTarget.value))}
                    >
                        <option value="" disabled>Selecione um Departamento</option>

                        {departamentos.map((dep) => (
                            <option key={dep.id} value={dep.id}>
                                {dep.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    className="rounded text-slate-100 bg-indigo-500  hover:bg-indigo-800 w-full py-2 mt-2 flex justify-center items-center text-base"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading
                        ? <ClipLoader color="#ffffff" size={24} />
                        : <span>{id ? "Atualizar" : "Cadastrar"}</span>}
                </button>
            </form>
        </div>
    );
}

export default FormColaborador;
