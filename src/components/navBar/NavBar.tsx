import { Basket } from "@phosphor-icons/react"
import { Link } from "react-router-dom"




function Navbar() {




    return (
        <>
            <div className='w-full  bg-[#1d1f6d] text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Farmazen.com</div>
                    <div className='flex gap-4'>
                    <Link to="/home" className='hover:underline'>Home</Link>
                        <Link to="/categorias" className='hover:underline'>Categorias</Link>
                        <Link to="/cadastrar-categoria" className='hover:underline'>Cadastrar-categoria</Link>
                        <div className='underline-basket'>
                            <Basket size={25} weight='bold' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
