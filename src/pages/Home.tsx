function Home() {
    return (
        <>
         <div className="flex-grow min-h-[90vh] h h-full flex bg-[#70dfd5]" >
                <div className="container mx-auto grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center justify-center gap-4 py-4">
                        <h2 className="text-5xl font-bold">Seja Bem Vinde a FarmaZen!</h2>
                        <p className="text-lg">Os Melhores medicamentos e cosméticos você encontra aqui!</p>
                        <div className="flex justify-around gap-4">
                            <button className="
                                rounded
                                text-white
                                border-white
                                border-solid
                                border-2
                                py-2
                                px-4
                                hover:bg-white
                                hover:text-indigo-900
                                ">
                                Categorias
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <img
                            src="https://cdn.discordapp.com/attachments/1213109662677737511/1245346037493661777/HheNdw7.png?ex=66586a60&is=665718e0&hm=7641a1e64f7c1ec77ad1dc6a99ab952844b7bcead4fd781e6a636fcd7299a8b4&"
                            alt=""
                            className="h-2/2"
                        />
                    </div>
                </div>
            </div>


        </>
    );
}

export default Home;
