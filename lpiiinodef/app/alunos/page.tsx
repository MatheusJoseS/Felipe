import { ClipLoader } from 'react-spinners'
import { Table } from 'react-bootstrap';
import React from 'react'
import AlunoApi from './api/AlunoApi'

function Page(){
    const [loading, setLoading] = React.useState<boolean>(false)
    const [alunos, setAlunos] = React.useState<any[]>([])
    React.useEffect(() => {
        setLoading(true)
        AlunoApi.getAlunos()
        .then(data => { setAlunos(data); setLoading(false)})
        .catch(arr => setLoading(false))
    }, [])
    return(
<>
<h1>Page de Alunos</h1>
<Table>
    <thead>
        <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Curso</th>
        </tr>
    </thead>
    <tbody>
    {loading && <ClipLoader
            color ={"pink"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />}
        {alunos && alunos.map((aluno: any, i:number) => (
            <tr key={i}></tr>
        ))}
    </tbody>
</Table>
</>
    )
}