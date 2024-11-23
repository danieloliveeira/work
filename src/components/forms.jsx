/* eslint-disable react/prop-types */


export function Form({title, textButton}) {



  return (
    <form >
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="codigo" />
        
      </div>
      <div className="field">
        <input placeholder="Condicao" />
      
      </div>

      <div className="field">
        <input placeholder="Cor" />
      </div>

      <div className="field">
        <textarea placeholder="Marca" />
      </div>

      <div className="field">
        <textarea placeholder="Observacoes"/>
      </div>
      <div className="field">
        <textarea placeholder="Peso" />
      </div>

      <div className="field">
        <textarea placeholder="Preco" />
      </div>

      <div className="field">
        <textarea placeholder="Quantidade" />
      </div>

      <div className="field">
        <textarea placeholder="Produto" />
      </div>
      <button type="submit">{textButton}</button>
    </form>
  );
}