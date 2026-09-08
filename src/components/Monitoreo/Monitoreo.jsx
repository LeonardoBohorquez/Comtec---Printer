import Header from './Header/Header'
import Main from './Main/Main'
import Menu from './Menu/Menu'



function Monitoreo() {
    return (
        <>
            <div className="max-w-[1980px] mx-auto min-h-screen grid grid-cols-[250px_1fr] gap-0.5 p-1">
                <Menu />
                
                <div className="flex flex-col">
                    <Header />
                    <Main />
                </div>
            </div>
        </>
    )
}

export default Monitoreo