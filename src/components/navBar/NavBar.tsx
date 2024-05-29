import { Basket } from "@phosphor-icons/react"




function Navbar() {




    return (
        <>
            <div className='w-full  bg-[#ff5151] text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Farmazen.com</div>
                    <div className='flex gap-4'>
                        <div className='hover:underline'>Categorias</div>
                        <div className='hover:underline'>Nova Categoria</div>
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
