import { useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import CardCategoria from "../cardCategoria/CardCategoria";
import { buscar } from "../../../service/Service";




function ListarCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias);
        } catch (error: any) {
            alert("Erro ao listar categorias");
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    {categorias.length === 0 &&
                        <span className="text-3xl text-center my-8">
                            Nenhuma categoria foi encontrada
                        </span>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias;

