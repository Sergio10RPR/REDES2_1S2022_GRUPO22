import React, { useEffect, useState } from "react";
import { APIService } from "../service/APIService";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const Desarrolladores = () => {
    const [listaDesarrolladores, setListaDesarrolladores] = useState([
        // {
        //     nombre_dev: "Ayrton Yeltsin de Leon",
        //     nombre_rol: "FronEnd-Developer",
        //     carnet: "201602756",
        //     nombre_curso: "Redes de Computadoras 2",
        //     descripcion: "Esta es la descripcion para: El usuario numero 1 que puede ver a continuacion",
        //     link_imagen: "https://c4.wallpaperflare.com/wallpaper/912/685/297/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        // },
        // {
        //     nombre_dev: "Cristian Alberto Suy",
        //     nombre_rol: "Puesto2",
        //     carnet: "201798404",
        //     nombre_curso: "Redes de Computadoras 2",
        //     descripcion: "Esta es la descripcion para:",
        //     link_imagen: "https://c4.wallpaperflare.com/wallpaper/505/881/248/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        // },
        // {
        //     nombre_dev: "Nombre3",
        //     nombre_rol: "Puesto3",
        //     carnet: "202008923",
        //     nombre_curso: "Sistemas Operativos",
        //     descripcion: "Esta es la descripcion para:",
        //     link_imagen: "https://c4.wallpaperflare.com/wallpaper/253/947/731/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        // },
        // {
        //     nombre_dev: "Nombre4",
        //     nombre_rol: "Puesto4",
        //     carnet: "202100000",
        //     nombre_curso: "Redes de Computadoras 2",
        //     descripcion: "Esta es la descripcion para:",
        //     link_imagen: "https://c4.wallpaperflare.com/wallpaper/878/968/35/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        // },
    ]);

    useEffect(() => {
        try {
            new APIService()
                .getDevelopers()
                .then((res) => {
                    console.log(res.data.data);
                    setListaDesarrolladores(res.data.data)
                })
                .catch((err) => {
                    console.log([err]);
                });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const header = (link_imagen) => {
        return <img alt="Card" src={link_imagen !== null? link_imagen: ''} onError={(e) => (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")} />;
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
                    <h2>Desarrolladores Registrados</h2>
                    <div>
                        {listaDesarrolladores.length !== 0 ? (
                            listaDesarrolladores.map((admin) => (
                                <>
                                    <Card title={admin.nombre_dev} subTitle={admin.nombre_rol} style={{ width: "25em" }} footer={() => footer(admin)} header={() => header(admin.link_imagen)}>
                                        <p className="m-0" style={{ lineHeight: "1.5" }}>
                                            Carnet:{admin.carnet}
                                        </p>
                                        <p className="m-0" style={{ lineHeight: "1.5" }}>
                                            nombre_curso:{admin.nombre_curso}
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

export default Desarrolladores;
