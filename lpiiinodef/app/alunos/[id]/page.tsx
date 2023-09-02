"use Client"

import { timeout } from '@/shared/utils/index';
import { Produto } from '@/shared/models/index';
import { useState, useEffect, Suspense } from 'react'
import { Circles } from "react-loader-spinner";

import Loading from './loading';

//Depois, adicionar o seguinte conteudo:

export default function Cards() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        carregaProdutos();
    }, [])

    const carregaProdutos = async () => {
        setLoading(true);
        await timeout(2000);
        const res = await fetch('http://localhost:38000/produtos');
        const data = await res.json();
        setProdutos(data);
        setLoading(false);
    }

    return (
        <div>Pagina do Aluno {params.id}<br/>
        

        </div>

    )


}