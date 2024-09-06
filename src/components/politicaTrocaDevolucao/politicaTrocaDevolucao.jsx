
import React from 'react'
import { ContainerPolitica } from './styled';
import { Link } from 'react-router-dom';

export function PoliticasDevolucaoTroca() {
  return (
    <>
        <ContainerPolitica>
            <br />
            <Link to="/" style={{textDecoration: "none"}}>Voltar Para o site</Link>
            <h2>Política de Troca e Devolução</h2>
            <h4>REGRAS GERAIS</h4>
            <p>
                O cliente que realiza compras na nossa loja virtual pode solicitar a devolução ou troca do pedido em até 24 horas após o recebimento do(s) produto(s). Nesses casos, o cliente poderá solicitar reembolso do valor da compra ou crédito referente ao valor do produto para uma nova compra, descontado a taxa do frete multiplicada por dois.

                O produto a ser devolvido deverá estar sem uso em sua embalagem original e não danificada.

                Tanto para troca quanto para devoluções você deverá preencher o formulário de "Devolução" e solicitar o início do procedimento.

                
                Itens personalizados
                Não é possível trocar ou cancelar qualquer produto personalizado que não apresentem defeito, em razão da customização do produto.

                Caso seu item personalizado apresente defeito no produto ou na personalização, por favor, siga o procedimento de troca e devolução.

                

                Procedimento de devolução OU TROCA
                A devolução ou troca será feita pela nossa equipe de logóstica e por isso o valor do frete será descontado.

                
                Restituição de valores
                A restituição dos valores pagos pelo cliente será da mesma maneira escolhida no processo de pagamento da compra inicial descontado o valor do frete.

                - Cartão de crédito: no caso da compra efetuada com cartão de crédito, a devolução do valor total ou parcial ocorre através de estorno no cartão de crédito em até 2 faturas após a solicitação de devolução.

                - Boleto Bancário: a devolução de valores para compras realizadas através de boleto bancário ocorre através de reembolso na conta corrente do titular da compra em até 10 dias úteis após o cancelamento. Não serão aceitas contas de terceiros.

Importante: A restituição dos valores será processada somente após o recebimento e análise das condições do produto em nosso escritório e de acordo com as condições de troca ou devolução. O produto não poderá trazer qualquer indício de uso.
            </p>
            
        </ContainerPolitica>
    </>
  )
}
