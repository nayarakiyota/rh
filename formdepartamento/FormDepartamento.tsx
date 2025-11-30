import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Departamento from "../../../models/Departamento";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormDepartamento() {
  const navigate = useNavigate();


  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [departamento, setDepartamento] = useState<Departamento>({} as Departamento);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/departamentos/${id}`, setDepartamento)
    } catch (error: any) {
      ToastAlerta('Departamento não encontrado!', 'erro')
      console.error(error)
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setDepartamento({
      ...departamento,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovoDepartamento(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/departamentos`, departamento, setDepartamento)

        ToastAlerta('Departamento atualizado com sucesso', 'sucesso')

      } catch (error: any) {
        ToastAlerta('Erro ao atualizar o Departamento', 'erro')
        console.error(error)
      }

    } else {
      try {
        await cadastrar(`/departamentos`, departamento, setDepartamento)

        ToastAlerta('Departamento cadastrado com sucesso', 'sucesso')

      } catch (error: any) {
        ToastAlerta('Erro ao cadastrar o Departamento', 'erro')
        console.error(error)
      }
    }

    setIsLoading(false)
    retornar();

  }

  function retornar() {
    navigate("/departamentos")
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-4 md:my-0 px-4 py-12">
      <h1 className="text-3xl md:text-4xl text-center mb-6 text-indigo-700">
        {id === undefined ? 'Cadastrar Departamento' : 'Editar Departamento'}
      </h1>

      <form className="w-full max-w-lg flex flex-col gap-4 text-indigo-700"
        onSubmit={gerarNovoDepartamento}
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="tipo">Departamento</label>
          <input
            type="text"
            placeholder="Nome do Departamento"
            id='nome'
            name='nome'
            className="border-2 border-indigo-900 rounded p-2 bg-indigo-100 text-base"
            required
            value={departamento.nome || ""}
            onChange={(e) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="tipo">Descrição</label>
          <input
            type="text"
            placeholder="Descrição"
            id='descricao'
            name='descricao'
            className="border-2 border-indigo-900 rounded p-2 bg-indigo-100 text-base"
            required
            value={departamento.descricao || ""}
            onChange={(e) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-500  hover:bg-indigo-800 w-full py-2 mt-2 flex justify-center items-center text-base"
          type="submit"
        >
          {isLoading ?
            <ClipLoader
              color="#ffffff"
              size={24}
            />
            :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormDepartamento;