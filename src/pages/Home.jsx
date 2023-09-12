import { useState, useEffect } from 'react';

import { Title } from '../components/Title';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { Graphic } from '../components/Graphic';
import { GraphicMonth } from '../components/GraphicMonth';

import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineBank, AiOutlineCreditCard } from 'react-icons/ai';
import months from '../data/months.json';
import '../assets/style/home.css';
import { createDataExpenses, getDataExpenses } from '../utils/getDataExpenses';
import { generateDateHour } from '../utils/newDataHour';
import { saveObjDataExpenses,generateId,getRevenue,getExpenses,getCurrentBalance } from '../controllers/ExpensesController';
import { validaInput } from '../utils/validationInput';




function App() {

  const [objExpenses, setObjExpenses] = useState("")
  const [saveObjExpenses, setSaveObjExpenses] = useState({
    id: "",
    descricao: "",
    valor: 0,
    tipo: "",
    data: generateDateHour(),
    status: "1"
  })


  async function getResquestPage() {
    createDataExpenses();
    const objExpensesStorage = await getDataExpenses();
    setObjExpenses(objExpensesStorage)
  }

  const handleInputChange = (event) => {
    setSaveObjExpenses(
      { ...saveObjExpenses, [event.target.name]: event.target.value }
    );
  };

  const createExpense = () => {
    if (validaInput(saveObjExpenses.descricao, "Descrição")
      && validaInput(saveObjExpenses.valor, "Valor")
      && validaInput(saveObjExpenses.tipo, " Receita ou Despesa")
    ) {
      saveObjExpenses.id = generateId();
      if (saveObjDataExpenses(saveObjExpenses)) {
        setSaveObjExpenses({
          descricao: "",
          valor: 0,
          tipo: "",
        })
      }
      getResquestPage();

    }
  };


  useEffect(() => {
    getResquestPage();
  }, []);

  return (
    <>
      <div className="container-main">

        {/* Header */}
        <div>
          <div className='container-select'>
            <Select datas={months} />
          </div>
        </div>

        {/* TITULO */}
        <div className='section'>
          <Title className="title-page">Dashboard</Title>
        </div>

        {/* Cards  */}
        <div className='container-box'>
          <Card title="Saldo Atual"       value={getCurrentBalance()} bgColor="bg-primary" icon={<AiOutlineBank size={25} color='#FFF' />} />
          <Card title="Receita"           value={getRevenue()} bgColor="bg-success" icon={<AiOutlineArrowUp size={25} color='#FFF' />} />
          <Card title="Despesas"          value={getExpenses()} bgColor="bg-danger" icon={<AiOutlineArrowDown size={25} color='#FFF' />} />
          <Card title="Cartão de Credito" value="1000" bgColor="bg-primary" icon={<AiOutlineCreditCard size={22} color='#FFF' />} />
        </div>

        {/* Formulario nova entrada  */}
        <div className='container-input'>
          <Input value={saveObjExpenses.descricao}  onChange={handleInputChange} name="descricao" className="form-input form-control" placeholder="Descrição" type="text" />
          <Input value={saveObjExpenses.valor}      onChange={handleInputChange} name="valor" className="form-input form-control" placeholder="Valor R$" type="number" />

          <div className='radio-main'>
            <label htmlFor="">Receita</label>
            <Input value="1" onChange={handleInputChange} name="tipo" type="radio" />
            <label htmlFor="">Despesa</label>
            <Input value="2" onChange={handleInputChange} name="tipo" type="radio" />
          </div>

          <Button func={() => createExpense()} className="button btn bg-primary">
            Salvar
          </Button>
          {/* <Toaster /> */}

        </div>

        {/* TABELA */}
        <div className="container-table">
          <Graphic saldo={getCurrentBalance()} despesa={getExpenses()} receita={getRevenue()} />
          <Table data={objExpenses} teste={()=>getResquestPage()} />
        </div>

      </div>

    </>
  )
}

export default App
