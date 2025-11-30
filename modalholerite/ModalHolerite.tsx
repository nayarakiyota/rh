import Popup from "reactjs-popup";

interface ModalHoleriteProps {
    colaborador: any;
}

function ModalHolerite({ colaborador }: ModalHoleriteProps) {

    const salarioBruto = colaborador.valorHora * colaborador.horasTrabalhadas;
    const salarioLiquido = salarioBruto + colaborador.bonus - colaborador.descontos;

    const formatarValor = (valor: number) =>
        valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    const formatarData = (data: string) =>
        new Date(data).toLocaleDateString("pt-BR");

    return (
        <Popup
            trigger={
                <button className="mt-3 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700">
                    Gerar Holerite
                </button>
            }
            modal
            contentStyle={{
                borderRadius: "1rem",
                padding: "2rem",
                width: "90%",
                maxWidth: "500px"
            }}
        >
            <div>
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-800">Holerite</h2>

                <div className="flex flex-col gap-2 text-lg text-indigo-800">
                    <p><strong>Nome:</strong> {colaborador.nome}</p>

                    <p>
                        <strong>Data de Nascimento:</strong> {
                            formatarData(colaborador.dataNascimento)
                        }
                    </p>

                    <p>
                        <strong>Valor por Hora:</strong> {
                            formatarValor(colaborador.valorHora)
                        }
                    </p>

                    <p><strong>Horas Trabalhadas:</strong> {colaborador.horasTrabalhadas}</p>

                    <hr className="my-2" />

                    <p>
                        <strong>Salário Bruto:</strong> {
                            formatarValor(salarioBruto)
                        }
                    </p>

                    <p>
                        <strong>Bônus:</strong> {
                            formatarValor(colaborador.bonus)
                        }
                    </p>

                    <p>
                        <strong>Descontos:</strong> {
                            formatarValor(colaborador.descontos)
                        }
                    </p>

                    <hr className="my-2" />

                    <p className="text-xl font-bold">
                        <strong>Salário Líquido:</strong> {
                            formatarValor(salarioLiquido)
                        }
                    </p>
                </div>
            </div>
        </Popup>
    );
}

export default ModalHolerite;
