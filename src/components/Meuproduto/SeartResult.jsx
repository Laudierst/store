export const SeartResult = ({data}) => {

	console.log(data)

	const resutList = data.map(item => {
		return (
			<>
				{ data ?
					<div>
						<h3>O produto localizado foi!</h3>
						<p className="name"><strong>Pedido Processado em: </strong>{item.update_at}</p>
						<hr className="hr1" />
						<span key={item.id} style={{textDecoration: "none"}}>
							<h5>Dados do cliente</h5>
							<span>
								<p className="name"><strong>name: </strong>{item.name}</p>
								<p className="name"><strong>E-mail: </strong>{item.email}</p>
								<p className="name"><strong>Phone: </strong>{item.phone}</p>
								<p className="name"><strong>CPF: </strong>{item.cpf}</p>
								<hr className="hr2" />
							</span>
						</span>
						<span key={item.id} style={{textDecoration: "none"}}>
							<h5>Endereço do cliente</h5>
							<span>
								<p className="name"><strong>Estado: </strong>{item.state}</p>
								<p className="name"><strong>Cidade: </strong>{item.city}</p>
								<p className="name"><strong>Cep: </strong>{item.cep}</p>
								<p className="name"><strong>Bairo: </strong>{item.district}</p>
								<p className="name"><strong>Estado: </strong>{item.number}</p>
								<p className="name"><strong>Cidade: </strong>{item.apartment_or_house}</p>
								<hr className="hr2" />
							</span>
						</span>
						<span key={item.id} style={{textDecoration: "none"}}>
							<h5>Produto adiquerido pelo cliente</h5>
							<span>
								<img className="name" src={item.productImage} alt="img"/>
								<p className="name"><strong>Nome: </strong>{item.productName}</p>
								<p className="name"><strong>Preço: </strong>{item.productPrice},00</p>
								<p className="name"><strong>Quantidade: </strong>{item.productQuantity}</p>
								<p className="name"><strong>Tamnho: </strong>{item.productSize}</p>
								<p className="name"><strong>Cor: </strong>{item.productClolor}</p>
								<hr className="hr2" />
								<br /><br /><br />
							</span>
						</span>
					</div> : 
				<h4>Veja se voçe escreveu corretamente</h4>
				}
			</>
		)
	})

	return (
		<div>
			{resutList}
		</div>
	)
}
