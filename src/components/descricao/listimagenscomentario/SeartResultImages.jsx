//mport { useNavigate } from "react-router-dom"

export const SeartResultIamges = ({data, comnetario}) => {

	//const navigate = useNavigate()

	/*function LocalSto(e) {

    localStorage.removeItem("id")

    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)
    localStorage.setItem("categoryId", e.id)
    
    Description()
  }*/

    //console.log(data, "t")

	const resutList = data.map(item => {
		return (
			<>
				{/* data ?
					<div>
						<span key={item.id} style={{textDecoration: "none"}}>
							<span>
								<p></p>
								{
									item.image[0] ? <img src={item.image[0]} alt="img" /> : ""
								}
							</span>
						</span>
					</div> : 
				<h4>Veja se voçe escreveu corretamente</h4>
							*/}
			</>
		)
	})

	return (
		<div>
			{resutList}
		</div>
	)
}
