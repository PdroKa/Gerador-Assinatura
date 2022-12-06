import React from 'react'
import { useState } from 'react'
import './style.css'

export function Assinatura({nome, cargo, email, telefone}) {
    return (
        <div className='assinatura'>
            <div className='assinatura-total'>
                <section className='section-conteudo'>
                    <div className="assinatura-logo">
                        <h1 className='assinatura-logo'>LOGO</h1>
                        <p className='descricao-logo-img'>NOME DESTA EMPRESA</p>
                    </div>
                    <ul className='lista-conteudo'>
                        <li className='lista-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-vcard-fill" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8Zm1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5ZM7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
                            </svg>
                            <h3>{nome}</h3>
                        </li>
                        <li className='lista-item'>
                            <i>{cargo}</i>
                        </li>
                        <li className='lista-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>
                            <i>{email}</i>
                        </li>
                        <li className='lista-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe-americas" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                            </svg>
                            <a href="#" className='site'><i>www.kauanreis.com.br</i></a>
                        </li>
                        <li className='lista-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <i>{telefone}</i>
                        </li>
                        <li className='lista-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            <i>BR 116, n° 7777, CIC - Curitiba/PR</i>
                        </li>
                    </ul>
                </section>

                <section className='section-info'>
                    <p className='info'>
                        <i className='lgpd'>"O uso das informações contidas neste e-mail está submetido a sigilo profissional.
                            As informações são confidenciais para uso exclusivo e específico do destinatário</i>, <i className='lgpd'> o conteúdo não reflete necessariamente a opinião de Kauan Reis. Se você não é o receptor pretendido</i>, <i className='lgpd'>notifico que não está autorizado a utilizar</i>, <i className='lgpd'>divulgar ou encaminhar esta mensagem</i>, <i className='lgpd'>caso tenha recebido equivocadamente</i>, <i className='lgpd'>por favor entre em contato com o remetente e descarte a informação aqui contida.
                                Reiteramos que Kauan Reis possui um compromisso com a observância dos preceitos referentes à Lei Geral de Proteção de Dados
                                e ao Marco Civil da Internet</i>, <i className='lgpd'>bem como em garantir todos os direitos assegurados por lei aos titulares de dados pessoais."</i>
                    </p>
                </section>
            </div>
            <div className="alerta alert alert-danger">
                <i><h4>Atenção!</h4> Caso você não saiba colocar a Assinatura no seu Webmail, <a href="https://support.microsoft.com/pt-br/office/criar-e-adicionar-uma-assinatura-de-email-no-outlook-5ff9dcfd-d3f1-447b-b2e9-39f91b074ea3" className="alert-link" target="_blank"> Clique-Aqui</a>.</i>
            </div>
        </div>
    )
}