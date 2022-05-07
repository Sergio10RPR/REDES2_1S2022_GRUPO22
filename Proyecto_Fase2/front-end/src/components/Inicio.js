import React, { useState, useEffect } from "react";
import { Galleria } from "primereact/galleria";
import { APIService } from "../service/APIService";

const Inicio = () => {
    const [listaImagenes, setListaImagenes] = useState([
        // {
        //     itemImageSrc: "https://c4.wallpaperflare.com/wallpaper/912/685/297/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        //     thumbnailImageSrc: "https://c4.wallpaperflare.com/wallpaper/912/685/297/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        //     alt: "windows2",
        // },
        // {
        //     itemImageSrc: "https://c4.wallpaperflare.com/wallpaper/474/914/509/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        //     thumbnailImageSrc: "https://c4.wallpaperflare.com/wallpaper/474/914/509/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-preview.jpg",
        //     alt: "windows",
        // },
    ]);

    const responsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 5,
        },
        {
            breakpoint: "768px",
            numVisible: 3,
        },
        {
            breakpoint: "560px",
            numVisible: 1,
        },
    ];

    useEffect(() => {
        try {
            new APIService()
                .getImages()
                .then((res) => {
                    let lista = res.data.data.map((item) => {
                        return { itemImageSrc: item.link_imagen, thumbnailImageSrc: item.link_imagen, alt: `imagen-no-${item.id_image}` };
                    });
                    setListaImagenes(lista);
                })
                .catch((err) => {});
        } catch (error) {
            console.error(error);
        }
    }, []);

    const itemTemplate = (item) => {
        return <img preview src={item.itemImageSrc} onError={(e) => (e.target.src = "https://www.bandswallpapers.com/data/media/1/AC_DC_1b1.jpg")} alt={item.alt} style={{ width: "100%" }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} onError={(e) => (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")} alt={item.alt} style={{ display: "block" }} />;
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h2>Galeria de Fotografias</h2>
                    <Galleria value={listaImagenes} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: "640px" }} showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
                </div>
            </div>
        </div>
    );
};

export default Inicio;
