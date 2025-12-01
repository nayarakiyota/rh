export function EmBreve() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-fuchsia-600 text-white rounded-3xl shadow-2xl p-10 flex flex-col sm:flex-row items-center gap-10">


                {/* Texto à esquerda */}
                <div className="flex flex-col gap-6 w-full sm:w-2/3">
                    <h2 className="text-4xl font-extrabold drop-shadow-md text-indigo-200">
                        Em Breve
                    </h2>


                    <p className="text-lg leading-relaxed">
                        Entre as próximas evoluções do InovaRH:
                    </p>


                    <ul className="list-disc pl-6 text-white text-base leading-relaxed flex flex-col gap-3">
                        <li>
                            Criação de um banco de currículos interno, que permitirá maior agilidade na triagem
                            de candidatos e aproveitamento de talentos já mapeados.
                        </li>
                        <li>
                            Mapeamento inteligente de perfis e vagas, conectando competências às necessidades
                            reais da empresa com mais precisão.
                        </li>
                        <li>
                            Integração aos demais projetos do InovaHer.
                        </li>
                    </ul>
                </div>


                {/* Imagem à direita */}
                <div className="w-full sm:w-1/3 flex justify-center">
                    <img
                        src="https://ik.imagekit.io/wvjuanedn/Projeto%20RH/Gemini_Generated_Image_yzw9dcyzw9dcyzw9.png?updatedAt=1762459847984"
                        alt="Imagem Em Breve"
                        className="w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-indigo-300"
                    />
                </div>
            </div>
        </section>
    );
}