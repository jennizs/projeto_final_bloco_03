import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { buscar, deletar } from "../../../service/Service";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../model/Categoria";



function DeletarCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            if (error.toString().includes("403")) {
                navigate("/");
            }
        }
    }

    async function deletarCategoria(id: string) {
        setIsLoading(true);

        try {
            await deletar(`/categorias/${id}`);

            alert("Categoria apagada com sucesso");
        } catch (error: any) {
            if (error.toString().includes("403")) {
                navigate("/");
            } else {
                alert("Erro ao deletar a categoria.");
            }
        }

        setIsLoading(false);
        navigate("/");
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    if (!id) return;

    return (
        <div className="container w-full max-w-[600px] mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar categoria</h1>
            <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-blue-600 text-white font-bold text-2xl">Categoria</header>
                <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>
                <div className="flex">
                    <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2" onClick={() => navigate("/categorias")}>
                        Não
                    </button>
                    <button
                        className="w-full text-slate-100 bg-blue-400 
                                     hover:bg-blue-600 flex items-center justify-center"
                        onClick={() => deletarCategoria(id)}
                    >
                        {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Sim</span>}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default DeletarCategoria;