export const SeartResult = ({ data }) => {
  const dataJson = [data];
  const filterData = dataJson?.filter((resData) => resData[0]);

  const dataList = [data];

  const resutList = dataList[0]?.map((item) => {
    return (
      <>
        {data ? (
          <div>
            <span key={item.id} style={{ textDecoration: "none" }}>
              <h5>Produto adiquerido pelo cliente</h5>
              <span>
                <img className="name" src={item.productImage} alt="img" />
                <p className="name">
                  <strong>Nome: </strong>
                  {item.productName}
                </p>
                <p className="name">
                  <strong>Preço: </strong>
                  {item.productPrice},00
                </p>
                <p className="name">
                  <strong>Quantidade: </strong>
                  {item.productQuantity}
                </p>
                <p className="name">
                  <strong>Tamnho: </strong>
                  {item.productSize}
                </p>
                <p className="name">
                  <strong>Cor: </strong>
                  {item.productClolor}
                </p>
                <hr className="hr2" />
                <br />
                <br />
                <br />
              </span>
            </span>
          </div>
        ) : (
          <h4>Veja se voçe escreveu corretamente</h4>
        )}
      </>
    );
  });
  return (
    <div>
      <>
        {filterData.map((res) => {
          //console.log(res[0]);

          const {
            id,
            name,
            email,
            phone,
            state,
            city,
            number,
            street,
            district,
            cep,
            apartment_or_house,
            update_at,
          } = res[0];

          return (
            <>
              <h3>O produto localizado foi!</h3>
              <p className="name">
                <strong>Pedido Processado em: </strong>
                {update_at}
              </p>
              <hr className="hr1" />
              <span key={id} style={{ textDecoration: "none" }}>
                <h5>Dados do cliente</h5>
                <span>
                  <p className="name">
                    <strong>name: </strong>
                    {name}
                  </p>
                  <p className="name">
                    <strong>E-mail: </strong>
                    {email}
                  </p>
                  <p className="name">
                    <strong>Phone: </strong>
                    {phone}
                  </p>
                  {/*<p className="name"><strong>CPF: </strong>{item.cpf}</p>*/}
                  <hr className="hr2" />
                </span>
              </span>
              <span key={id} style={{ textDecoration: "none" }}>
                <h5>Endereço do cliente</h5>
                <span>
                  <p className="name">
                    <strong>Estado: </strong>
                    {state}
                  </p>
                  <p className="name">
                    <strong>Cidade: </strong>
                    {city}
                  </p>
                  <p className="name">
                    <strong>Cep: </strong>
                    {cep}
                  </p>
                  <p className="name">
                    <strong>Bairo: </strong>
                    {district}
                  </p>
                  <p className="name">
                    <strong>Rua: </strong>
                    {street}
                  </p>
                  <p className="name">
                    <strong>Número: </strong>
                    {number}
                  </p>
                  <p className="name">
                    <strong>Cidade: </strong>
                    {apartment_or_house}
                  </p>
                  <hr className="hr2" />
                </span>
              </span>
            </>
          );
        })}
      </>
      ;{resutList}
    </div>
  );
};
