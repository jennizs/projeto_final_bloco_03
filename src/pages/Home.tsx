

function Home() {

    return (
        <>
            <div className=" bg-[#fca5a5] flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4">
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
                    <div className="flex justify-end" >
                        <img
                            src="https://cdn.discordapp.com/attachments/1213109662677737511/1245346037259042838/a0zcXqK.png?ex=66586a60&is=665718e0&hm=22b621d47d6e0409eecdaaf8e589c6ed4f3748cb3f2a21216d196f0db4cb447b&"
                            alt=""
                            className="w-1/1" />

                    </div>
                </div>
            </div>
        </>
    );
}


export default Home;
