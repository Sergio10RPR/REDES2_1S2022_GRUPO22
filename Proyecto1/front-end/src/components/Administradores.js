import React, { useEffect, useState } from "react";
import { APIService } from "../service/APIService";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const Administradores = () => {
    const [listaAdministradores, setListaAdiminstradores] = useState([
        {
            nombre: "Nombre1",
            puesto: "Puesto1",
            descripcion: "Esta es la descripcion para: El usuario numero 1 que puede ver a continuacion",
            foto: "https://c4.wallpaperflare.com/wallpaper/912/685/297/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        },
        {
            nombre: "Nombre2",
            puesto: "Puesto2",
            descripcion: "Esta es la descripcion para:",
            foto: "https://c4.wallpaperflare.com/wallpaper/505/881/248/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        },
        {
            nombre: "Nombre3",
            puesto: "Puesto3",
            descripcion: "Esta es la descripcion para:",
            foto: "https://c4.wallpaperflare.com/wallpaper/253/947/731/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        },
        {
            nombre: "Nombre4",
            puesto: "Puesto4",
            descripcion: "Esta es la descripcion para:",
            foto: "https://c4.wallpaperflare.com/wallpaper/878/968/35/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        },
    ]);

    useEffect(() => {
        try {
            new APIService()
                .getAdmins()
                .then((res) => {
                    console.log({ res });
                })
                .catch((err) => {
                    console.log([err]);
                });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const header = (foto) => {
        return <img alt="Card" src={foto} onError={(e) => (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")} />;
    };

    const footer = (admin) => {
        return (
            <span>
                <Button label="Ok" icon="pi pi-check" />
                <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
            </span>
        );
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h2>Administradores Registrados</h2>
                    <div>
                        {listaAdministradores.length !== 0 ? (
                            listaAdministradores.map((admin) => (
                                <>
                                    <Card title={admin.nombre} subTitle={admin.puesto} style={{ width: "25em" }} footer={()=>footer(admin)} header={()=>header(admin.foto)}>
                                        <p className="m-0" style={{ lineHeight: "1.5" }}>
                                            {admin.descripcion}
                                        </p>
                                    </Card>
                                </>
                            ))
                        ) : (
                            <>
                                <p>No Admin's :(</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Administradores;
