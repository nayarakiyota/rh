
export default function InovaHerAbout() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* --- Seção Sobre a InovaHer --- */}
            <div className="bg-indigo-700 text-white rounded-3xl shadow-xl p-10 flex flex-col items-center sm:flex-row gap-10">
                {/* Logo maior à esquerda */}
                <div className="flex justify-center items-center w-full sm:w-1/3">
                    <img
                        src="https://ik.imagekit.io/wvjuanedn/InovaHer%20-%20%C3%8Dcones/iconeredondo.png?updatedAt=1764261077262"
                        alt="Logo InovaHer"
                        className="w-56 h-56 object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Texto + QRCode */}
                <div className="flex flex-col items-center w-full sm:w-2/3 gap-6 text-center">
                    {/* Texto principal */}
                    <p className="text-center sm:text-left text-lg leading-relaxed max-w-3xl">
                        Uma empresa fictícia criada como parte do Projeto Integrador do Bootcamp da Generation Brasil.
                        Formada por um grupo de mulheres desenvolvedoras, a InovaHer nasceu do desejo de unir
                        tecnologia, inovação e empoderamento feminino em um mesmo propósito.
                    </p>

                    {/* QRCode abaixo do texto */}
                    <div className="flex flex-col items-center justify-center gap-3 mt-2">
                        <img
                            src="https://ik.imagekit.io/wvjuanedn/InovaHer%20-%20%C3%8Dcones/QRCodeInovaher.png?updatedAt=1762459796491"
                            alt="QRCode InovaHer"
                            className="w-48 h-48 object-contain drop-shadow-xl"
                        />
                        <span className="text-fuchsia-300 font-semibold text-lg">
                            Conheça nossos projetos
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}