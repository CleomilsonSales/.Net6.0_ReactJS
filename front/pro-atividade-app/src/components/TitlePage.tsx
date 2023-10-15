//atalho pra criação de um jsx
//rfc
import React from 'react'

//{ title } desestruturação do componenente para não usar o props
//passando o botão pela desestruturação de componente


//o typescript exigi que vc defina um type para os parametros, dar pra usar um any, mas não é boa pratica, ex.: const TitlePage = ({ title, children } : any) => {
interface TitlePageProps{
  title: string;
  children?: React.ReactNode; //? informa que o parametro poder ser nulo
}

const TitlePage: React.FC<TitlePageProps> = ({ title, children } : TitlePageProps) => { //FC function component
  return (
    <div className='d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1'>        
        <h1 className='m-0 p-0'>
          { title }  
        </h1>
        { children }
    </div>
  )
}

export default TitlePage;