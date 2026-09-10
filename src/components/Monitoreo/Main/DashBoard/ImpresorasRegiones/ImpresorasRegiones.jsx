function ImpresorasRegiones() {

    const parqueDT = JSON.parse(sessionStorage.getItem('parqueDT'));
    const BN = parqueDT.parqueDT.reduce((total, contador) =>{
       total["CONTADOR BN"] += contador["CONTADOR BN"]
       total["CONTADOR COLOR"] += contador["CONTADOR COLOR"]

       return total

    }, {
        BN: 0,
        COLOR: 0,
    })

    console.log(BN)

    return (
        <div className="bg-white rounded p-4">  
            <h2 className="text-2xl text-[#16305C] font-bold mb-4">Contadores de impresion</h2>
        </div>
    );
}

export default ImpresorasRegiones;